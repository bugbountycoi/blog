<!-- JavaScript for the Signal Calc tool. -->

<script>
    (function () {
      const root = document.getElementById("signal-calc");

      const baseline = [
        { label: "🔴 Very Low", min: 0,  max: 20 },
        { label: "🟠 Low",      min: 21, max: 30 },
        { label: "🟡 Medium",   min: 31, max: 45 },
        { label: "🟢 High",     min: 46, max: 60 },
        { label: "🔵 Very High",min: 61, max: 100 }
      ];

      let baselineRanges = JSON.parse(JSON.stringify(baseline));

      const modifiers = {
        "Program Access": [
            { pts: -15, label: "Public + VDP",               exclusive: true, code: "PV" },
            { pts: -10, label: "Public",                     exclusive: true, code: "P" },
            { pts: -7,  label: "VDP",                        exclusive: true, code: "V" },
            { pts: -5,  label: "Public + VDP + Private",     exclusive: true, code: "PVI" },
            { pts: -3,  label: "VDP + Private",              exclusive: true, code: "VI" },
            { pts: +5,  label: "Public + Private",           exclusive: true, code: "PI" },
            { pts: +10, label: "Private",                    exclusive: true, code: "I" }
        ],

        "Program Scope": [
            { pts: -5, label: "IT/Infrastructure assets excluded", code: "ITX" },
            { pts: -5, label: "Many OSS assets included",          code: "MOSS" },
            { pts: -3, label: "One/few OSS assets included",       code: "OSS" },
            { pts: -2, label: "Software assets included",          code: "SW" },
            { pts: +2, label: "Hardware assets included",          code: "HW" }
        ],

        "Engagement Activities": [
            { pts: -2, label: "Hacker community sponsorship", code: "HCS" },
            { pts: -1, label: "Public Show & Tell",           code: "PST" },
            { pts: +1, label: "1–3 promotions/bonuses",       code: "PR1" },
            { pts: +1, label: "Public training webinar",      code: "WEB" }
        ],

        "Events": [
            { pts: +5,  label: "One LHE",              exclusive: true, subgroup: "LHE",            code: "L1" },
            { pts: +8,  label: "2–3 LHE",              exclusive: true, subgroup: "LHE",            code: "L2" },
            { pts: +12, label: "4+ LHE",               exclusive: true, subgroup: "LHE",            code: "L4" },

            { pts: -5,  label: "One public VHE",       exclusive: true, subgroup: "Public VHE",     code: "PV1" },
            { pts: -8,  label: "2+ public VHE",        exclusive: true, subgroup: "Public VHE",     code: "PV2" },

            { pts: +2,  label: "One invite-only VHE",  exclusive: true, subgroup: "Invite-only VHE", code: "IV1" },
            { pts: +4,  label: "2+ invite-only VHE",   exclusive: true, subgroup: "Invite-only VHE", code: "IV2" }
        ]
        };


      const state = {
        active: {},
        total: 0
      };

      function createEl(tag, props = {}, children = []) {
        const el = document.createElement(tag);
        for (const [k, v] of Object.entries(props)) {
          if (k === "text") {
            el.textContent = v;
          } else if (k === "class") {
            el.className = v;
          } else if (k === "style") {
            el.setAttribute("style", v);
          } else if (k === "disabled") {
            if (v) el.disabled = true;
          } else {
            el.setAttribute(k, v);
          }
        }
        if (!Array.isArray(children)) children = [children];
        children.forEach(c => {
          if (c) el.appendChild(c);
        });
        return el;
      }

      function buildInitialUI() {
        const title = createEl("h1", { text: "Signal Estimation" });
        const subtitle = createEl("p", {
          class: "subtitle",
          text: "Adjust the baseline ranges and apply program modifiers to estimate the overall signal strength."
        });
        root.appendChild(title);
        root.appendChild(subtitle);

        const header = createEl("div", { class: "floating-header" });

        const left = createEl("div", { class: "floating-header-left" });
        const headerTitle = createEl("div", {
          class: "floating-header-title",
          text: "Current signal estimate"
        });
        const main = createEl("div", { class: "floating-header-main" });

        const totalLabel = createEl("span", {
          class: "total-mod-label",
          text: "Total modifier:"
        });
        const totalSpan = createEl("span", {
          class: "total-mod",
          text: "+0"
        });
        totalSpan.classList.add("pos");
        totalSpan.setAttribute("data-role", "total-mod");

        main.appendChild(totalLabel);
        main.appendChild(totalSpan);

        left.appendChild(headerTitle);
        left.appendChild(main);

        const right = createEl("div", { class: "floating-header-right" });
        const chip = createEl("div", {
          class: "chip",
          text: "Baseline + Modifiers → Adjusted Scale"
        });
        const scrollBtn = createEl("button", {
          class: "scroll-top-btn",
          id: "scroll-top",
          text: "Back to top"
        });

        right.appendChild(chip);
        right.appendChild(scrollBtn);

        header.appendChild(left);
        header.appendChild(right);
        root.appendChild(header);

        const baselineCard = createEl("div", { class: "card baseline-card" }, [
          createEl("h3", { text: "Baseline Ranges" }),
          createEl("div", { class: "baseline-box" })
        ]);
        root.appendChild(baselineCard);

        const resetBaselineBtn = createEl("button", {
          id: "reset-baseline",
          class: "reset-btn secondary",
          text: "Reset Baseline"
        });
        root.appendChild(resetBaselineBtn);

        const adjustedCard = createEl("div", { class: "card adjusted-card" }, [
          createEl("h3", { text: "Adjusted Scale" }),
          createEl("div", { class: "scale-box" })
        ]);
        root.appendChild(adjustedCard);

        const modifiersCard = createEl("div", { class: "card modifiers-card" });
        const modTitle = createEl("h3", { text: "Program Modifiers" });
        modifiersCard.appendChild(modTitle);

        Object.entries(modifiers).forEach(([groupName, items]) => {
          const group = createEl("div", { class: "modifier-group" });
          const groupTitle = createEl("div", {
            class: "modifier-group-title",
            text: groupName
          });
          const btnRow = createEl("div", { class: "modifier-buttons" });

          items.forEach((item, idx) => {
            const btn = createEl("button", {
              class: "mod-btn " + (item.pts >= 0 ? "positive" : "negative"),
              "data-group": groupName,
              "data-index": idx.toString(),
              "data-code": item.code
            });

            const ptsSpan = createEl("span", {
              class: "points",
              text: (item.pts >= 0 ? "+" : "") + item.pts
            });
            const labelSpan = createEl("span", { text: item.label });

            btn.appendChild(ptsSpan);
            btn.appendChild(labelSpan);
            btnRow.appendChild(btn);
          });

          group.appendChild(groupTitle);
          group.appendChild(btnRow);
          modifiersCard.appendChild(group);
        });

        const resetModsBtn = createEl("button", {
          id: "reset-modifiers",
          class: "reset-btn",
          text: "Reset Modifiers"
        });
        modifiersCard.appendChild(resetModsBtn);

        root.appendChild(modifiersCard);

        const footer = createEl("div", {
          class: "footer-note",
          text: "Baseline ranges and modifiers are for estimation and exploration only."
        });
        root.appendChild(footer);
      }

      function clampBaseline() {
        baselineRanges.forEach(r => {
          r.min = Math.max(0, r.min);
          r.max = Math.min(100, r.max);
        });

        baselineRanges[0].min = 0;

        baselineRanges.forEach(r => {
          if (r.max <= r.min) {
            r.max = r.min + 1;
          }
        });

        for (let i = 1; i < baselineRanges.length; i++) {
          const prev = baselineRanges[i - 1];
          const curr = baselineRanges[i];

          if (curr.min <= prev.max) {
            curr.min = prev.max + 1;
          }

          if (curr.max <= curr.min) {
            curr.max = curr.min + 1;
          }
        }

        for (let i = baselineRanges.length - 2; i >= 0; i--) {
          const curr = baselineRanges[i];
          const next = baselineRanges[i + 1];

          if (curr.max >= next.min) {
            curr.max = next.min - 1;
          }

          if (curr.max <= curr.min) {
            curr.min = curr.max - 1;
            if (curr.min < 0) curr.min = 0;
          }
        }

        baselineRanges[baselineRanges.length - 1].max = 100;
      }

      function renderBaselineEditor() {
        const box = root.querySelector(".baseline-box");
        box.innerHTML = "";

        baselineRanges.forEach((r, i) => {
          const row = createEl("div", { class: "baseline-row" });

          const label = createEl("div", { class: "baseline-label", text: r.label });
          row.appendChild(label);

          const minControls = createEl("div", { class: "baseline-controls" }, [
            createEl("span", { class: "value-pill", text: r.min }),
            createEl("div", { class: "btn-group" }, [
              createEl("button", {
                class: "baseline-btn icon-btn",
                "data-index": i,
                "data-bound": "min",
                "data-dir": "-",
                text: "–",
                disabled: i === 0
              }),
              createEl("button", {
                class: "baseline-btn icon-btn",
                "data-index": i,
                "data-bound": "min",
                "data-dir": "+",
                text: "+",
                disabled: i === 0
              })
            ])
          ]);

          const maxControls = createEl("div", { class: "baseline-controls" }, [
            createEl("span", { class: "value-pill", text: r.max }),
            createEl("div", { class: "btn-group" }, [
              createEl("button", {
                class: "baseline-btn icon-btn",
                "data-index": i,
                "data-bound": "max",
                "data-dir": "-",
                text: "–",
                disabled: i === baselineRanges.length - 1
              }),
              createEl("button", {
                class: "baseline-btn icon-btn",
                "data-index": i,
                "data-bound": "max",
                "data-dir": "+",
                text: "+",
                disabled: i === baselineRanges.length - 1
              })
            ])
          ]);

          row.appendChild(minControls);
          row.appendChild(maxControls);

          box.appendChild(row);
        });
      }

      function applyShift(baselineRanges, total) {
        return baselineRanges.map((r, i) => {
          const emoji = baseline[i].label.split(" ")[0];
          const label = `${emoji} ${r.min}–${r.max}%`;
          return {
            label,
            min: r.min + total,
            max: r.max + total
          };
        });
      }

      function clampRanges(ranges) {
        return ranges.map(r => {
          let min = Math.max(0, r.min);
          let max = Math.min(100, r.max);
          if (max < min + 1) max = min + 1;
          return { ...r, min, max };
        });
      }

      function renderScale(ranges, total) {
        const scaleBox = root.querySelector(".scale-box");
        scaleBox.innerHTML = "";

        ranges.forEach((r) => {
          const bar = createEl("div", { class: "scale-row" });

          const label = createEl("div", {
            class: "scale-label",
            text: r.label
          });

          const rawWidth = r.max - r.min; 
          const visualWidth = Math.max(5, rawWidth * 2); // exaggerate by 100%
          const range = createEl("div", { class: "scale-bar" }, [
            createEl("div", {
              class: "scale-fill",
              style: `width:${visualWidth}%;`
            })
          ]);

          const values = createEl("div", {
            class: "scale-values",
            text: `${r.min}–${r.max}%`
          });

          bar.appendChild(label);
          bar.appendChild(range);
          bar.appendChild(values);

          scaleBox.appendChild(bar);
        });

        const totalSpan = root.querySelector('[data-role="total-mod"]');
        totalSpan.textContent = (total >= 0 ? "+" : "") + total;
        totalSpan.className = "total-mod " + (total >= 0 ? "pos" : "neg");
      }

      function calculateTotal(active) {
        return Object.values(active).reduce((sum, v) => sum + v, 0);
      }

      function encodeURL() {
        const params = new URLSearchParams();

        // --- Encode active modifiers ---
        const activeCodes = Object.keys(state.active);
        if (activeCodes.length) {
            params.set("mods", activeCodes.join(","));
        }

        // --- Encode baseline ranges ---
        const base = baselineRanges.map(r => `${r.min}-${r.max}`).join(",");
        params.set("base", base);

        // --- Encode adjusted scale (baseline + total modifier) ---
        const shifted = applyShift(baselineRanges, state.total);
        const clamped = clampRanges(shifted);
        const adj = clamped.map(r => `${r.min}-${r.max}`).join(",");
        params.set("adj", adj);

        const newUrl = window.location.pathname + "?" + params.toString();
        window.history.replaceState({}, "", newUrl);
      }


      function decodeURL() {
        const params = new URLSearchParams(window.location.search);
        const modsParam = params.get("mods");
        const baseParam = params.get("base");

        state.active = {};

        if (modsParam) {
          const codes = modsParam.split(",");
          Object.entries(modifiers).forEach(([groupName, items]) => {
            items.forEach(item => {
              if (codes.includes(item.code)) {
                state.active[item.code] = item.pts;
              }
            });
          });
        }

        if (baseParam) {
          const parts = baseParam.split(",");
          if (parts.length === baselineRanges.length) {
            const parsed = parts.map(p => {
              const [minStr, maxStr] = p.split("-");
              return {
                min: parseInt(minStr, 10),
                max: parseInt(maxStr, 10)
              };
            });
            parsed.forEach((p, i) => {
              if (!isNaN(p.min) && !isNaN(p.max)) {
                baselineRanges[i].min = p.min;
                baselineRanges[i].max = p.max;
              }
            });
            clampBaseline();
          }
        }

        const adjParam = params.get("adj");
        if (adjParam) {
            const parts = adjParam.split(",");
            if (parts.length === baselineRanges.length) {
                const parsed = parts.map(p => {
                const [minStr, maxStr] = p.split("-");
                return {
                    min: parseInt(minStr, 10),
                    max: parseInt(maxStr, 10)
                };
                });

                // Replace baselineRanges with decoded adjusted ranges
                parsed.forEach((p, i) => {
                if (!isNaN(p.min) && !isNaN(p.max)) {
                    baselineRanges[i].min = p.min;
                    baselineRanges[i].max = p.max;
                }
                });

                clampBaseline();
            }
        }
      }

      function renderModifiers() {
        const buttons = root.querySelectorAll(".mod-btn");
        buttons.forEach(btn => {
          const code = btn.getAttribute("data-code");
          if (state.active[code]) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      }

      function resetBaseline() {
        baselineRanges = JSON.parse(JSON.stringify(baseline));
        clampBaseline();
        renderBaselineEditor();
        update();
      }

      function resetModifiers() {
        state.active = {};
        renderModifiers();
        update();
      }

      function update() {
        state.total = calculateTotal(state.active);
        const shifted = applyShift(baselineRanges, state.total);
        const clamped = clampRanges(shifted);
        renderScale(clamped, state.total);
        encodeURL();
      }

      function handleClick(e) {
        const btn = e.target.closest("button");
        if (!btn) return;

        if (btn.id === "scroll-top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        if (btn.id === "reset-baseline") {
          resetBaseline();
          return;
        }

        if (btn.id === "reset-modifiers") {
          resetModifiers();
          return;
        }

        if (btn.classList.contains("mod-btn")) {
  const code = btn.getAttribute("data-code");
  const groupName = btn.getAttribute("data-group");
  const idx = parseInt(btn.getAttribute("data-index"), 10);
  const item = modifiers[groupName][idx];

  // If already active, just toggle off
  if (state.active[code]) {
    delete state.active[code];
    renderModifiers();
    update();
    return;
  }

  // If this item is exclusive, clear conflicting items
  if (item.exclusive) {
    const subgroup = item.subgroup || null;

    modifiers[groupName].forEach(other => {
      if (!other.exclusive) return;

      // Group-only exclusivity (no subgroup): only one in the whole group
      if (!subgroup && !other.subgroup) {
        if (state.active[other.code]) {
          delete state.active[other.code];
        }
      }

      // Subgroup exclusivity: only one per subgroup
      if (subgroup && other.subgroup === subgroup) {
        if (state.active[other.code]) {
          delete state.active[other.code];
        }
      }
    });
  }

  // Activate this item
  state.active[code] = item.pts;

  renderModifiers();
  update();
  return;
}


        if (btn.classList.contains("baseline-btn")) {
          const i = parseInt(btn.getAttribute("data-index"), 10);
          const bound = btn.getAttribute("data-bound");
          const dir = btn.getAttribute("data-dir");

          const delta = dir === "+" ? 1 : -1;
          baselineRanges[i][bound] += delta;

          clampBaseline();
          renderBaselineEditor();
          update();
          return;
        }
      }

      buildInitialUI();
      decodeURL();
      clampBaseline();
      renderBaselineEditor();
      renderModifiers();
      update();

      document.addEventListener("click", handleClick);
    })();
</script>

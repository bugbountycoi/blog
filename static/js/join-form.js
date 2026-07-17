(function () {
  function serializeForm(form) {
    const formData = new FormData(form);
    return {
      fullName: String(formData.get("fullName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      roleTitle: String(formData.get("roleTitle") || "").trim(),
      timezone: String(formData.get("timezone") || "").trim(),
      location: String(formData.get("location") || "").trim(),
      linkedinUrl: String(formData.get("linkedinUrl") || "").trim(),
      referredBy: String(formData.get("referredBy") || "").trim(),
      whyJoin: String(formData.get("whyJoin") || "").trim(),
      expectations: String(formData.get("expectations") || "").trim(),
      websiteSource: String(formData.get("websiteSource") || "").trim(),
      consentToContact: formData.get("consentToContact") === "yes",
      consentToNda: formData.get("consentToNda") === "yes"
    };
  }

  function setStatus(element, message, kind) {
    element.textContent = message;
    element.dataset.state = kind;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const wrapper = form.closest(".bbcoi-join-form");
    const status = form.querySelector(".bbcoi-form-status");
    const button = form.querySelector("button[type='submit']");
    const apiUrl = wrapper && wrapper.dataset.membershipApi;

    if (!apiUrl) {
      setStatus(status, "The membership form is not configured yet.", "error");
      return;
    }

    if (!form.reportValidity()) {
      setStatus(status, "Please complete the required fields before submitting.", "error");
      return;
    }

    button.disabled = true;
    setStatus(status, "Submitting your application…", "pending");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(serializeForm(form))
      });

      const data = await response.json().catch(function () {
        return {};
      });

      if (!response.ok) {
        throw new Error(data.error || "The application could not be submitted.");
      }

      form.reset();
      setStatus(
        status,
        "Your application has been received. The board review is the first step, and approved applicants will be contacted for NDA and payment follow-up.",
        "success"
      );
    } catch (error) {
      setStatus(
        status,
        error instanceof Error ? error.message : "The application could not be submitted.",
        "error"
      );
    } finally {
      button.disabled = false;
    }
  }

  document.querySelectorAll(".bbcoi-membership-form").forEach(function (form) {
    form.addEventListener("submit", handleSubmit);
  });
})();

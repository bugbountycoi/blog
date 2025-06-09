# Developing on this repo

## GitHub Codespace

A [devcontainer](.devcontainer/devcontainer.json) configuration is provided for a consistent remote development environment without the need for manual setup steps. This can also be used locally in IDEs like VS Code or Jetbrains, or tools like <https://devpod.sh/>.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/bugbountycoi/blog?quickstart=1)

## Local Setup

Install hugo and golang:

```shell
# OSX
brew install hugo go pre-commit
# Linux
sudo apt-get install hugo golang pre-commit
```

Note that apt packages may not have the latest versions of the respective software, so <https://brew.sh> is recommended for Linux systems as well.

## Developing locally

Run `make dev` to start the Hugo server in a hot reload mode. Edit your content as desired and see the changes live in your browser. Depending on your changes, you may need to force reload your browser window to view a change.

## Adding new content

Add content to the `content/` directory. You can customize the layout of the page, including the hero image, by following the configuration instructions for the [Ananke theme][ananke].


[ananke]: https://github.com/theNewDynamic/gohugo-theme-ananke?tab=readme-ov-file#getting-started

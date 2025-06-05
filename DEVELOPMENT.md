# Developing on this repo

## Setup

Install hugo and golang:

```shell
# OSX
brew install hugo go
# Linux
sudo apt-get install hugo golang
```

## Developing locally

Run `make dev` to start the Hugo server in a hot reload mode. Edit your content as desired and see the changes live in your browser. Depending on your changes, you may need to force reload your browser window to view a change.

## Adding new content

Add content to the `content/` directory. You can customize the layout of the page, including the hero image, by following the configuration instructions for the [Ananke theme][ananke].


[ananke]: https://github.com/theNewDynamic/gohugo-theme-ananke?tab=readme-ov-file#getting-started

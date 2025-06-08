# Bug Bounty COI Website

[![Deploy site](https://github.com/bugbountycoi/blog/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/bugbountycoi/blog/actions/workflows/deploy.yml)

The Bug Bounty Community of Interest (BBCOI) website serves as a platform for bug bounty program managers from various companies to collaborate and share knowledge.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/bugbountycoi/blog?quickstart=1)

## Features

* Member registration via Google Forms integration
* Member-generated blog content
* Free-use content only

## Architecture

* Static site built with [Hugo](https://gohugo.io/)
* Domain: bugbountycoi.org

## Development Setup

See [DEVELOPMENT.md](DEVELOPMENT.md).

## Content Management

1. Create a new post:
   ```bash
   hugo new content posts/your-post-name.md
   ```

2. Edit the post in `content/posts/your-post-name.md`
3. Set `draft: false` in the front matter when ready to publish

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

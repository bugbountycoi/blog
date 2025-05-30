# Bug Bounty COI Website

The Bug Bounty Community of Interest (BBCOI) website serves as a platform for bug bounty program managers from various companies to collaborate and share knowledge.

## Features

* Member registration via Google Forms integration
* Member-generated blog content
* Responsive design with dark/light mode support
* Free-use content only

## Architecture

* Static site built with [Hugo](https://gohugo.io/)
* Hosted on GitHub Pages
* Automated deployment via GitHub Actions
* Domain: bugbountycoi.org

## Development Setup

1. Install Hugo (v0.147.6 or later):
   ```bash
   brew install hugo
   ```

2. Clone the repository:
   ```bash
   git clone --recursive https://github.com/bugbountycoi/website.git
   cd website
   ```

3. Start the development server:
   ```bash
   hugo server --buildDrafts
   ```

4. View the site at http://localhost:1313

## Content Management

### Adding Blog Posts

1. Create a new post:
   ```bash
   hugo new content posts/your-post-name.md
   ```

2. Edit the post in `content/posts/your-post-name.md`
3. Set `draft: false` in the front matter when ready to publish

### Member Registration

The registration form is embedded in `content/join/_index.md`. Update the Google Form ID in this file with your actual form ID.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process:

1. Triggers on push to main branch
2. Builds the site using Hugo
3. Deploys to GitHub Pages
4. Makes the site available at bugbountycoi.org

To deploy manually:

1. Push changes to the main branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically build and deploy the site

## Contributing

1. Create a new branch for your changes
2. Make your changes and test locally
3. Submit a pull request
4. Wait for review and approval

## License

All content must be free-use for non-commercial purposes.

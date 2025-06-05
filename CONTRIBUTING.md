# Contributing

## General Contributions

1. Create a new branch for your changes
2. Make your changes and test locally
3. Submit a pull request
4. Wait for review and approval

## Framework Updates

Chapters are regularly updated based on:
- Community feedback
- Industry developments
- New best practices
- Real-world experiences

### Contributing Framework Chapters

The Bug Bounty Industry Framework is organized into chapters. To contribute a new chapter:

1. Complete all setup instructions on [DEVELOPMENT.md](DEVELOPMENT.md).
2. Create a new chapter
   ```bash
   hugo new content framework/your-chapter-name.md 
   ```

3. Fill in the chapter front matter:
   ```yaml
   ---
   title: "Your Chapter Title"
   date: YYYY-MM-DD
   chapter: X  # Assign the next available chapter number
   version: "1.0"
   authors: ["Your Name"]
   draft: true
   weight: 100  # Lower numbers appear first in the TOC
   summary: "A brief summary of this chapter"
   ---
   ```

4. Follow the template structure:
   - Overview
   - Key Concepts
   - Guidelines
   - Examples
   - References
   - Changelog

5. Test your changes locally:
   ```bash
   make dev
   ```

6. Submit your chapter:
    - Create a new branch
    - Set `draft: false` on your content when ready
    - Submit a pull request

Framework chapters are reviewed by the BBCOI community before publication.

## License

All content must be free-use for non-commercial purposes.

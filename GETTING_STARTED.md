# Getting Started with Your Personal Website

## What Has Been Done

1. ✅ **Forked the Repository**: Copied all files from Angus F. Chapman's website
2. ✅ **Added Credits**: Created `CREDITS.md` to acknowledge the original author
3. ✅ **Updated Footer**: Added attribution link to Angus Chapman's website
4. ✅ **Basic Configuration**: Updated `_config.yml` with placeholder information
5. ✅ **Git Initialized**: Repository is set up with initial commit
6. ✅ **Updated About Page**: Replaced bio with placeholder text

## Next Steps: Customization

### 1. Personal Information (_config.yml)
Update these fields in `_config.yml`:
- `first_name`, `middle_name`, `last_name`
- `email`
- `title` (appears in browser tab)
- `description`
- `url` (should be `https://bghimire.github.io`)
- `icon` (emoji for favicon)

### 2. About Page (_pages/about.md)
- Replace placeholder bio with your information
- Update `subtitle` with your professional title
- Modify `profile.more_info` with your department/institution
- Write your personal bio in the content section

### 3. Profile Picture
- Replace `assets/img/pf_pic.jpg` with your photo
- Recommended size: at least 400x400 pixels

### 4. Bottom Image (Optional)
- Replace `assets/img/Seattle2017-2.jpg` or disable in about.md
- Update the caption in `_pages/about.md`

### 5. Social Media Links
Edit `_data/socials.yml` to add/update your social profiles:
- GitHub
- LinkedIn
- Twitter/X
- Google Scholar
- ORCID
- Email
- etc.

### 6. News/Announcements
- Delete files in `_news/` folder (these are Angus's news items)
- Add your own news items as markdown files
- Format: `YYYYMMDD_description.md`

### 7. Publications
- Clear `_bibliography/references.bib`
- Add your publications in BibTeX format
- Update scholar settings in `_config.yml`:
  - `scholar.last_name`
  - `scholar.first_name`

### 8. Projects
- Delete or modify files in `_projects/` folder
- Create your own project markdown files
- Each project should have frontmatter with title, description, img, etc.

### 9. Blog Posts
- Delete or keep sample posts in `_posts/` as references
- Create your own blog posts
- Format: `YYYY-MM-DD-title.md`

### 10. CV Data
Update `_data/cv.yml` with your:
- Education
- Work experience
- Skills
- Awards
- Publications

### 11. Clean Up Assets
Remove Angus's content:
- `assets/img/publication_preview/*` (his paper previews)
- `assets/pdf/confposters/*` (his conference posters)
- Add your own images and files

### 12. Research Pages (Optional)
- Review `_pages/research/` folder
- Delete or modify research area pages
- Create your own research area descriptions

### 13. Optional Features
In `_config.yml`, enable/disable:
- Google Analytics (add your tracking ID)
- Newsletter integration
- Comments (Giscus or Disqus)
- Various Jekyll features

## Deployment to GitHub Pages

### Option 1: GitHub Pages (Recommended)
1. Create a repository named `bghimire.github.io` on GitHub
2. Push this code to the repository:
   ```powershell
   git remote add origin https://github.com/bghimire/bghimire.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. Enable GitHub Pages in repository Settings > Pages
4. Select source: GitHub Actions (recommended) or Deploy from branch
5. Site will be live at https://bghimire.github.io

### Option 2: Custom Domain
1. Add a `CNAME` file with your domain
2. Update `_config.yml` url to your custom domain
3. Configure DNS settings at your domain provider

## Local Development

To preview changes locally:

1. **Install Ruby and Jekyll**
   - Windows: Use RubyInstaller (https://rubyinstaller.org/)
   - Install Ruby 3.0+ with DevKit

2. **Install Dependencies**
   ```powershell
   bundle install
   ```

3. **Run Local Server**
   ```powershell
   bundle exec jekyll serve
   ```

4. **View Site**
   - Open browser to http://localhost:4000
   - Changes auto-reload (except _config.yml)

## File Structure Overview

```
├── _config.yml           # Main configuration
├── _pages/              # Static pages (about, CV, etc.)
├── _posts/              # Blog posts
├── _projects/           # Project descriptions
├── _news/               # News announcements
├── _bibliography/       # Publications (BibTeX)
├── _data/               # Structured data (CV, socials, etc.)
├── assets/              # Images, CSS, JS, PDFs
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _sass/               # Styling
└── README.md            # This file
```

## Resources

- **al-folio Documentation**: https://github.com/alshedivat/al-folio
- **Jekyll Documentation**: https://jekyllrb.com/docs/
- **Original Site**: https://afchapman.github.io/ (for reference)

## Troubleshooting

- If GitHub Pages fails to build, check the Actions tab
- For local issues, ensure Ruby version is 3.0+
- Clear Jekyll cache: `bundle exec jekyll clean`

## Support

- Check al-folio issues: https://github.com/alshedivat/al-folio/issues
- Jekyll documentation for general questions
- GitHub Pages documentation for deployment

---

**Remember**: This is YOUR website now. Feel free to modify anything to match your style and needs!

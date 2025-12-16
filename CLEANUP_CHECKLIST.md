# Files to Clean Up - Personal Content from Original Author

This checklist identifies files containing Angus Chapman's personal content that should be removed or replaced with your own.

## HIGH PRIORITY - Replace Immediately

### Personal Information
- [ ] `_config.yml` - Update all personal details (name, email, URLs, Google Analytics)
- [ ] `_pages/about.md` - Replace bio and professional information
- [ ] `_data/socials.yml` - Update social media links
- [ ] `_data/cv.yml` - Replace CV data

### Images
- [ ] `assets/img/pf_pic.jpg` - Your profile picture
- [ ] `assets/img/Seattle2017-2.jpg` - Bottom image on about page (or remove)
- [ ] `assets/img/Seattle2018-1.jpg` - Additional image (or remove)

### Publications
- [ ] `_bibliography/references.bib` - Delete Angus's publications, add yours

## MEDIUM PRIORITY - Clean Up Soon

### News/Announcements
Delete all files in `_news/`:
- [ ] `20221210_move.md`
- [ ] `20240507_tics.md`
- [ ] `20250310_preprint.md`
- [ ] `20250611_jneuro_paper.md`
- [ ] `20250902_preprint.md`
- [ ] `20251129_commentary.md`
- [ ] `20251201_DSTN_published.md`
- [ ] `announcement_1.md`
- [ ] `announcement_2.md`
- [ ] `announcement_3.md`

### Research Pages
Review and modify or delete in `_pages/research/`:
- [ ] `comp.md` - Computational modeling page
- [ ] `fba.md` - Feature-based attention page
- [ ] `geo.md` - Geometric encoding page

### Assets to Remove
Delete in `assets/img/publication_preview/`:
- [ ] `app24.png`
- [ ] `brownian-motion.gif`
- [ ] `dstan.png`
- [ ] `featwarp.png`
- [ ] `targvar.png`
- [ ] `tics24.png`
- [ ] `tics24_alt.png`
- [ ] `triadattn.png`
- [ ] `wave-mechanics.gif`

Delete in `assets/pdf/confposters/`:
- [ ] All PDF files (12 conference posters)

### Other Data Files
- [ ] `_data/coauthors.yml` - Clear and add your coauthors
- [ ] `_data/venues.yml` - Update publication venues as needed
- [ ] `assets/json/resume.json` - Update JSON resume
- [ ] `assets/bibliography/2018-12-22-distill.bib` - Sample bibliography (can delete)

## LOW PRIORITY - Optional Cleanup

### Sample Projects
Review and modify or delete in `_projects/`:
- [ ] `1_project.md` through `9_project.md` - Sample projects

### Sample Blog Posts
Keep or delete as references in `_posts/`:
- [ ] All posts from 2015-2025 - These are demo posts showing features
- **Recommendation**: Keep a few as examples, delete the rest

### Audio/Media Samples
- [ ] `assets/audio/epicaly-short-113909.mp3` - Sample audio file

### Sample Data
- [ ] `assets/json/table_data.json` - Sample table data
- [ ] `assets/jupyter/blog.ipynb` - Sample Jupyter notebook

## DO NOT DELETE

### Framework Files
Keep these - they're part of the al-folio theme:
- ✅ All files in `_layouts/`
- ✅ All files in `_includes/`
- ✅ All files in `_sass/`
- ✅ All files in `_plugins/`
- ✅ All files in `_scripts/`
- ✅ All files in `assets/css/`
- ✅ All files in `assets/js/`
- ✅ All files in `assets/fonts/`
- ✅ All files in `assets/webfonts/`
- ✅ Configuration files (Gemfile, package.json, etc.)
- ✅ `.github/` workflows
- ✅ Docker files (if using Docker)

## Quick Cleanup Commands

**PowerShell commands to remove personal content:**

```powershell
# Navigate to your project directory
cd "c:\Users\bghimire2\OneDrive - UW-Madison\Documents\VSCode_projects\bghimire.github.io"

# Remove news files
Remove-Item -Path "_news\*.md"

# Remove publication preview images
Remove-Item -Path "assets\img\publication_preview\*"

# Remove conference posters
Remove-Item -Path "assets\pdf\confposters\*"

# Remove sample projects (optional)
Remove-Item -Path "_projects\*.md"

# Remove old blog posts (optional - or selectively delete)
# Remove-Item -Path "_posts\*.md"

# Clear bibliography
# Edit this file manually or use: Clear-Content "_bibliography\references.bib"

# Commit changes
git add .
git commit -m "Clean up original author's personal content"
```

## After Cleanup

1. Add your own content
2. Test locally: `bundle exec jekyll serve`
3. Commit changes: `git add . && git commit -m "Add personal content"`
4. Push to GitHub: `git push origin main`

---

**Note**: This checklist helps ensure you're starting with a clean slate. Take your time reviewing each file - some sample content might be useful as templates!

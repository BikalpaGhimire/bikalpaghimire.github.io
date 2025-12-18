# Personalization Complete! ✅

## What Was Updated

### ✅ Personal Information (_config.yml)
- **Name**: Bikalpa Ghimire
- **Email**: bghimire2@wisc.edu
- **Title**: bghimire
- **Description**: Webpage for Bikalpa Ghimire
- **Scholar settings**: Updated with your name

### ✅ About Page (_pages/about.md)
- **Subtitle**: "Postdoc studying perceptual organization and cortico-cortical interaction for stable visual perception."
- **Department**: Department of Psychology
- **Institution**: University of Wisconsin-Madison
- **Bio**: Complete bio including:
  - Current position in Xin Huang's lab
  - PhD completion (October 2025)
  - Research interests in visual perception and cortical communication
  - Background from Nepal
  - BA in Mathematics and Biology from Minot State University
  - Early research experience with Dr. Shabani, Dr. Super, and Dr. Sedai
- **Bottom image caption**: Changed to "Madison, WI"

### ✅ Profile Picture
- **Your photo**: Successfully added to `assets/img/pf_pic.jpg`
- **Original backup**: Saved as `assets/img/pf_pic_original.jpg`

### ✅ News Items (All new!)
Created 4 news announcements:

1. **September 26, 2025**: Successfully defended doctoral thesis titled "Mechanistic investigation of motion segmentation"

2. **September 29, 2025**: Collaboration paper "Mechanisms of Neural Representation and Segregation of Multiple Spatially Separated Visual Stimuli" published in bioRxiv

3. **October 15, 2025**: Deposited thesis to ProQuest

4. **December 10, 2025**: Psychophysics work "Critical spatial separation at the scale of V1 receptive fields determines motion segmentation" published in bioRxiv

### ✅ Cleanup
- Removed all 10 original news items from Angus Chapman
- Backed up original profile picture

## Next Steps

### 1. Update Social Media Links
Edit `_data/socials.yml` to add your:
- GitHub username
- Google Scholar profile
- ORCID
- LinkedIn
- Twitter/X (if applicable)
- Any other social media

### 2. Add Publications
Update `_bibliography/references.bib` with your publications in BibTeX format

### 3. Update Projects
Review and modify files in `_projects/` folder with your own research projects

### 4. Clean Up Sample Content
- Review `_posts/` folder - keep useful examples, delete others
- Update `_data/cv.yml` with your CV information
- Remove images in `assets/img/publication_preview/` (not yours)
- Remove PDFs in `assets/pdf/confposters/` (not yours)

### 5. Deploy to GitHub

When ready to publish:

```powershell
# Create repository on GitHub named: bghimire.github.io
# Then run:
git remote add origin https://github.com/bghimire/bghimire.github.io.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in Settings → Pages

### 6. Test Locally (Optional)

To preview your site locally:
```powershell
bundle install
bundle exec jekyll serve
```
Visit: http://localhost:4000

## Files Modified in This Update

| File | Change |
|------|--------|
| `_config.yml` | Updated personal info & scholar settings |
| `_pages/about.md` | Replaced bio with your information |
| `assets/img/pf_pic.jpg` | Added your profile picture |
| `_news/*.md` | Removed 10 old files, added 4 new ones |

## Git Commits

```
bb2ce81 Personalize website with Bikalpa Ghimire's information
57afbb6 Add project summary and completion notes
6bee38c Add cleanup checklist for personalizing the website
d0e61b9 Add getting started guide
6e6ec4b Initial commit: Fork from afchapman.github.io with credits
```

## Important Notes

### Attribution
Your website footer still credits:
- Jekyll framework
- al-folio theme
- Angus F. Chapman (design inspiration)

### BioRxiv Links
The news items mention bioRxiv but don't have specific URLs yet. When you want to add the actual paper links:

Edit the news files in `_news/` and update the links:
```markdown
[bioRxiv](https://www.biorxiv.org/content/YOUR_PAPER_DOI){:target="_blank"}
```

### Lab Link
The about page links to Xin Huang's lab at:
`https://huanglab.psych.wisc.edu/`

Make sure this URL is correct for your lab's website.

### Faculty Links
The links for Dr. Shabani, Dr. Super, and Dr. Sedai are placeholders pointing to Minot State's faculty pages. You may want to update these with their actual profile pages.

---

**Your website is now personalized and ready for further customization!** 🎉

See `GETTING_STARTED.md` and `CLEANUP_CHECKLIST.md` for additional customization steps.

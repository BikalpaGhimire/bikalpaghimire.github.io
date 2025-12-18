# Profile Picture Instructions

## IMPORTANT: Replace the Profile Picture

Your profile picture needs to be saved to:
`assets/img/pf_pic.jpg`

### Steps:

1. Save the profile picture you provided (the one with the blue striped shirt) to your computer
2. Rename it to `pf_pic.jpg`
3. Copy it to the folder:
   ```
   c:\Users\bghimire2\OneDrive - UW-Madison\Documents\VSCode_projects\bghimire.github.io\assets\img\
   ```
4. Replace the existing `pf_pic.jpg` file

### Image Specifications:
- **Format**: JPG (preferred) or PNG
- **Recommended size**: 400x400 pixels or larger (square)
- **Aspect ratio**: The image will be cropped to a circle
- **File name**: Must be exactly `pf_pic.jpg`

### Note:
The original profile picture has been backed up as `pf_pic_original.jpg` in the same folder.

### After Adding Your Picture:
Run these commands to commit the change:
```powershell
cd "c:\Users\bghimire2\OneDrive - UW-Madison\Documents\VSCode_projects\bghimire.github.io"
git add assets/img/pf_pic.jpg
git commit -m "Add personal profile picture"
```

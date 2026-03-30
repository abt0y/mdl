# GitHub Pages Deployment Guide

## 🚀 Quick Start - Deploy in 3 Steps

### Step 1: Enable GitHub Pages in Settings
```
Repository Settings → Pages → Build and deployment
Source: GitHub Actions ✓
```

### Step 2: Deploy Automatically or Manually

**Automatic (whenever you push to main):**
```bash
git push origin main
# Workflow runs automatically, site updates in 1-2 minutes
```

**Manual (1-click from GitHub):**
1. Go to **Actions** tab
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Done! 🎉

### Step 3: View Your Live Site
```
https://yourusername.github.io/mdl/
```

---

## 📖 Detailed Steps

### Enable GitHub Pages

1. **Go to Repository Settings**
   - Click on your repository name
   - Go to ⚙️ **Settings** tab (top right)

2. **Find Pages Section**
   - Scroll down to **Pages** on the left sidebar

3. **Configure Deployment Source**
   - Under "Build and deployment"
   - Select **Source**: GitHub Actions
   - Click **Save**

### Deploy Your Site

#### Method 1: Automatic Deployment
Every push to `main` branch triggers deployment:
```bash
# Make changes to your files
git add .
git commit -m "Your message"
git push origin main
# Automatically deploys in 1-2 minutes ✓
```

#### Method 2: Manual Deployment (1-Click)
Manually trigger anytime:
1. Go to **Actions** tab in your repository
2. Click **Deploy to GitHub Pages** on the left side
3. Click **Run workflow** dropdown
4. Click **Run workflow** button
5. Wait for green checkmark ✓
6. Your site is live!

### Access Your Live Site
Your site is now available at:
```
https://yourusername.github.io/mdl/
```

Replace `yourusername` with your actual GitHub username.

---

## 🔍 Monitor Deployment

**Check Status:**
1. Go to **Actions** tab
2. See latest workflow run
3. Click on it to see details
4. Green ✓ = Success, Red ✗ = Failed

**Check Live Site:**
1. Visit your URL: `https://yourusername.github.io/mdl/`
2. Refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
3. See your changes live!

---

## 🐛 Troubleshooting

**Site not showing up?**
- Wait 2-3 minutes for deployment to complete
- Check Actions tab for any errors
- Try hard refresh (Ctrl+Shift+R)

**Getting a 404 error?**
- Make sure Pages is set to "GitHub Actions" in Settings
- Check that repository is public (private repos need GitHub Pages on Pro plan)
- Visit correct URL: `/mdl/` not root

**Workflow failing?**
- Check Actions tab for error messages
- Make sure `.github/workflows/deploy.yml` exists
- Verify all files are committed and pushed

---

## 📝 What Gets Deployed

The workflow deploys:
- ✅ `index.html` - Main portal page
- ✅ `MAIDAILUU_CATALOGUE_FINAL.pdf` - Catalog file
- ✅ All CSS and JavaScript (built into HTML)

The workflow excludes:
- ❌ `server.js` - Not needed for GitHub Pages
- ❌ `node_modules/` - Dependencies removed
- ❌ `.github/` - Workflows not deployed
- ❌ `.git/` - Git files excluded

---

## 💡 Tips

- **Custom Domain?** You can use a custom domain in Pages settings
- **SSL/HTTPS?** GitHub Pages provides free HTTPS
- **Pretty URLs?** GitHub Pages handles this automatically
- **API Calls?** Use CORS-enabled endpoints or proxy

---

## 🎯 You're All Set!

Your Maidailuu Catalog Portal is now live on GitHub Pages! 🎨

Visit: `https://yourusername.github.io/mdl/`

Enjoy! 🚀

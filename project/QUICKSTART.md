# Namecheap Deployment - Quick Start

Your site is already built and ready to upload!

## 30-Second Setup

1. Log into Namecheap hosting dashboard
2. Open File Manager
3. Go to `public_html` folder
4. Upload everything from the `dist` folder
5. Visit your domain - Done!

## What's in `dist`?

- `index.html` - Your website
- `assets/` - CSS, JavaScript, images
- `.htaccess` - Handles routing & security
- Static images

## That's It!

No build step, no Node.js, no database needed. Everything is ready to go.

### Troubleshooting

**Blank page?**
- Check that `.htaccess` file was uploaded (it's hidden - enable "show hidden files")
- Clear browser cache

**Links not working?**
- Verify `.htaccess` exists in `public_html`
- Contact Namecheap support if mod_rewrite is disabled

**Missing styles/images?**
- Check that entire `assets` folder uploaded
- Clear browser cache

For more details, see `DEPLOY.md`

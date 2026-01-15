# Project Export for Namecheap Hosting

This export is optimized for quick deployment to Namecheap shared hosting.

## What You Need to Know

✅ **Static website** - No backend, no database, no special setup needed
✅ **Production ready** - Already optimized and minified
✅ **Just upload** - Everything is in the `dist` folder

## Quick Deploy

1. Extract this export
2. Upload contents of `dist/` to Namecheap `public_html`
3. Done!

## File Structure

```
dist/
├── index.html          ← Main entry point
├── .htaccess           ← Routing & security (IMPORTANT - hidden file)
├── QUICKSTART.md       ← Quick reference
├── DEPLOY.md           ← Full deployment guide
├── assets/             ← CSS, JavaScript, images
├── robots.txt          ← SEO
└── images/             ← Static images
```

## Important Files

- **`.htaccess`** - Enables SPA routing, HTTPS redirect, caching, security. MUST be uploaded.
- **`index.html`** - Your website entry point
- **`assets/`** - All styles, scripts, and assets

## Deployment Checklist

- [ ] Extract the export
- [ ] Upload `dist/` contents to `public_html`
- [ ] Verify `.htaccess` uploaded (enable "show hidden files" in file manager)
- [ ] Clear browser cache
- [ ] Visit your domain
- [ ] Test all navigation links

## Support

See `QUICKSTART.md` or `DEPLOY.md` for more details.

---

Ready? Upload everything from `dist/` and you're live!

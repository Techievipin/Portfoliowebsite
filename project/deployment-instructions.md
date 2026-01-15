# Deployment Instructions for Namecheap Shared Hosting

This portfolio is fully optimized for Namecheap shared hosting with SPA (Single Page Application) routing support.

## Files to Upload

After running `npm run build`, you'll find all the production files in the `dist` folder. Upload the **contents** of the `dist` folder (not the folder itself) to your Namecheap hosting account.

## Step-by-Step Deployment Process

### 1. Build the Project Locally
```bash
npm run build
```
This creates the `dist` folder with all production files.

### 2. Access Your Namecheap Hosting
- Log into your Namecheap account dashboard
- Go to "Hosting" and click "Manage" for your domain
- Open the File Manager (or use FTP/SFTP if preferred)

### 3. Upload Files
- Navigate to the `public_html` folder (root directory for your domain)
- Upload all contents from the `dist` folder to this directory
- Files to upload:
  - `index.html` (main entry point)
  - `assets/` folder (CSS, JavaScript, images)
  - `.htaccess` file (critical for routing - included in dist)

### 4. File Structure on Server
Your server should have this structure:
```
public_html/
├── index.html
├── .htaccess (handles SPA routing - IMPORTANT)
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── [other asset files]
└── robots.txt
```

### 5. Verify Deployment
- Visit your domain to see the live website
- Test all navigation links (Home, About, Military, Skills, Work, School, Contact, Location)
- Check that all sections load properly
- Test responsive design on mobile devices
- Verify all images and assets load correctly

## Critical for Shared Hosting

### .htaccess File
The `.htaccess` file is automatically included in your build and enables:
- **SPA Routing**: All navigation works without page refreshes
- **HTTPS Redirect**: Automatically redirects HTTP to HTTPS for security
- **Gzip Compression**: Faster load times
- **Asset Caching**: Browser caching for CSS, JS, and images
- **Security Headers**: Protection against common attacks
- **Directory Browsing Disabled**: Prevents directory listing for security

The routing configuration redirects all non-existent file requests to `index.html`, allowing React to handle all navigation client-side.

### Important Notes

- **Static Site**: This is a completely static website, perfect for shared hosting
- **No Database Required**: No backend server needed
- **No Node.js Required**: Works with any hosting (no special requirements)
- **Fast Loading**: Optimized and minified production build
- **SEO Optimized**: Proper semantic HTML structure
- **Mobile Responsive**: Works on all devices and screen sizes
- **Production Ready**: Includes security headers and performance optimizations

## Troubleshooting

If you encounter issues after deployment:

1. **Blank Page or 404 Errors**
   - Check that all files uploaded to `public_html`
   - Verify `.htaccess` file is present (hidden file - may need to show hidden files)
   - Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

2. **Navigation Not Working**
   - Ensure `.htaccess` file exists and has rewrite rules enabled
   - Contact Namecheap support if `mod_rewrite` is disabled

3. **Missing Styles or Images**
   - Verify the `assets` folder uploaded completely
   - Check file permissions (should be 644 for files, 755 for folders)
   - Clear browser cache

4. **Slow Loading**
   - All assets are minified and gzipped automatically
   - Check your internet connection
   - Enable browser caching in your browser settings

5. **Contact Form Not Working**
   - The form collects input but doesn't send emails by default
   - To enable email functionality, integrate with a service like:
     - Formspree (free tier available)
     - Netlify Forms
     - EmailJS
     - Or implement a PHP backend script

## Optional Production Enhancements

- Set up SSL/HTTPS certificate (usually free with Namecheap hosting - HTTPS redirect already configured)
- Add Google Analytics for traffic tracking
- Integrate contact form with email service
- Enable domain email accounts
- Set up automatic backups
- Configure CDN for even faster loading

## Support

If you need help:
1. Check Namecheap Knowledge Base
2. Contact Namecheap support
3. Verify all files are in the correct location
4. Clear browser cache and try again

## File Information

- **Build Size**: ~500KB total (with all assets)
- **CSS**: ~20KB minified
- **JavaScript**: ~176KB minified
- **Images**: Hosted on CDN (not included in upload)
- **Load Time**: Typically under 2 seconds on good connections
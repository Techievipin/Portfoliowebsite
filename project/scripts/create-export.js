import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    if (fs.statSync(srcFile).isDirectory()) {
      copyDirSync(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

function createExport() {
  const exportDir = path.join(projectRoot, 'export');

  if (fs.existsSync(exportDir)) {
    fs.rmSync(exportDir, { recursive: true, force: true });
  }
  fs.mkdirSync(exportDir, { recursive: true });

  copyDirSync(path.join(projectRoot, 'dist'), path.join(exportDir, 'dist'));

  const files = ['README.md', 'QUICKSTART.md', 'DEPLOY.md'];
  files.forEach(file => {
    const src = path.join(projectRoot, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(exportDir, file));
    }
  });

  console.log(`✓ Export created in: ${exportDir}`);
  console.log(`✓ Upload the contents of: ${path.join(exportDir, 'dist')}`);
}

createExport();

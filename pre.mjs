import fs from 'fs';

if (fs.existsSync('dist'))
  fs.rmdirSync('dist', { recursive: true });
fs.mkdirSync('dist');
fs.cpSync('node_modules/tailwindcss/lib/css', 'dist/css', { recursive: true });

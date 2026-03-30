import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(__dirname));

app.get('/api/catalog-info', (req, res) => {
  res.json({
    name: 'Maidailuu Catalog',
    artist: 'Maidailuu',
    filename: 'MAIDAILUU_CATALOGUE_FINAL.pdf',
    description: 'Complete catalog of artworks and collections'
  });
});

app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'MAIDAILUU_CATALOGUE_FINAL.pdf');
  res.download(filePath, 'MAIDAILUU_CATALOGUE_FINAL.pdf');
});

app.listen(PORT, () => {
  console.log(`🎨 Maidailuu Catalog Portal running at http://localhost:${PORT}`);
  console.log(`📥 Download endpoint: http://localhost:${PORT}/download`);
});

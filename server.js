import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(__dirname));

const catalogFiles = [
  'MAIDAILUU_CATALOGUE_deepforest.pdf',
  'MAIDAILUU_CATALOGUE_fantasygarden.pdf'
];

app.get('/api/catalog-info', (req, res) => {
  res.json({
    name: 'Maidailuu Catalog',
    artist: 'Maidailuu',
    catalogs: catalogFiles,
    description: 'Two exhibition catalogues from Mai Dai Luu: DEEP THE FOREST and FANTASY GARDEN.'
  });
});

app.get('/download/:filename', (req, res) => {
  const fileName = req.params.filename;
  if (!catalogFiles.includes(fileName)) {
    return res.status(404).send('Catalog not found');
  }
  const filePath = path.join(__dirname, fileName);
  res.download(filePath, fileName);
});

app.listen(PORT, () => {
  console.log(`🎨 Maidailuu Catalog Portal running at http://localhost:${PORT}`);
  console.log(`📥 Download endpoint: http://localhost:${PORT}/download`);
});

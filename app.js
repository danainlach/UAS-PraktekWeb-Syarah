import express from 'express';
import sequelize from './models/sequelize.js';
import matkulRoutes from './routes/matkulRoutes.js';  

import path from 'path';
import {
    fileURLToPath
} from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('public')); 

app.use(matkulRoutes); 

app.get('/', (req, res) => {
    res.render('matkul');
});

app.get('/matkuls', (req, res) => {
    res.render('matkul');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
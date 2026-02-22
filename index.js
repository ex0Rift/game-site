import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'home/index.html'));
});

app.get('/ticTacToe', (req,res) => {
    res.sendFile(path.join(__dirname,'public','game_ticTacToe/page.html'));
});

app.get('/hangMan', (req,res) => {
    res.sendFile(path.join(__dirname,'public','game_hangMan/page.html'));
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
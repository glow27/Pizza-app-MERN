import express from 'express';
import path from 'path';
import middleWare from './middleware/app.js';
import loginRouter from './routes/login.js';
import casinoRouter from './routes/casino.js';

const __dirname = path.resolve();
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

middleWare(app);

app.use('/login', loginRouter);
app.use('/orders', casinoRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`pizza ${PORT}`));

import express from 'express';
import path from 'path';
import middleWare from './middleware/app.js';
import loginRouter from './routes/auth.js';
import ordersRouter from './routes/orders.js';

const __dirname = path.resolve();
const app = express();

app.use(express.static(path.join(__dirname, 'front/build')));

middleWare(app);

app.use('/auth', loginRouter);
app.use('/orders', ordersRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front/build', 'index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`pizza ${PORT}`));

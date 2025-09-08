import http from 'http';
import express from 'express';

const app = express();
const port = 5500;

app.all('/', (req, res, next) => res.send('Tudo funcionando'));

http.createServer(app).listen(port, () => {
  console.log('Server is running on http://localhost:' + port);
});
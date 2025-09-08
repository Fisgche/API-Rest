import http from 'http';
import express from 'express';
import apiV1Router from './api-v1/api-router.js';

const app = express();
const port = 5500;

app.use('/api/v1', apiV1Router); // Assuming apiV1Router is defined elsewhere
app.use('/', (req, res) => res.send('----Api Contatos----'));

http.createServer(app).listen(port, () => {
  console.log('Server is running on http://localhost:' + port);
});
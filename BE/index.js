import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDatabase from './mongoose/index.js';
import BodyLineController from './api/controllers/BodyLineController.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDatabase();

app.post('/bodyline', BodyLineController.createBodyLine);
app.get('/bodyline', BodyLineController.getAllBodyLine);
app.get('', (req, res) => {
  res.send('Hello');
});
app.listen(process.env.PORT, () => {
  console.log('App listening at', process.env.PORT);
});

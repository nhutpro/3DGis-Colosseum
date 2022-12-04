import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDatabase from './mongoose/index.js';
import BodyLineController from './api/controllers/BodyLineController.js';
import BodyPolygonController from './api/controllers/BodyPolygonController.js';
import route from './routes/index.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDatabase();
route(app);


app.get('', (req, res) => {
  res.send('Hello');
});
app.listen(process.env.PORT, () => {
  console.log('App listening at', process.env.PORT);
});

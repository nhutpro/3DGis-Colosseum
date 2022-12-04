import { Router } from 'express';
import BodyLineController from '../api/controllers/BodyLineController.js';
const router = Router();

router.post('/create', BodyLineController.createBodyLine);
router.get('/all', BodyLineController.getAllBodyLine);
router.delete('/delete', BodyLineController.deleteBodyLine);

export default router;

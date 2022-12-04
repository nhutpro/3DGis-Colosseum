import { Router } from 'express';
import BodyPolygonController from '../api/controllers/BodyPolygonController.js';
const router = Router();

router.post('/create', BodyPolygonController.createBodyPolygon);
router.get('/all', BodyPolygonController.getAllBodyPolygon);
router.delete('/delete', BodyPolygonController.deleteBodyPolygon);
export default router;

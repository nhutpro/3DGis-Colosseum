import BodyPolygonRoutes from './BodyPolygonRoutes.js';
import BodyLineRoutes from './BodyLineRoutes.js';
function route(app) {
  app.use('/bodypolygon', BodyPolygonRoutes);
  app.use('/bodyline', BodyLineRoutes);
}

export default route;

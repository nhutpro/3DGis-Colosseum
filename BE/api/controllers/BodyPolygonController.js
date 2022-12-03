import BodyPolygon from '../models/BodyPolygon.js';
class BodyPolygonController {
  getBodyPolygon(req, res) {}

  async createBodyPolygon(coordinates) {
    try {
      const newBodyPolygon = new BodyPolygon({ coordinates });
      await newBodyPolygon.save();
    } catch (error) {
      console.log('Something is Wrong when create BodyPolygon');
      throw new Error('Something is Wrong when create BodyPolygon');
    }
  }
}

export default new BodyPolygonController();

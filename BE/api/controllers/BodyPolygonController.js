import BodyPolygon from '../models/BodyPolygon.js';
import Node from '../models/Node.js';
import Face from '../models/Face.js';
export class BodyPolygonController {
  async getAllBodyPolygon(req, res) {
    try {
      console.log('GET /bodypolygon');
      const bodyPolygonList = await BodyPolygon.find({})
        .populate({
          path: 'face',
          populate: {
            path: 'coordinates',
            select: { _id: 0, x: 1, y: 1, z: 1 },
          },
        })
        .lean();
      for (let bodyPolygon of bodyPolygonList) {
        let coordinatesArray = bodyPolygon.face.coordinates;
        coordinatesArray = coordinatesArray.map(({ x, y, z }) => [x, y, z]);
        bodyPolygon.face.coordinates = coordinatesArray;
      }
      res.json(bodyPolygonList);
    } catch (error) {
      console.log('Error', error);
      throw new Error('Something is wrong when get all body line');
    }
  }

  async createBodyPolygon(req, res) {
    try {
      const newCoordinates = [];
      const { coordinates, ...others } = req.body;
      for (let coordinate of req.body.coordinates) {
        const newNode = new Node({
          x: coordinate[0],
          y: coordinate[1],
          z: coordinate[2],
        });
        await newNode.save();
        newCoordinates.push(newNode._id);
        console.log('_id', newNode._id);
      }
      const newFace = Face({ coordinates: newCoordinates });
      newFace.save();
      const newBodyPolygon = new BodyPolygon({
        ...others,
        face: newFace._id,
      });
      newBodyPolygon.save();
      res.json(newBodyPolygon);
    } catch (error) {
      console.log('Error', error);
      throw new Error('Something is Wrong when create BodyPolygon');
    }
  }
}
export default new BodyPolygonController();

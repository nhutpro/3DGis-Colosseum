import BodyLine from '../models/BodyLine.js';
import Node from '../models/Node.js';
import Face from '../models/Face.js';
export class BodyLineController {
  async getAllBodyLine(req, res) {
    try {
      console.log('GET /bodyline/all');
      const bodyLineList = await BodyLine.find({})
        .populate({
          path: 'face',
          populate: {
            path: 'coordinates',
            select: { _id: 0, x: 1, y: 1, z: 1 },
          },
        })
        .lean();
      for (let bodyLine of bodyLineList) {
        let coordinatesArray = bodyLine.face.coordinates;
        coordinatesArray = coordinatesArray.map(({ x, y, z }) => [x, y, z]);
        bodyLine.face.coordinates = coordinatesArray;
      }
      res.json(bodyLineList);
    } catch (error) {
      console.log('Error', error);
      throw new Error('Something is wrong when get all body line');
    }
  }

  async createBodyLine(req, res) {
    try {
      console.log('POST /bodyline/create');
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
      }
      const newFace = Face({ coordinates: newCoordinates });
      newFace.save();
      const newBodyLine = new BodyLine({
        ...others,
        face: newFace._id,
      });
      newBodyLine.save();
      res.json(newBodyLine);
    } catch (error) {
      console.log('Error', error);
      throw new Error('Something is Wrong when create BodyLine');
    }
  }
  async deleteBodyLine(req, res) {
    try {
      console.log('DELETE /bodyline/delete');
      const bodyLine = await BodyLine.findOne({
        _id: req.query.id,
      }).lean();
      const face = await Face.findOne({ _id: bodyLine.face }).lean();
      const deleteArray = [];
      for (let nodeId of face.coordinates) {
        deleteArray.push(Node.deleteOne({ _id: nodeId }));
      }
      deleteArray.push(Face.deleteOne({ _id: face._id }));
      deleteArray.push(BodyLine.deleteOne({ _id: bodyLine._id }));
      await Promise.all(deleteArray);
      res.send('success');
    } catch (error) {
      console.log('Error When delete bodyLine', error);
      throw new Error('Something is wrong when delete body line');
    }
  }
}
export default new BodyLineController();

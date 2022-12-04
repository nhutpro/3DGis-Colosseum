import Node from '../models/Node';
class NodeController {
  getNode(req, res) {}

  async createNode(coordinate) {
    try {
      const coordinate = { ...req.body };
      const newNode = new Node(coordinate);
      await newNode.save();
    } catch (error) {
      console.log('Something is Wrong when create Node');
      throw new Error('Something is Wrong when create Node');
    }
  }
}

import Face from '../models/Face';
class FaceController {
  getFace(req, res) {}

  async createFace(coordinates) {
    try {
      const newFace = new Face({coordinates});
      await newFace.save();
    } catch (error) {
      console.log('Something is Wrong when create Face');
      throw new Error('Something is Wrong when create Face');
    }
  }
}

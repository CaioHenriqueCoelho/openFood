const StatusModel = require('../models/statusModel');

const statusModel = new StatusModel();

class StatusController {
    async getAllStatus(req, res) {
        try {
          const status = await statusModel.getAllStatus();
          res.json(status);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
}

module.exports = StatusController;

const { sequelize } = require("../models");

class databaseController {
  static async pingDatabase(req, res, next) {
    try {
      await sequelize.query(`SELECT 1`);
      res.status(200).json({ message: "Database pinged successfully" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = databaseController;

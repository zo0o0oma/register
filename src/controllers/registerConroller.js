const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

module.exports = {
  async createRegister(req, res) {
    try {
      const { name, password, email } = req.body;
      const { filename } = req.file;
      const existUser = await User.findOne({ email });

      if (!existUser) {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          name,
          password: hashPassword,
          email,
          thumbnail: filename,
        });
        return res.json(user);
      }
      return res.status(400).json({
        message: 'email/user already exist do you want login instead',
      });
    } catch (error) {
      throw Error('Error while registering a new user');
    }
  },
};

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const User = require('../../models/userModel');


const login = async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) return res.status(404).send('User not found.');
      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: 86400 });
      res.status(200).send({ auth: true, token });
    } 
    catch (error) {
      res.status(500).send('Error logging in.');
    }
};

module.exports = login;
  
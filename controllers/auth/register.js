const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const User = require('../../models/userModel');

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: 86400 });

    res.status(200).send({ auth: true, token });
  } catch (error) {
    res.status(500).send('Error registering user.');
  }
};

module.exports = register;
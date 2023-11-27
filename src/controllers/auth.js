const User = require('../models/user');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken')

const login = async (req, res) => {
  try {
    const { name, password } = req.body;

 
    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const passwordMatch = bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      console.log('Invalid password');
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = generateToken(user._id);
    res.status(200).json({ token, user });
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = login

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

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if(!passwordIsValid) {
        return res.status(404).send({ message: "Usuário ou senha inválidos." });
    }
    
    const token = generateToken(user._id);
    res.status(200).json({ token, user });
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = login

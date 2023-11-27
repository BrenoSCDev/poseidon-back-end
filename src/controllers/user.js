const User = require("../models/user")
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
  try {
    const {
      name,
      secondName,
      photo,
      record,
      war_name,
      battalion,
      company,
      health,
      emergency,
      doctor,
      password
    } = req.body
    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      secondName,
      photo,
      record,
      war_name,
      battalion,
      company,
      health,
      emergency,
      doctor,
      password: hashedPassword
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log('Updated User:', updatedUser);

    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Update User Error:', err);
    res.status(500).json({ message: err.message });
  }
};



const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ message: 'Usuario excluído' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {createUser, getAllUsers, getUserById, updateUser,deleteUser};

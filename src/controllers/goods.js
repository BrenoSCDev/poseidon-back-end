const Good = require('../models/goods');
const verifyToken = require('../middlewares/authorization')
const User = require('../models/user')
const createGood = async (req, res) => {
  try {
    const newGood = await Good.create(req.body);
    res.status(201).json(newGood);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getAllGoods = async (req, res) => {
  try {
    const Goods = await Good.find()
    const user = await User.findById(req.body.user);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({Goods, user});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getGoodById = async (req, res) => {
  try {
    const Good = await Good.findById(req.params.id);
    if (!Good) {
      return res.status(404).json({ message: 'Good not found' });
    }
    res.status(200).json(Good);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const updateGood = async (req, res) => {
  try {
    const updatedGood = await Good.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedGood) {
      return res.status(404).json({ message: 'Good not found' });
    }
    res.status(200).json(updatedGood);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteGood = async (req, res) => {
  try {
    const deletedGood = await Good.findByIdAndDelete(req.params.id);
    if (!deletedGood) {
      return res.status(404).json({ message: 'Good not found' });
    }
    res.status(200).json({ message: 'Good deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateOccurrenceStatus = async (req, res) => {
    try {
      const updatedGood = await Good.findByIdAndUpdate(
        req.params.id,
        { status: 'Finalizado' },
        { new: true }
      );
  
      if (!updatedGood) {
        return res.status(404).json({ message: 'Ocorrência não encontrada' });
      }
  
      res.status(200).json(updatedGood);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {
  createGood,
  getAllGoods,
  getGoodById,
  updateGood,
  deleteGood,
  updateOccurrenceStatus
};

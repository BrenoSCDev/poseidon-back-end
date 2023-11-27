const BodyOccurrence = require('../models/bodies');

// Controller para criar um novo encontro de corpos
const createBodyOccurrence = async (req, res) => {
  try {
    const newBodyOccurrence = new BodyOccurrence(req.body);
    const savedBodyOccurrence = await newBodyOccurrence.save();
    res.status(201).json(savedBodyOccurrence);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller para obter todos os encontros de corpos
const getAllBodyOccurrences = async (req, res) => {
  try {
    const BodyOccurrences = await BodyOccurrence.find();
    res.status(200).json(BodyOccurrences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller para obter um encontro de corpos por ID
const getBodyOccurrenceById = async (req, res) => {
  try {
    const BodyOccurrence = await BodyOccurrence.findById(req.params.id);
    if (!BodyOccurrence) {
      return res.status(404).json({ message: 'Encontro de corpos não encontrado' });
    }
    res.status(200).json(BodyOccurrence);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller para atualizar um encontro de corpos por ID
const updateBodyOccurrence = async (req, res) => {
  try {
    const updatedBodyOccurrence = await BodyOccurrence.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBodyOccurrence) {
      return res.status(404).json({ message: 'Encontro de corpos não encontrado' });
    }
    res.status(200).json(updatedBodyOccurrence);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller para deletar um encontro de corpos por ID
const deleteBodyOccurrence = async (req, res) => {
  try {
    const deletedBodyOccurrence = await BodyOccurrence.findByIdAndDelete(req.params.id);
    if (!deletedBodyOccurrence) {
      return res.status(404).json({ message: 'Encontro de corpos não encontrado' });
    }
    res.status(200).json({ message: 'Encontro de corpos deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateOccurrenceStatus = async (req, res) => {
    try {
      const { status } = req.body;
      if (!status || status !== 'Finalizado') {
        return res.status(400).json({ message: 'Status inválido' });
      }
  
      const updateBodyOccurrence = await BodyOccurrence.findByIdAndUpdate(
        req.params.id,
        { status: 'Finalizado' },
        { new: true }
      );
  
      if (!updateBodyOccurrence) {
        return res.status(404).json({ message: 'Ocorrência não encontrada' });
      }
  
      res.status(200).json(updateBodyOccurrence);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {
  createBodyOccurrence,
  getAllBodyOccurrences,
  getBodyOccurrenceById,
  updateBodyOccurrence,
  deleteBodyOccurrence,
  updateOccurrenceStatus
};

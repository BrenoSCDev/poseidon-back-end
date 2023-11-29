const mongoose = require('mongoose');

const GoodsSchema = new mongoose.Schema({
  id: { type: String || [Number], required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  foundLatitude: { type: Number, required: true },
  foundLongitude: { type: Number, required: true },
  date: { type: String, required: true },
  foundDate: { type: String, required: true },
  time: { type: String, required: true },
  foundTime: { type: String, required: true },
  goodDepth: { type: String, required: true },
  photos: { type: [String], default: [] }
});


const GoodOccurrenceSchema = new mongoose.Schema({
  user: { type: String, default: undefined },
  support: { type: Number, required: true },
  org: { type: Number, required: true },
  dayWeek: {
    type: String,
    enum: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
    required: true
  },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, default: null },
  goods: { type: [GoodsSchema], default: [] },
  environment: { type: String, required: true },
  depth: { type: String, required: true },
  waterVisibility: { type: String, required: true },
  status: { type: String, default: 'Em Análise' }
});


const GoodOccurrence = mongoose.model('Occurrence', GoodOccurrenceSchema);
module.exports = GoodOccurrence;

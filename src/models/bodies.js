const mongoose = require('mongoose');


const BodiesSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.String || mongoose.Schema.Types.Number },
  name: String,
  age: String,
  sex: String,
  vesture: Number,
  condition: String,
  alcoholicIntake: Number,
  swim: Number,
  dateSubmersion: String,
  timeSubmersion: String,
  latitudeSubmersion: { type: Number, required: true },
  longitudeSubmersion: { type: Number, required: true },
  foundDate: String,
  foundTime: String,
  foundLatitude: { type: Number, required: true },
  foundLongitude: { type: Number, required: true },
  bodyDepth: String
});

const DayOfWeekValues = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

const BodyOccurrenceSchema = new mongoose.Schema({
  user: Number,
  support: Number,
  org: Number,
  dayWeek: { type: String, enum: DayOfWeekValues },
  bodies: [BodiesSchema],
  environment: String,
  waterVisibility: String,
  waterTemp: String,
  DiveDepth: String,
  status: { type: String, default: 'Em Análise' }
});

const BodyOccurrence = mongoose.model('BodyOccurrence', BodyOccurrenceSchema);

module.exports = BodyOccurrence;

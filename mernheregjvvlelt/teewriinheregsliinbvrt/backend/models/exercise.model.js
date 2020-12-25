const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  carnumber: { type: String, required: true },
  carmark: { type: String, required: true },
  ownerovog: { type: String, required: true },
  ownerner: { type: String, required: true },
  ownerrd: { type: String, required: true },
  ownerphone: { type: Number, required: true },
  ownergender: { type: String, required: true },
  uildon: { type: Number, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
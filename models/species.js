const mongoose = require('mongoose');

const MAX_STRING_LENGTH = 150;

// This applies to flora and fauna
const speciesSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    maxLength: MAX_STRING_LENGTH,
  },
  name: {
    type: String,
    required: true,
    maxLength: MAX_STRING_LENGTH,
  },
  region: {
    type: String,
    required: true,
    maxLength: MAX_STRING_LENGTH,
  },
  commonLocation: {
    type: String,
    required: true,
    maxLength: MAX_STRING_LENGTH,
  },
  rareLocation: {
    type: String,
    maxLength: MAX_STRING_LENGTH,
  },
  weakSpot: {
    type: String,
    maxLength: MAX_STRING_LENGTH,
  },
  drops: {
    type: Array,
    maxLength: MAX_STRING_LENGTH,
  },
});

module.exports = mongoose.model('Species', speciesSchema);

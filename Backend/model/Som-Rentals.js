const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  pricePerMonth: {
    type: Number,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  bedrooms: {
    type: Number,
    required: true
  },

  image: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dateTime: {
    type: Date,
    default: Date.now  
  }
});

module.exports = mongoose.model("Property", PropertySchema);

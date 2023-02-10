const mongoose = require("mongoose");

const { Schema } = mongoose;

const proverbSchema = new Schema(
  {
    proverb: {
      type: String,
      required: true,
    },
    pinyin: {
      type: String,
      required: true,
    },
    translation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Proverb = mongoose.model("Proverb", proverbSchema);

module.exports = Proverb;

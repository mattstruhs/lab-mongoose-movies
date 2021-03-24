const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const celebritySchema = new Schema({
  name: String,
  occupation: {
    type: String,
    enum: ["actor", "singer", "comedian", "unknown"],
  },
  catchphrase: String,
});

module.exports = model("Celebrity", celebritySchema);

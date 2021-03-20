const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const postSchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  }
);

module.exports = model('celebrity', postSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema


const responSchema = new Schema({
  konten: String,
  thread: {type: Schema.Types.ObjectId, ref: "Thread"},
  author: {type: Schema.Types.ObjectId, ref: "User"},
  voter: [{type: Schema.Types.ObjectId, ref: "User"}]
}, {
  timestamps: true
})

const Respon = mongoose.model('Respon', responSchema)

module.exports = Respon;

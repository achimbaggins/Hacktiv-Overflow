const mongoose = require('mongoose');
const Schema = mongoose.Schema

const threadSchema = new Schema({
  title: String,
  konten: String,
  slug: String,
  author: {type: Schema.Types.ObjectId, ref: "User"},
  voter: [{type: Schema.Types.ObjectId, ref: "User"}]
}, {
  timestamps: true
})

const Thread = mongoose.model('Thread', threadSchema)

module.exports = Thread;

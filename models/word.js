const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Word = new Schema({
    name: String,
    translate: String,
    likeStatus: String,
    historyStatus: String,
})

module.exports = mongoose.model('Word', Word)
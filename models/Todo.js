const mongoose = require('mongoose')

const WatchListSchema = new mongoose.Schema({
  tvShowName: {
    type: String,
    required: true,
  },
  tvShowId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  showImg: {
    type: String,
  },
  showSum: {
    type: String,
    required: true
  },
  watched:{
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('WatchList', WatchListSchema)

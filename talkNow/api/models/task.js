var mongoose = require('mongoose')

var TaskSchema = mongoose.Schema({
	category: String,
  task: String,
	image_url: String
})

module.exports = mongoose.model('Task', TaskSchema)

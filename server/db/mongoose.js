var mongoose = require('mongoose');

mongoose.Prommise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};

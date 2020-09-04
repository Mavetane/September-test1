var mongoose = require('mongoose')
var Schema = mongoose.Schema

var studentsSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  idNumber: { type: Number, required: true },
  homeAddress: { type: String, required: true }
});

var studentsModel = mongoose.model('students', studentsSchema);
module.exports = studentsModel;
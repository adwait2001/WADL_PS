const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    Name: String,
    Div: String ,
    Roll_no: String,
    Class: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', StudentSchema);
const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
     Number: {
        type: Number,
        required: true
        
    },
    sub: {
        type: String,
        required: true
        
    }

})

module.exports = mongoose.model('Student',studentSchema)
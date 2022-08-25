const mongoose = require('mongoose');
const schema = require('../schema/schema');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,   
    },
    description: {
        type: String,   
    },
    status: {
        type: String,
        enum: ['Not Started', 'In progress', 'Completed']   
    },
    UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }

})

module.exports = mongoose.model('Project', ProjectSchema);
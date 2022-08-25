const mongoose = require('mongoose');
//const { Schema } = mongoose;
const schema = require('../schema/schema');

const PerrmissionSchema = new mongoose.Schema({
    
    name: {
        type: String,   
    },
    description: {
        type: String,   
    },
    status: {
        type: Boolean,   
    },

})

module.exports = mongoose.model('Perrmission', PerrmissionSchema);

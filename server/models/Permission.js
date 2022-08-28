const mongoose = require('mongoose');
//const { Schema } = mongoose;
const schema = require('../schema/schema');

const PermissionSchema = new mongoose.Schema({    
    name: {
        type: String,   
    },
    description: {
        type: String,   
    },
})

module.exports = mongoose.model('Permission', PermissionSchema);

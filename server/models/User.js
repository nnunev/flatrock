const mongoose = require('mongoose');
const schema = require('../schema/schema');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true 
          
    },
    lastName: {
        type: String, 
        required: true  
    },
    email: {
        type: String, 
        required: true  
    },
    status: {
        type: String,
        enum: ['y','n']   
    },
    usergroup : {
        type: String,
        enum: ['User','Admin','Owner'] 
    },
    // permisions:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Permission',
    // }
})

module.exports = mongoose.model('User', UserSchema);

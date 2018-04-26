const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const CleanerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    WorkerAccount: {
        type: String,
        default: ''
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    workerReigon: {
        type: String,
        default: ''
    },
    workerAddress: {
        type: String,
        default: ''
    },
    experience: {
        type: String,
        default: ''
    },
    skill: {
        type: String,
        default: ''
    },
    transportation: {
        type: String,
        default: ''
    },
    serviceReigon: {
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    sex: {
        type: Boolean,
        default: false
    },
});

CleanerSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

CleanerSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Cleaner', CleanerSchema);
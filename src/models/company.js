const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
});

module.exports = mongoose.model('Company', schema);

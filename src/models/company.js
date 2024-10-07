const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true, trim: true },
    value: { type: Object }
});

module.exports = model('Company', schema);

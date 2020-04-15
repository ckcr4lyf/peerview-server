const mongoose = require('./db');
let Schema = mongoose.Schema;

let post_schema = new Schema({
    title: String,
    content: String,
    username: String
});

module.exports = mongoose.model('Post', post_schema);
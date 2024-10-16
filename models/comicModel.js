const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema({
    bookName:
    {
        type: String,
        required: true
    },
    authorName:
    {
        type: String,
        required: true
    },
    price:
    {
        type: Number,
        required: true
    },
    discount:
    {
        type: Number,
        default: 0
    },
    condition:
    {
        type: String,
        enum: ['new', 'used'],
        required: true
    },
    description:
    {
        type: String
    },
    numberOfPages:
    {
        type: Number
    },
});

const Comic = mongoose.model('Comic', comicSchema);
module.exports = Comic;

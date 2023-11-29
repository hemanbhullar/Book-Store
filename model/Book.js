const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Model is created
const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true,
    }
})

//Now export this model to mongoDB
module.exports = mongoose.model("Book", bookSchema);

// In MongoDb database it will store as a "books" by default instead of "Book"

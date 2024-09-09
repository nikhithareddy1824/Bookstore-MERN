import mongoose from 'mongoose';

// Define the book schema
const bookSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true,
        validate: {
            validator: (v) => urlPattern.test(v),
            message: props => `${props.value} is not a valid URL for an image!`
        }
    },
    language: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

export default Book;

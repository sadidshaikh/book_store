import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;

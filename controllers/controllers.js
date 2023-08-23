import Book from "../models/Book.js";

class BookController {
  static showHomePage = async (req, res) => {
    try {
      const books = await Book.find();
      console.log(books);
      res.render("index", { title: "Home Page", books: books });
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  };

  static showAddBookPage = async (req, res) => {
    try {
      res.render("add_books", { title: "Add Books" });
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  };

  static addBook = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      image: "test.jpg",
    });

    await book.save();
    req.session.message = {
      type: "success",
      message: "Book added successfully!",
    };
    res.redirect("/");
  };
}

export default BookController;

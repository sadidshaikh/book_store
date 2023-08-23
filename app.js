import express from "express";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connection.js";
import router from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 8080;

// db connection
connectDB(process.env.MONGO_URI);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
  })
);

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

app.use(express.static("uploads"));

// set template engine
app.set("view engine", "ejs");

// routes
app.use("", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

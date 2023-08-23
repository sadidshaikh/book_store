import express from "express";
import BookController from "../controllers/controllers.js";
import upload from "../utility/image_upload.js";

const router = express.Router();

router.get("/", BookController.showHomePage);

router.get("/add", BookController.showAddBookPage);

router.post("/add", BookController.addBook);

export default router;

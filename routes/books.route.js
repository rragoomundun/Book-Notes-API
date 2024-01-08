import express from 'express';
import { getAllBooks, getBook, addBook } from '../controllers/books.controller.js';

const router = express.Router();

router.get('/all', getAllBooks);
router.get('/:id', getBook);
router.post('/add', addBook);

export default router;

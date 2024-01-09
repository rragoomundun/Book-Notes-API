import express from 'express';
import { getAllBooks, getBook, addBook, updateBook, deleteBook } from '../controllers/books.controller.js';

const router = express.Router();

router.get('/all', getAllBooks);
router.get('/:id', getBook);
router.post('/add', addBook);
router.put('/:id/update', updateBook);
router.delete('/:id/delete', deleteBook);

export default router;

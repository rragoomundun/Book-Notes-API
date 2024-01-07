import express from 'express';
import { getAllBooks, getBook } from '../controllers/books.controller.js';

const router = express.Router();

router.get('/all', getAllBooks);
router.get('/:id', getBook);

export default router;

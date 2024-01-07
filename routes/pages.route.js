import express from 'express';
import { getNumberOfPages } from '../controllers/pages.controller.js';

const router = express.Router();

router.get('/nb', getNumberOfPages);

export default router;

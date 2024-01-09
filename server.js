import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

// Load environment variables
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

// Body parser
app.use(express.json());

if (ENV === 'dev') {
  app.use(morgan('dev'));
}

// Set static folder
app.use(express.static('public'));

const apiPrefix = '/v1';

// Route files
import booksRoute from './routes/books.route.js';
import pagesRoute from './routes/pages.route.js';

// Mount routers
app.use(`${apiPrefix}/books`, booksRoute);
app.use(`${apiPrefix}/pages`, pagesRoute);

app.listen(PORT, () => {
  console.log(`Server is running in ${ENV} mode on port ${PORT}`);
});

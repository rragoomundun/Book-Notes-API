import httpStatus from 'http-status-codes';

import dbUtil from '../utils/db.util.js';

/**
 * @api {GET} /books/all Get all books
 * @apiGroup Book
 * @apiName BookGetAll
 *
 * @apiParam {Number} [p=1] Page number
 * @apiParam {String="ratingDesc", "ratingAsc", "dateAsc", "dateDesc"} [order=ratingDesc] Order by
 *
 * @apiSuccess (Success (200)) {Number} id The book id
 * @apiSuccess (Success (200)) {String} isbn The book isbn
 * @apiSuccess (Success (200)) {String} title The book title
 * @apiSuccess (Success (200)) {String} notes The book notes
 * @apiSuccess (Success (200)) {String} author The book author
 * @apiSuccess (Success (200)) {Date} date The book published date
 * @apiSUccess (Success (200)) {Number} rating The book rating
 *
 * @apiSuccessExample {json} Success-Response
 * [{
 *    "id": 4,
 *    "isbn": "978-1-5247-6316-9",
 *    "title": "A Promised Land",
 *    "notes": "In the stirring, highly anticipated first volume of his presidential memoirs",
 *    "author": "Barack Obama",
 *    "date": "2020-11-17",
 *    "rating": 10
 * }]
 *
 * @apiError (Error (404)) NOT_FOUND Cannot find books
 *
 * @apiPermission Public
 */
const getAllBooks = async (req, res) => {
  try {
    let offset = 0;
    let order = 'rating DESC';

    if (req.query.p) {
      offset = (Number(req.query.p) - 1) * 10;
    }

    if (req.query.order) {
      switch (req.query.order) {
        case 'ratingAsc':
          order = 'rating ASC';
          break;
        case 'dateAsc':
          order = 'date ASC';
          break;
        case 'dateDesc':
          order = 'date DESC';
          break;
        default:
          break;
      }
    }

    const result = await dbUtil().query(
      `
      SELECT *
      FROM book
      ORDER BY ${order}
      OFFSET $1
      LIMIT 10
    `,
      [offset]
    );
    res.status(httpStatus.OK).json(result.rows);
  } catch {
    res.status(httpStatus.NOT_FOUND).json({ msg: 'Cannot get books' });
  }
};

/**
 * @api {GET} /books/:id Get a book
 * @apiGroup Book
 * @apiName BookGet
 *
 * @apiParam {Number} id The book id
 *
 * @apiSuccess (Success (200)) {Number} id The book id
 * @apiSuccess (Success (200)) {String} isbn The book isbn
 * @apiSuccess (Success (200)) {String} title The book title
 * @apiSuccess (Success (200)) {String} notes The book notes
 * @apiSuccess (Success (200)) {String} author The book author
 * @apiSuccess (Success (200)) {Date} date The book published date
 * @apiSUccess (Success (200)) {Number} rating The book rating
 *
 * @apiSuccessExample {json} Success-Response
 * {
 *    "id": 4,
 *    "isbn": "978-1-5247-6316-9",
 *    "title": "A Promised Land",
 *    "notes": "In the stirring, highly anticipated first volume of his presidential memoirs",
 *    "author": "Barack Obama",
 *    "date": "2020-11-17",
 *    "rating": 10
 * }
 *
 * @apiError (Error (404)) NOT_FOUND Cannot find book
 *
 * @apiPermission Public
 */
const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await dbUtil().query('SELECT * FROM book WHERE id = $1', [id]);

    res.status(httpStatus.OK).json(result.rows[0]);
  } catch {
    res.status(httpStatus.NOT_FOUND).json({ msg: 'Cannot get book' });
  }
};

export { getAllBooks, getBook };

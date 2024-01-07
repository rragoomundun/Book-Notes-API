import httpStatus from 'http-status-codes';

import dbUtil from '../utils/db.util.js';

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

import httpStatus from 'http-status-codes';

import dbUtil from '../utils/db.util.js';

const getAllBooks = async (req, res) => {
  try {
    const result = await dbUtil().query('SELECT * FROM book');
    res.status(httpStatus.OK).json(result.rows);
  } catch {
    res.status(httpStatus.BAD_REQUEST).json({ msg: 'Cannot get books' });
  }
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await dbUtil().query('SELECT * FROM book WHERE id = $1', [id]);

    res.status(httpStatus.OK).json(result.rows[0]);
  } catch {
    res.status(httpStatus.BAD_REQUEST).json({ msg: 'Cannot get book' });
  }
};

export { getAllBooks, getBook };

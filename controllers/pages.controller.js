import httpStatus from 'http-status-codes';

import dbUtil from '../utils/db.util.js';

/**
 * @api {GET} /pages/nb Get the number of pages
 * @apiGroup Pages
 * @apiName PagesGetNb
 *
 * @apiSuccess (Success (200)) {Number} nbPages The number of pages
 *
 * @apiSuccessExample {json} Success-Response
 * {
 *    "nbPages": 2
 * }
 *
 * @apiError (Error (400)) BAD_REQUEST Cannot get the number of pages
 *
 * @apiPermission Public
 */
const getNumberOfPages = async (req, res) => {
  try {
    let nbPages = 0;
    const result = await dbUtil().query(`
      SELECT COUNT(*)
      FROM book
      `);
    const nbBooks = result.rows[0].count;

    nbPages = Math.floor(nbBooks / 10);

    if (nbBooks % 10) {
      nbPages++;
    }

    res.status(httpStatus.OK).json({ nbPages });
  } catch {
    res.status(httpStatus.BAD_REQUEST).json({ msg: 'Cannot get the number of pages' });
  }
};

export { getNumberOfPages };

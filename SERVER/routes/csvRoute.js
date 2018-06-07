const express = require('express');
const router = express.Router();
const csvCtl = require('../controllers/csvController');

/**
 *  READ CSV DB
 * @type {GET}
 * @returns {Array<Object>}
 */

router.get('/csv/read', csvCtl.read);

/**
 *  WRITE CSV DB
 * @type {POST}
 */

router.post('/csv/write', csvCtl.write);

/**
 *  EXPORT CSV 
 *  @type {GET}
 */

router.get('/csv/export', csvCtl.export);

module.exports = router;
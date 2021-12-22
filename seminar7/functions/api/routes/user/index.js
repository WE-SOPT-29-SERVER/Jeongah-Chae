const express = require('express');
const { checkUser } = require('../../../middlewares/auth');
const router = express.Router();

router.get('/list', require('./userListGET'));

router.get('/:userId', require('./userGET'));
router.put('/:userId', checkUser, require('./userPUT'));
router.delete('/:userId', require('./userDELETE'));

module.exports = router;
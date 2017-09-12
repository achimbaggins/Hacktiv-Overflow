var express = require('express');
var router = express.Router();
const threadController = require('../controllers/threadController');
const authority = require('../helpers/authority');


/* GET users listing. */
router.get('/', threadController.findAll);
router.post('/', threadController.createData)
router.get('/:slug', threadController.getBySlug)
router.post('/:slug', threadController.createRespon)
// router.put('/:id', threadController.put)
// router.put('/:id/status', threadController.status)
router.delete('/:id', threadController.destroy)


module.exports = router;

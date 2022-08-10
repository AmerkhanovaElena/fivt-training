const Router = require('express');
const router = new Router();
const eventController = require('../controllers/eventController');

router.post('/apply', eventController.apply);
router.get('/check', eventController.check);
router.get('/', eventController.getAll);
router.get('/:id_event', eventController.getOne);
router.post('/', eventController.createNew);

module.exports = router;
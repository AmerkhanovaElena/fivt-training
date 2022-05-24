const Router = require('express');
const router = new Router();
const eventController = require('../controllers/eventController');

router.get('/id', (req, res) => {
    res.status(200).json({message: 'just checking'});
});
router.post('/apply', eventController.apply);
router.get('/check', eventController.check);
router.get('/getAll', eventController.getAll);

module.exports = router;
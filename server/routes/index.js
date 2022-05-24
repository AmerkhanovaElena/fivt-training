const Router = require('express');
const router = new Router();
const eventRouter = require('./eventRouter');

router.use('/events', eventRouter);

module.exports = router;
class EventController {
    async apply(req, res) {
        res.json('checking');
    }
}

module.exports = new EventController();
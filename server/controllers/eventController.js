const {Event, CompanyInEvent} = require('../models/models');
const ApiError = require('../error/apiError');

class EventController {
    async apply(req, res) {
        const {id_event,
            id_company,
            students_to_recruit_number,
            responsible_name,
            responsible_phone_number,
            responsible_email,
            details} = req.body;
        const companyInEvent = await CompanyInEvent.create({
            id_event,
            id_company,
            students_to_recruit_number,
            responsible_name,
            responsible_phone_number,
            responsible_email,
            details});
        return res.json(companyInEvent);
    }

    async check(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('ID not provided'))
        }
        res.json(id);
    }

    async getAll(req, res) {
        const events = await Event.findAll();
        return res.json(events);
    }
}

module.exports = new EventController();
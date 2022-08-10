const {Event, CompanyInEvent} = require('../models/models');
const ApiError = require('../error/apiError');

class EventController {
    async createNew(req, res) {
        console.log(req.body);
        const {
            title,
            type,
            year,
            beginning_date,
            ending_date,
            description,
            documents_deadline,
            documents_info} = req.body;
        const event = await Event.create({
            title,
            type,
            year,
            beginning_date,
            ending_date,
            description,
            documents_deadline,
            documents_info
        });
        return res.json(event);
    }

    async apply(req, res) {
        const {
            id_event,
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

    async getOne(req, res) {
        const {id_event} = req.params;
        const event = await Event.findOne({
            where: {id_event}
        });
        return res.json(event);
    }
}

module.exports = new EventController();
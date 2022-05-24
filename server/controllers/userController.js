const {User, Company} = require('../models/models');
const ApiError = require('../error/apiError');

class UserController {
    async registerCompany(req, res) {
        const {
            login,
            pwd_hash,
            role,
            name,
            description,
            hr_name,
            hr_phone_number,
            hr_email} = req.body;
        const user = await User.create({
            login,
            pwd_hash,
            role});
        const company = await Company.create({
            login,
            name,
            description,
            hr_name,
            hr_phone_number,
            hr_email
        })
        return res.json(user);
    }

    async check(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('ID not provided'))
        }
        res.json(id);
    }
}

module.exports = new UserController();
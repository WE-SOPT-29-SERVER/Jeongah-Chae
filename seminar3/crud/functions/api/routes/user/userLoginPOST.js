const users = require("../../dbMockup/user");
const util = require("../../lib/util");
const statusCode = require("../../constatnts/statusCode");
const responseMessage = require("../../constatnts/responseMessage");

module.exports = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    const existingUser = users.filter(obj => obj.email === email)[0];

    if (!existingUser) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }
    if (existingUser.password !== password) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
    }
    const loginUser = {
        id: existingUser.id,
        name: existingUser.name,
        email,
    };
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, loginUser));
}
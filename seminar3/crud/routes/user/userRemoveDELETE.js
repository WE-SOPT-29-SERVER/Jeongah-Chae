const users = require("../../dbMockup/user");
const util = require("../../lib/util");
const statusCode = require("../../constatnts/statusCode");
const responseMessage = require("../../constatnts/responseMessage");

module.exports = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }
    const existingUser = users.filter(user => user.id === Number(id))[0];
    if (!existingUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }
    const newUsers = users.filter(user => user.id !== Number(id));
    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.USER_DELETE_SUCCESS,
            newUsers,
        ),
    );
};

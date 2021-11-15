const users = require("../../dbMockup/user");
const util = require("../../lib/util");
const statusCode = require("../../constatnts/statusCode");
const responseMessage = require("../../constatnts/responseMessage");


module.exports = async (req, res) => {
    // const email = req.body.email;
    // const name = req.body.name;
    // const password = req.body.password;

    //비구조화 할당, destructuring assignment
    const { email, password, name } = req.body;

    // 비구조화 할당도 이름 변경해서 할당 가능
    //const { email: myEmail, password: myPassword, name: myName} = req.body;

    //request body가 잘못된 경우
    if (!email || !name || !password) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const alreadyUser = users.filter(obj => obj.email === email).length > 0;
    // 해당 이메일을 가진 유저가 이미 존재하는 경우
    if (alreadyUser) {
        return res.status(statusCode.CONFLICT).send(util.fail(statusCode.CONFLICT, responseMessage.ALREADY_EMAIL));
    }

    const newUser = {
        id: users.length + 1,
        name,
        password,
        email
    };
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATED_USER, newUser));
}
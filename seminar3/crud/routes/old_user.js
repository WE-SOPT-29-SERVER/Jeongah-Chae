const express = require("express");
const router = express.Router();
const users = require("../dbMockup/user");
const util = require("../lib/util");
const statusCode = require("../constatnts/statusCode");
const responseMessage = require("../constatnts/responseMessage");

router.post('/signup', (req, res) => {
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
});
router.post('/login', async (req, res) => {
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
});

/**
 * res.status().send() 를 꼭 마지막에 보내는게 아니어도 된다.
 * ex. 유저 검색 히스토리 저장
 * 1. search?keyword=hihi 
 * 2. 검색 결과 반환
 * 3. res.status().send()
 * 4. 검색 히스토리 반환
 * 
 * 단, 에러처리에서는 return 을 써주자.
 */

// router.get('/', (req, res) => {});
// router.get('/:id', (req, res) => {});
// router.put('/:id', (req, res) => {});
// router.delete('/:id', (req, res) => {});
module.exports = router;
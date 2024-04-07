const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config");
const { loginQuery} = require("../db/userQueries");

const loginUser = async (email, password) => {

    const user = await loginQuery(email, password);
    if (user != null) {
        const token = jwt.sign({ id: user.id },JWT_SECRET_KEY);  
        const responseBody = { user: user, token: token };
        return responseBody;
    }

    else {
        const responseBody = { user: null, message:"Sorry, wrong details"};
        return responseBody;
    }
}

module.exports = {loginUser}
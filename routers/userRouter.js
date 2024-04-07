// const { getUsers, writeUsers } = require("../db.js");
const { Router } = require("express");

const { getUsersQuery,getUserByUserIdQuery,addUserQuery} = require("../db/userQueries")
const {getTodosByUserIdQuery}=require("../db/todoQueries")
const {loginUser}=require("../actions/userActions")
const userRouter = Router();

userRouter.get('/', async (req, res) => {
    try
    {
        const userr = await getUsersQuery();
        res.send(userr);
    }
    catch (error) {
        res.status(500).send({ success: "false", error });
    }
})

userRouter.get('/:userId', async (req, res) => {
    const {userId} = req.params;
    try {
        const user = await getUserByUserIdQuery(userId);
        res.send(user);
    }
    catch (error) {
        res.status(500).send({ success: "false", error });
    }
})

userRouter.post('/', async (req, res) => {
    const u = req.body;
    try {
        const user = await addUserQuery(u);
        res.send(user);
    }
    catch (error) {
        res.status(500).send({ success: "false", error });
    }
})
userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await loginUser(email, password);
       
        if (result.user != null){ 
            console.log( "umhnfgbdvs" ,result.user  );
            const result2=await getTodosByUserIdQuery(result.user.id);
            result.alltodos=result2;
            res.status(200).send(result);}
        else
            res.status(401).send(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
   
})
module.exports = { userRouter };


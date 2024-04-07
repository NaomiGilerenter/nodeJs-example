const express = require('express');
const cors = require("cors");
// const { getUsers, writeUsers, getTodos,writeTodos } = require("./db.js");
const {userRouter}=require  ("./routers/userRouter");
const {todoRouter} = require("./routers/todoRouter");
// const {my} = require("./middleware ");
const { ccc, promiseQuery } = require("./db/sqlConnection")

const app = express();  //יצירת אובייקט בעל יכולות של שרת 

const PORT = 8080;

app.use(express.json()); //כדי שנוכל לקבל את הבאדי שנשלח - חייבים להשתמש ב-middleware
app.use(cors());         //השאה לכל הלקוחות בכל מחשב שהוא להפעיל את כל סוגי הבקשות
// app.use(my);

app.use("/user", userRouter);
app.use("/todo", todoRouter);

app.listen(PORT, (err) => {
    if (err)
        console.log('error while running server', err);
    else
        console.log('server is running in port: ' + PORT);
})


ccc.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!!!!!!!");
});





// const {  getTodos,writeTodos } = require("../db.js");
const { Router } = require("express");

const { getTodosQuery,getTodosByUserIdQuery,addTodoQuery } = require("../db/todoQueries")

const todoRouter = Router();

todoRouter.get('/', async (req, res) => {
    try {
        const todos = await getTodosQuery();
        res.send(todos);
    }
    catch (error) {
        res.status(500).send({ success: "false", error });
    }
})

todoRouter.get('/:userId', async (req, res) => {
    const {userId} = req.params;
    try {
        const userTodos = await getTodosByUserIdQuery(userId);
        res.send(userTodos);
    }
    catch (error) {
        res.status(500).send({ success: "false", error });
    }
})

todoRouter.post('/', async (req, res) => {
    const todo = req.body;
    try {
        const result = await addTodoQuery(todo);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({ success: "false", error });
    }
})

module.exports = { todoRouter };

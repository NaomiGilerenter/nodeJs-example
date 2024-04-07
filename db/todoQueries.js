const { promiseQuery } = require("./sqlConnection")

const getTodosQuery = async () => {
    const result = await promiseQuery("SELECT * FROM todos");
    return result;
}

const getTodosByUserIdQuery = async (userid) => {
    const result = await promiseQuery(`SELECT * FROM todos WHERE userid = ${userid}`);
    return result;
}

const addTodoQuery = async ({id, desc, userid}) => {
   const result = await promiseQuery(`insert into todos VALUES  (${id}, '${desc}', ${userid})`);
    return result;
}

module.exports = { getTodosQuery, getTodosByUserIdQuery, addTodoQuery }
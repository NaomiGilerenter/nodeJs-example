const {promiseQuery}=require("./sqlConnection")

const getUsersQuery = async () => {
    const result = await promiseQuery("SELECT * FROM users");
    return result;
}

const getUserByUserIdQuery = async (userId) => {
    const result = await promiseQuery(`SELECT * FROM users WHERE id = ${userId}`);
    return result;
}

const addUserQuery = async ({id, name, email,password}) => {
   const result = await promiseQuery(`insert into users values(${id},'${name}','${email}','${password}')`);
    return result;
}

const loginQuery = async (email,password) => {
    const result = await promiseQuery(`SELECT * FROM users WHERE email = '${email}' and password='${password}' `);
    if (result.length == 0)
        return null;
    return result[0]; 
   
}
module.exports={getUsersQuery,getUserByUserIdQuery,addUserQuery,loginQuery}
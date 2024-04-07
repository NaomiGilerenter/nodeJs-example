const mySql= require('mysql2')
const util = require("util");
const ccc =mySql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"todosnaomi"
});
const promiseQuery = (sql) => {
    return util.promisify(ccc.query).call(ccc, sql);    
}

module.exports={ccc,promiseQuery}
import mysql from "mysql";

export const db = mysql.createConnection({
    host: 'museus.mysql.database.azure.com',
    user: 'Douglas',
    password: 'batata5.',
    database: 'crud',
    ssl:{mode: 'require'}
  });



// export const db = mysql.createConnection({
//     host: "127.containers-us-west-156.railway.app.0.1",
//     user: "root",
//     password: "pkfuhLHjskg94ACi2NZ37",
//     database: "railway",
// });
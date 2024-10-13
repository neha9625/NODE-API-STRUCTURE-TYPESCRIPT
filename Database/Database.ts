import mysql from "mysql2";

const Pool = mysql.createPool({
    connectionLimit: 50,
    host: "",
    port: 3306,
    user: "",
    password: "",
    database: ""
});

export default Pool;



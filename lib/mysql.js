const mysql=require('mysql2');
const querystring=require("querystring")

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'website'
})

db.connect();

module.exports=db;

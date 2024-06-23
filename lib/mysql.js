const mysql=require('mysql2');
const querystring=require("querystring")

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'website'
})

connection.connect();

connection.query('select * from user',(err,results,fields)=>{
    if(err) throw err;
    console.log(results)
})

connection.end();
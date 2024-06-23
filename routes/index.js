const db = require('../lib/mysql.js')

module.exports = function(app){
    app.get('/',(req,res)=>{
        res.type('html');
        res.render('index');
    })
}

module.exports = function(app){
    app.post('/login',(req,res)=>{
        //获取数据
        var val =req.body;
        var userName=val.userName;
        var userPwd=val.userPwd;
        console.log(val)
        //查询数据
        db.query('select * from user where userName = ? and userPwd = ?',[userName,userPwd],function(err,data){
            if(err){
                throw err;
            }else if(data.length>0){
                res.end('登陆成功');
            }else{
                res.end('登陆失败')
            }
        })
    })
}
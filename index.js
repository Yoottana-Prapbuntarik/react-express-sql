const express = require('express');
const core  = require('cors');
const app = express();
const mysql = require('mysql');

const selectAllMember = 'SELECT * FROM member';
const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
})
connect.connect(err => {
    if(err){
        return err;
    }
});
app.use(core());
app.get('/',(req,res)=>{
    res.send("hello to root path");
});

app.use('/member/delete=:id',(req,res)=>{
    const id = req.params.id;
    const deleteMemberById = `DELETE FROM member where id = ${id}`
    connect.query(deleteMemberById,(err,result)=>{
        if(err){
            return res.send(err);
        }else{
            return res.send("sucessfully Delete data member");
        }
    })
})

app.get('/member/add',(req,res)=>{
        const {name , lname , age} = req.query;
    const insertMember = `INSERT INTO member (name , lname , age) VALUES('${name}','${lname}',${age})`
    connect.query(insertMember,(err,results)=>{
        if(err){
            return res.send(err);
        }else{
            return res.send('sucessfully added data member');
        }

    });
});

app.get('/member',(req,res)=>{
    connect.query(selectAllMember,(err, results)=>{
        if(err){
            return res.send(err);
        }else{
            return res.json({
                data: results
            })
        }
})
});
app.listen(4001,()=>{
   console.log("listen sever port 4001");
    
});
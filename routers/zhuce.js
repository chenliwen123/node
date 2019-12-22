const express=require('express');
const sql=require('../mysql/sql').sql;
const router=express.Router()

router.post('/zhuce',async function (req,res) {
     let status= await sql('insert into user(name,password) values(?,?)',[req.body.name,req.body.pas])
     res.send(status)
})

router.post('/checkname',async function (req,res) {
    let data=await sql('select * from user where='+req.body.name)
    res.send(data);
})

module.exports=router;
const express=require('express');
const sql=require('../mysql/sql').sql;
const routes=express.Router();

routes.get('/', async function (req,res) {
    let data= await sql('select * from zftp',[])
    res.render('index',{
        name:"路由里面的首页",
        data:data
    })
})

module.exports=routes;
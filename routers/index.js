const express=require('express');
const sql=require('../mysql/sql').sql;
const routes=express.Router();

routes.get('/', async function (req,res) {
    res.render('index',{
        name:"路由里面的首页",
    })
})
routes.get('/zhuce',function (req,res) {
    res.render('zhuce')
})

module.exports=routes;
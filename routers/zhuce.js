const express=require('express');
const sql=require('../mysql/sql').sql;
const router=express.Router()

router.post('/zhuce',async function (req,res) {
     try {
    let status= await sql('insert into user(id,name,password) values(1,?,?)',[req.body.name,req.body.pas])
}catch(error){
    resolve('出现错误'+error);
}


res.render('zhuce');
})

module.exports=router;
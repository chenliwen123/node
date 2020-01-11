const express=require('express');
const router=express.Router();

router.post('/post',function (req,res) {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.send({code:1,msg:"成功",data:{name:req.body.name}})
})


module.exports=router;
const express=require('express');
const router=express.Router();

router.post('/post',function (req,res) {
  res.render('post',{
      newname:req.body.name
  })
})


module.exports=router;
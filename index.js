const express=require('express');
const swig=require('swig');
const bodyparser=require('body-parser');
const app=express();

app.use(bodyparser.urlencoded({
    extended:false,
}))
app.set(express.static('./views'));
//app.engine('ejs',swig.renderFile);
app.set('view engine','ejs')

app.get('/',function (req,res) {
    res.render('index',{
        name:"陈立文1"
    })
})

app.post('/post',function (req,res) {
    res.render('post',{
        newname:req.body.name
    })
})



app.listen(3000,function (req,res) {
   console.log('localhost:3000 ! ! ! !')
})
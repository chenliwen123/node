const express=require('express');
const swig=require('swig');
const bodyparser=require('body-parser');
const app=express();

app.use(bodyparser.urlencoded({
    extended:false,
}))


app.get('/',function (req,res) {
    res.render('index',{
        name:"陈立文"
    })
})

app.post('/post',function (req,res) {
    res.render('post',{
        newname:req.body.name
    })
})

app.set(express.static('./views'));
app.engine('html',swig.renderFile);
app.set('view engine','html')


app.listen(3000,function (req,res) {
   console.log('localhost:3000 ! ! ! !')
})
const express=require('express');
const swig=require('swig');
const bodyparser=require('body-parser');
const newtime=require('./routers/newtime');
const sql=require('./mysql/sql');
const app=express();

app.use(bodyparser.urlencoded({
    extended:false,
}))

app.set(express.static('./views'));
//app.engine('ejs',swig.renderFile);
app.set('view engine','ejs')

app.use('/',newtime)


app.get('/', async function (req,res) {
    const data = await sql.sql('select * from zftp',[]);
    res.render('index',{
        name:"陈立文",
        data:data
    })
})

app.post('/post',function (req,res) {
    res.render('post',{
        newname:"<h1>"+req.body.name+"</h1>"
    })
})



app.listen(3000,function (req,res) {
   console.log('localhost:3000 ! ! ! !')
})
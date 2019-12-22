const express=require('express');
const bodyparser=require('body-parser');
const path=require('path');
const app=express();
const index=require('./routers/index' );
const post=require('./routers/post');
const zhuce=require('./routers/zhuce');
app.use(bodyparser.urlencoded({
    extended:false,
}))

// app.set(express.static('./views'));
app.use(express.static(path.join(__dirname, '/')))//
//app.engine('ejs',swig.renderFile);
app.set('view engine','ejs')

app.get('/')


app.use('/',index)
app.use('/',post)
app.use('/',zhuce)





app.listen(3000,function (req,res) {
   console.log('localhost:3000 ! ! ! !')
})
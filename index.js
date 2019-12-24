const express=require('express');
const bodyparser=require('body-parser');
const path=require('path');
const app=express();
const index=require('./routers/index' );
const post=require('./routers/post');
const zhuce=require('./routers/zhuce');
const postfile=require('./routers/postfile');
app.use(bodyparser.urlencoded({
    extended:false,
}))

// app.set(express.static('./views'));//   下面的和现在没有区别
app.use(express.static(path.join(__dirname, '/')))// 但是我在访问其他静态文件的时候  需要用到这个
//app.engine('ejs',swig.renderFile);
app.set('view engine','ejs')

app.use('/',index)
app.use('/',post)
app.use('/',zhuce)
app.use('/',postfile);

//vscode 测试


app.listen(3000,function (req,res) {
   console.log('localhost:3000 ! ! ! !')
})
const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const index=require('./routers/index' );
const post=require('./routers/post');
app.use(bodyparser.urlencoded({
    extended:false,
}))
app.set(express.static('./views'));
app.set('view engine','ejs')




app.use('/',index)
app.use('/',post)





app.listen(3000,function (req,res) {
   console.log('localhost:3000 ! ! ! !')
})
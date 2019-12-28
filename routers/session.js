const routers=require('express').Router();

routers.get('/setsession',function (req,res) {
    req.session.chenliwen='chenliwen',
        res.send('设置成功');
})


routers.get('/getsession',function (req,res) {
    res.send(req.session.chenliwen);
})

routers.get('/outsession',function (req,res) {
    req.session.destroy()
    res.redirect('https://www.baidu.com/');//清除 session   后跳转百度
})

module.exports=routers;
var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var fs = require('fs');
/* 上传页面. */
router.get('/postfile', function(req, res, next) {
 res.render('postfile',{
   imgurl:"",
 });
 //res.sendfile('./views/postfile.html');
});
/* 上传 */
router.post('/file/uploading', function(req, res, next) {
  /* 生成multiparty对象，并配置上传目标路径 */
  var form = new multiparty.Form();
  /* 设置编辑 */
  form.encoding = 'utf-8';
  //设置文件存储路劲
  form.uploadDir = './public/';
  //设置文件大小限制
  form.maxFilesSize = 2 * 1024 * 1024;
  // form.maxFields = 1000;  //设置所有文件的大小总和
  //上传后处理
  form.parse(req, function(err, fields, files) {
    var filesTemp = JSON.stringify(files, null, 2);
    if(err) {
      console.log('parse error:' + err);
    }else {
      console.log('parse files:' + filesTemp);
      var inputFile = files.inputFile[0];
      var uploadedPath = inputFile.path;
      var dstPath = './public/' + inputFile.originalFilename;
      //重命名为真实文件名
      fs.rename(uploadedPath, dstPath, function(err) {
        if(err) {
          console.log('rename error:' + err);
        }else {
          console.log('rename ok');
        }
      })
    }
    res.render('postfile',{
      imgurl:'/public/'+files.inputFile[0].originalFilename
    })
  })
})
module.exports = router;

# 1. node的学习

npm install xxx  安装XXX模块 但不记录到package.json 中

npm install --save XXX 安装xxx模块，并且记录到package.json里，字段对应的dependency，是产品环境必须依赖的模块

npm install --save-de 安装XXX模块 并且记录到package.json里，字段对应的dev-dependency，是开发环境必须依赖的模块，比如测试类的（mocha、chai、sinon、zombie、supertest等）都在

npm install --global XXX 全局安装xxx模块，但不记录到package.json里，如果模块里package.json有bin配置，会自动链接，作为cli命令


# 2.看了一本node 方面的书   感觉有点老作用不太大

  * 接下来看模块 不知道接下来的进展会怎么样

# 3 开始入门了node 
  ## 1.学习了几个模块
  ### express body-parser ejs swig  
  #### express-router 路由设置路径的同事  app.use('设置目录')  
  #### 在路由中设置 route.get('二级目标')
  #### 访问时  需要localhost:3000/设置目录/二级目录  访问
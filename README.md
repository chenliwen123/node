# 1. node的学习

npm install xxx  安装XXX模块 但不记录到package.json 中

npm install --save XXX 安装xxx模块，并且记录到package.json里，字段对应的dependency，是产品环境必须依赖的模块

npm install --save-de 安装XXX模块 并且记录到package.json里，字段对应的dev-dependency，是开发环境必须依赖的模块，比如测试类的（mocha、chai、sinon、zombie、supertest等）都在

npm install --global XXX 全局安装xxx模块，但不记录到package.json里，如果模块里package.json有bin配置，会自动链接，作为cli命令

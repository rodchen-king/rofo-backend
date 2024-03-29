var express = require('express');
var router = express.Router();
var Share = require('./Share')
var URL = require('url');

// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var Sharesql = require('../db/Sharesql');

// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.mysql );
// 响应一个JSON数据
var responseJSON = function (res, ret) {
     if(typeof ret === 'undefined') { 
          res.json({     
            code:'-200',
            msg: '操作失败'   
        }); 
    } else { 
      res.json(ret); 
  }};
// 添加用户

router.get('/getAll', function(req, res, next) {
  // var Share = new Share();
  // var params = URL.parse(req.url, true).query;
  // var response = {status:1,data:Share};
  // res.send(JSON.stringify(response));

   // 从连接池获取连接 
  pool.getConnection(function(err, connection) { 
    // 获取前台页面传过来的参数  
    var param = req.query || req.params;   
    // 建立连接 查询所有分享数据 
    connection.query(Sharesql.queryAll, [param.uid,param.name], function(err, result) {
      if(result) {
        result = {
          code: 200,
          data: result,
          msg:'success'
        };  
      }     
          
      // 以json形式，把操作结果返回给前台页面     
      responseJSON(res, result);   

      // 释放连接  
      connection.release();  
    });
  });
});

router.post('/insert', function(req, res, next) {
  pool.getConnection(function(err, connection) { 
    var param = req.body;
    console.log(param);

    connection.query(Sharesql.insert, [param.title, param.author, param.share_date], function(err, result) {
      if(result) {
        result = {
          code: 200,
          data: result,
          msg:'success'
        };  
      }     
          
      responseJSON(res, result);   
      connection.release();  
    });
  });
});

module.exports = router;

var mysql = require('mysql');

var express = require('express');
var path = require('path');
var http = require("http");
var URL = require('url');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
// post请求会用到
var bodyParser = require('body-parser');

var app = express();


var conn = mysql.createConnection({
    host: '39.108.59.106', //服务器端口
    user: 'root', //数据库用户名
    password: 'hx123456', //密码
    database: 'hx_music', //指定连接的数据库
    port: 3306 //服务器的端口号
});

conn.connect();

conn.query('SELECT * from yy_song', function(err, result) {
    if (err) throw err;
    console.log(result);
})
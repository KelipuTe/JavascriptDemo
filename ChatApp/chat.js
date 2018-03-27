var app = require('express')();

var http = require('http').Server(app); // 处理 http 请求
var io = require('socket.io')(http);

/* 类似于 Laravel 的路由 */
app.get('/',function (request,response) {
    response.send('hello world'); // 向客户端发送信息
    // response.sendFile(__dirname+'../Slip/slip05.html'); // 向客户端发送文件
});

io.on('connection',function (socket) {
    socket.on('chat.message',function (message) {
        // 服务器拿到message后通过emit方法广播给连接服务器的所有的用户
        io.emit('chat.message',message);
    });
});

/* 命令行通过 node chat.js 启动服务器 */
/* 浏览器访问 localhost:3000 端口 */
http.listen(3000,function () {
    console.log('server start');
});
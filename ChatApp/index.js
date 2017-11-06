var app = require('express')();

var http = require('http').Server(app);/*处理http请求*/
var io = require('socket.io')(http);

/*类似于Laravel的路由*/
app.get('/',function (request,response) {
    // response.send('hello world')/*向客户端发送信息*/
    response.sendFile(__dirname+'/leftSlippingBox.html');/*向客户端发送文件*/
});

io.on('connection',function (socket) {
    // console.log('a user connect');
    socket.on('chat.message',function (message) {
        // console.log('a new message:' + message)
        /*服务器拿到message后通过emit方法广播给连接服务器的所有的用户*/
        io.emit('chat.message',message);
    });
});

/*命令行通过 node index.js 启动服务器*/
/*浏览器访问localhost:3000端口*/
http.listen(3000,function () {
    console.log('server start');
});
//在Node 中专门提供了一个核心模块：http
//http 这个模块的职责就是帮你创建编写服务器的


//1.加载http模块
var http = require('http')

// 2.使用 http.createServer()方法创建一个web服务器
//   返回一个Server实例
var server = http.createServer()
// 3.服务器：
//   提供服务：数据的服务
//   发请求
//   接收请求
//   处理请求
//   发送响应
//   注册request 请求事件
//  当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理函数
server.on('request',function(){
    console.log('收到客户端的请求！');
})
server.listen(3000,function(){
    console.log('服务器请求成功，通过  http://127.0.0.1:3000/ 进行访问！');
})

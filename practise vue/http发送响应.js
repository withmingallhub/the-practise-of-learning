var http = require('http')
var server = http.createServer();

// request 请求事件处理函数，需要接收两个参数
//   Request 请求对象
//      请求对象可以用来获取客户端的一些请求信息，例如，请求路径
//   Response 相应对象
//      响应对象可以用来给客户端发送响应消息

server.on('request',function(request,response){
    // http://127.0.0.1:4000/    /
    // http://127.0.0.1:4000/a   /a
    // http://127.0.0.1:4000/foo/b   /foo/b
    console.log('收到客户端的请求！请求的路径是' + request.url)
    // response对象有一个方法：write 可以用来给客户端发送响应数据
    response.write('hello')
    response.write('node.js')
    response.end()
})
server.listen(4000,function(){
    console.log('服务器请求成功，通过  http://127.0.0.1:3000/ 进行访问！');
})

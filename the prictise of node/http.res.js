var http = require('http')
var server = http.createServer();
server.on('request',function(request,response){
    console.log('收到客户端的请求！请求的路径是' + request.url)
    // 根据不同的请求路径发送不同的响应结果
    //    1.获取请求路径
    //       request.url 获取到的是端口号之后的那一部分路径
    //       也就是说所有的url 都是以/ 开头的
    //    2.判断路径处理相应
    var url = request.url;
    // if(url === '/first'){
    //     response.end("Found Success!")
    // }
    // else{
    //     response.end("404 Not Found!")
    // }
    if(url === '/dog'){
        var dos = [
            {
                name:'wanghao',
                class:'dog'
            },
            {
                name:'tiandog',
                class:'big dog'
            },
            {
                name:'hao dog',
                class:'dog dog'
            }

        ]
        //响应只能是二进制数字，或者字符串
        // 数字，对象，数组，布尔值
        response.end(JSON.stringify(dos))
    }
})
server.listen(4000,function(){
    console.log('服务器请求成功，通过  http://127.0.0.1:3000/ 进行访问！');
})

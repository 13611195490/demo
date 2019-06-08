var http = require('http'),
    url = require('url'),
    fs = repuire('fs');
var server1 = http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true),
        pathname = urlObj['pathname'],
        query = urlObj['query'];
    //静态资源文件的请求处理：
    //服务端接收到具体的请求文件中的源代码返回给客户端进行渲染即可
    var reg = /\.(HTML|CSS|JS)/i;
    if(req.test(pathname)){
        var suffix = req.exec(pathname)[1].toUpperCase(),
            suffixMIME = suffix === 'HTML' ? 'text/html' : (suffix === 'CSS' ? 'text/css' : 'text/javascript');
        try {
            res.writeHead(200,{
                'content-type' : suffixMIME + ';charset=utf-8;'
            });
        }catch (e) {
            res.writeHead(404);
            // res.end(fs.readFileSync('.'+pathname,'utf-8'))
            res.end('file is not found~')
        }
        return
    }
});
server1.listen(88,function () {
    console.log('server is success,listening on 88 port!');
})

/**
 * Created by web-01 on 2017/11/17.
 */
const http=require('http');

let app=function(req,res){
    console.log("webserver-2  get a res");

    let url=req.url;
    if(url==='/index'){
        res.end('<h1>welcome to index</h1><hr>');
    }else if(url==='/user/login'){
        res.end('<h1>welcome to login</h1><hr>');
    }else if(url==='/user/register'){
        res.end('<h1>welcome to register</h1><hr>');
    }else{
        res.writeHead(404,{'Content-Type':'text/html;charset:UTF-8'});
        res.end('您访问的页面不存在');
    }
}

let server=http.createServer(app);


server.listen(8080);

console.log("webserver-2  run");
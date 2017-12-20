const Koa = require('koa');
const app = new Koa;



let formParse = require('co-busboy');
let fs = require('fs');
let path = require('path');



let request = require('request');

let router = require('koa-frouter');
let bodyParser = require('koa-bodyparser');
let static = require('koa-static');
let cors = require('koa-cors');

//允许跨域访问
app.use(cors());

app.use(static('static/img'));
app.use(bodyParser());
app.use(router(app,'router'));


app.use(async (ctx) => {
    let content = await new Promise((resolve, reject) => {
        request.get('http://localhost:8080/index.html',function(error, response, body){
              resolve(body);
        });
    })
    ctx.body = content;

})



app.listen('2222',()=>{
    console.log('listen to 2222...')
})

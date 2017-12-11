const Koa = require('koa');
const app = new Koa;

let request = require('request');


app.use(async (ctx) => {
    let content = await new Promise((resolve, reject) => {
        request.get('http://localhost:8080/index.html',function(error, response, body){
            console.log('error:', error); // Print the error if one occurred
              console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
              console.log('body:', body);
              resolve(body);
        });
    })
    ctx.body = content;

})

app.listen('2222',()=>{
    console.log('listen to 2222...')
})

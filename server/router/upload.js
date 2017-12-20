let formParse = require('co-busboy');
let fs = require('fs');
let path = require('path');
console.log(123)

exports.post = function*(){
    let parts = formParse(this.request);
    let part;
    let fileNames = [];

    while( part = yield parts){
        let filename = part.filename;
        fileNames.push(filename);

        let homeDir = path.resolve(__dirname,'..');
        let newPath = homeDir + '/static/img/' + filename;
        let stream = fs.createWriteStream(newPath);
        part.pipe(stream);
    }

    if( fileNames.length > 0){
        let imgUrls = [];
        for(let item of fileNames){
            imgUrls.push('http://localhost:2222/' + item)
        }

        this.body = {
            code:0,
            message:'上传成功',
            success:true,
            result:{
                urls:imgUrls
            }
        }
    } else {
        this.body = {
            code:-1,
            message:'上传失败',
            success:false
        }
    }
}

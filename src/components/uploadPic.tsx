import * as React from 'react';

import 'style/uploadpic';

export interface uploadProps {};
export interface stateProps {
    uri:string,
    uploaded:boolean,
    fileList:any[],
    size:number,
    multiple:any,
    progress:string[],
    showPicUrl:string,
    imgList:string[]};

class uploadpic extends React.Component<uploadProps,stateProps> {
    constructor(props:uploadProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.state = {
            uri:'/upload',
            showPicUrl:'/uploadpic',
            uploaded:false,
            fileList:[],
            size:10000,
            multiple:3,
            progress:[],
            imgList:[]

        };
    }

    handleChange(e:any){
        e.preventDefault();
        let target = e.target;
        let files = target.files;

        let count = this.state.multiple ? files.length : 1;
        for ( let i = 0; i < count; i++ ){
            files[i].thumb = URL.createObjectURL(files[i]);
        }
        files = Array.prototype.slice.call(files, 0);
        files = files.filter(function (file:any) {
            return /image/i.test(file.type)
            })

        this.setState({fileList: this.state.fileList.concat(files)})
    }

    uploadFile(file:any,idx:any){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            if( xhr.upload ){
                xhr.upload.addEventListener('progress', (e) => {
                    this.handleProgress(file, e.loaded, e.total, idx);
                    },false)
            }
            xhr.onreadystatechange = (e) => {
                if( xhr.readyState === 4) {
                    if( xhr.status == 200 ){
                        this.handleSuccess(file,xhr.responseText);
                        this.handleDelete(xhr.responseText);
                        resolve(xhr.responseText);

                    } else {
                        this.handleFailure(file,xhr.responseText);

                        reject(xhr.responseText)
                    }
                }
            }

            xhr.open("POST", this.state.uri, true);
            let form = new FormData();
            form.append("filedata",file);
            xhr.send(form);
            })

    }

    handleProgress(file:any,loaded:number,total:number,idx:any){
        let percent = (loaded/total*100).toFixed(2)+'%';
        let _progress = this.state.progress;
        _progress[idx] = percent;
        this.setState({progress:_progress})
    }

    handleUpload(e:any,handle:any){

        let index = 0;

        for( let item of this.state.fileList){
            console.log(item)
            this.uploadFile(item,index)
            index++;
        }

    }

    handleSuccess(file:any, resTxt:any){
        let resJson = JSON.parse(resTxt);
        if( resJson.success ){
            this.setState({imgList:resJson.result.urls})
            console.log(this.state.imgList)

        }
    }

    handleDelete(resTxt:any){

    }

    handleFailure(file:any, resTxt:any){

    }


    render(){
        let url = this.state;
        return (
            <div className="upload">
                <form action={this.state.showPicUrl} ref="upload" method="post" encType="multipart/form-data">
                    <input type="file"
                        onChange={(e)=>this.handleChange(e)}
                        size={this.state.size}
                        name="imgUpdate"
                        accept="public/img"
                        multiple={this.state.multiple}/>
                        <button onClick={(e)=>this.handleUpload(e,this)}>上传图片</button>
                </form>
                <p>已经上传的图片</p>
                <ul className="uploaded clearfix">
                    <li className="picItem fl"><img src=""/></li>
                </ul>
            </div>
            )
    }
}

export default uploadpic

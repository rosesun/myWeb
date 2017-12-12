import * as React from 'React';
import 'style/showPic';

export interface showPicProps { imgList:any[] };
export interface stateProps { num:number, front:number};

class showPic extends React.Component< showPicProps,stateProps > {
    constructor(props:showPicProps) {
        super(props);
        this.liClick = this.liClick.bind(this);
        this.getRange = this.getRange.bind(this);
        this.imgRun = this.imgRun.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.state = {
            num:0,
            front:0

        }
    }

    liClick(key:any,item:any){
        let itemDom:any = document.getElementsByClassName('img-item');
        let hideDom:any = itemDom[item.id].getElementsByClassName('flipper')[0];
        if(this.state.num === item.id){
            if(this.state.front === 0){
                hideDom.style.transform = "rotateY(-180deg)";
                this.setState({front:1})
            } else {
                hideDom.style.transform = "rotateY(0deg)";
                this.setState({front:0})
            }

        } else {
            itemDom[this.state.num].getElementsByClassName('flipper')[0].style.transform = "rotateY(0deg)";
            this.setState({front:0});
            this.setState({num:item.id})
            this.imgRun(key)
        }
    }

    showDetail(id:number){

    }

    getRange(min:number,max:number):number{
        return Math.random()*(max-min)+min;
    }

    imgRun(key:number){
        let that = this;
        let itemDom:any = document.getElementsByClassName('img-item');
        let itemBox:any = this.refs.picBox;
        let _wR = itemBox.clientWidth;
        let _hR = itemBox.clientHeight;
        for(let i = 0, len = itemDom.length; i < len; i++){
            if( key === i ){
                itemDom[i].style.top = _hR/2 - itemDom[i].clientHeight/2+'px';
                itemDom[i].style.left = _wR/2 - itemDom[i].clientWidth/2+'px';
                itemDom[i].style.transform = 'rotate(0deg)';
                itemDom[i].style.transform = 'scale(1.2)';
                itemDom[i].style.zIndex = '999';
            } else {
                if(key === 0){
                    itemDom[i].style.transform = 'rotate(360deg)';
                    itemDom[i].style.top = '250px';
                    itemDom[i].style.left = '500px';
                    setTimeout(function(){
                        itemDom[i].style.top = that.getRange(0,_hR) + 'px';
                        itemDom[i].style.left = that.getRange(0,_wR) + 'px';
                        itemDom[i].style.transform = 'rotate('+that.getRange(0,90)+'deg)';
                        itemDom[i].style.zIndex = '1';
                        },500)
                } else {
                    itemDom[i].style.top = that.getRange(50,_hR) + 'px';
                    itemDom[i].style.left = that.getRange(100,_wR) + 'px';
                    itemDom[i].style.transform = 'rotate('+that.getRange(0,90)+'deg)';
                    itemDom[i].style.zIndex = '1';
                }

            }

        }

        function initP(){

        }
    }

    render(){
        let imgList = this.props.imgList;
        let imgItem = imgList.map((item) => {
            return(
                <li key={item.id} className="img-item" onClick={(e) => this.liClick(item.id,item)}>
                    <div className="flipper">
                        <div className="show-pic front">
                            <img src={item.src}/>
                            <p>{item.title}</p>
                        </div>
                        <div className="img-detail back">
                            <p>author:hfy</p>
                        </div>
                    </div>
                </li>)
            });
        return (
            <div className="img-con" ref="imgBox">
                <div className="pic-box" ref="picBox">
                    <ul className="img-box">{imgItem}</ul>
                </div>
            </div>
            );
    }

    componentDidMount(){
        //此处可操作dom
        let rootH:any = document.getElementById('root').clientHeight;
        let imgConDom:any = this.refs.imgBox;
        let picBoxDom:any = this.refs.picBox;
        imgConDom.style.height = rootH - 100 +'px';
        picBoxDom.style.height = rootH - 100 +'px';
        this.imgRun(0);
    }
}

export default showPic;

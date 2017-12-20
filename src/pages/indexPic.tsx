import * as React from "react";
import ShowPic from "../components/showPic";

export interface indexProps {};


let testData = require("../../testData/test.json");
const imgList:any[] = testData.picData;

class indexPic extends React.Component<indexProps,{}> {
    constructor(props:indexProps) {
        super(props)
    }
    render(){
        return (
            <div>
                <ShowPic imgList={imgList}/>
            </div>
        )
    }
}

export default indexPic;

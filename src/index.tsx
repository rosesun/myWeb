import * as React from "react";
import * as ReactDOM from "react-dom";
import 'style/common';

import TopBar from "./components/topBar";
import ShowPic from "./components/showPic";

let testData = require("../testData/test.json");
const list:number[] = [1,2,3,4,5];
const imgList:any[] = testData.picData;

ReactDOM.render(
    <div>
        <TopBar list={list} />
        <ShowPic imgList={imgList}/>
    </div>,
    document.getElementById("root")
);

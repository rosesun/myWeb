import * as React from "react";
import * as ReactDOM from "react-dom";
import 'style/common';

import TopBar from "./components/topBar";
import ShowPic from "./components/showPic";
import Footer from "./components/footer";

let testData = require("../testData/test.json");
const imgList:any[] = testData.picData;
const list:any[] = testData.urlData;

ReactDOM.render(
    <div>
        <TopBar list={list} />
        <ShowPic imgList={imgList}/>
        <Footer />
    </div>,
    document.getElementById("root")
);

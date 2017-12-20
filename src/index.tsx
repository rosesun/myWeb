import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import 'style/common';
import TopBar from "./components/topBar";
import Footer from "./components/footer";

//page component import
import IndexPic from './pages/indexPic';
import uploadPage from './pages/uploadPage';

let testData = require("../testData/test.json");
const list:any[] = testData.urlData;

ReactDOM.render(
    <div>
    <Router>
        <div>
            <TopBar list={list} />
            <Route exact path="/" component={IndexPic} />
            <Route path="/uploadpic" component={uploadPage} />
        </div>
    </Router>
        <Footer />
    </div>,
    document.getElementById("root")
);

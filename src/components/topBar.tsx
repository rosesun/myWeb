import * as React from "react";
import 'style/topBar';

export interface TopBarProps { list:any[] }

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class TopBar extends React.Component<TopBarProps, {}> {
    constructor(props:TopBarProps) {
        super(props);
    }
    render() {
        let arrLists = this.props.list;
        let listItems = arrLists.map((arrList) => {
            return(<li key={arrList.id} className="fl"><Link to={arrList.url}>{arrList.name}</Link></li>)
        });
        return (
            <Router>
                <ul className="top-items">{listItems}</ul>
            </Router>
            )
    }
}

export default TopBar;

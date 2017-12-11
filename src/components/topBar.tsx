import * as React from "react";
import 'style/topBar';

export interface TopBarProps { list:number[] }


class TopBar extends React.Component<TopBarProps, {}> {
    constructor(props:TopBarProps) {
        super(props);
    }
    render() {
        let arrLists = this.props.list;
        let listItems = arrLists.map((arrList) => {
            return(<li key={arrList} className="fl">{arrList}</li>)
        });
        return (
            <ul className="top-items">{listItems}</ul>
            )
    }
}

export default TopBar;

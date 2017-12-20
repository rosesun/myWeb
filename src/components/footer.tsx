import * as React from 'react';

import 'style/footer';

export interface footerProps {};

class footer extends React.Component<footerProps,{}> {
    constructor(props:footerProps) {
        super(props)
    }
    render(){
        return (<div className="footer">底部</div>)
    }
}

export default footer

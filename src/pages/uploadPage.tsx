import * as React from 'react';
import UploadPic from "../components/uploadPic";
export interface uploadProps {};

class uploadPage extends React.Component<uploadProps,{}> {
    constructor(props:uploadProps) {
        super(props)
    }
    render(){
        return (<div className="upload">
            <UploadPic />
        </div>)
    }
}

export default uploadPage

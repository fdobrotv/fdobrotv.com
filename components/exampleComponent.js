import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';

const file = './ExampleComponent.docx'
const type = 'docx'

class ExampleComponent extends Component {
    render() {
        return (
            <FileViewer
                fileType={type}
                filePath={file}
                onError={this.onError}/>
        );
    }

    onError(e) {
        console.log(e, 'error in file-viewer');
    }
}

export default ExampleComponent;
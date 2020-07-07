import React from 'react';

class LoadingBoxTop extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            text: (props.text && typeof '8' == typeof props.text) ? props.text : ''
        }
    }

    render(){
        const { text } = this.state;
        
        return(
            <div className="rr-loadingboxtop">
                {
                    text
                }
            </div>
        );
    }
}

export default LoadingBoxTop;
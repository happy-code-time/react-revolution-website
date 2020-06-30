import * as React from 'react';

import ReactDOM from 'react-dom';

import SourceCode from './module/source/SourceCode';

import './module/source/sass/rr-sourcecode.scss';

/**
 * Render it to the html while testing
 */

class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {

        }
    }

    // setValue(clickEvent, value) {
    //     console.log(value);
    // }

    // toggleList() {
    //     this.setState({ display: !this.state.display });
    // }

    filterCode(event, inputValue, filteredCode) {
        console.log(event, inputValue, filteredCode);
    }

    render() {

        return (
            <span>
                <SourceCode
                    /*
                     * Code
                     */
                    displayLineNumber={true}
                    /*
                     * Input 
                     */
                    inputActive={true}
                    inputPlaceholder='Search...'
                    inputCallback={this.filterCode}
                    inputNoDataText='🤯'
                    /*
                     * Loading
                     */
                    loadingDisplay={true}
                    loadingIcon={<p>Loading....</p>}
                    layout='dark' // dark, light
                    code={
`
import * as React from 'react';

import ReactDOM from 'react-dom';

import SourceCode from './module/source/SourceCode';

import './module/source/sass/rr-sourcecode.scss';

/**
 * Render it to the html while testing
 */

class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {

        }
    }

    // setValue(clickEvent, value) {
    //     console.log(value);
    // }

    // toggleList() {
    //     this.setState({ display: !this.state.display });
    // }

    filterCode(event, inputValue, filteredCode) {
        console.log(event, inputValue, filteredCode);
    }

    render() {

        return (
            <span>
                <SourceCode
                    /*
                     * Code
                     */
                    displayLineNumber={true}
                    /*
                     * Input 
                     */
                    inputActive={true}
                    inputPlaceholder='Search...'
                    inputCallback={this.filterCode}
                    inputNoDataText='🤯'
                    /*
                     * Loading
                     */
                    loadingDisplay={true}
                    loadingIcon={<p>Loading....</p>}
                    layout='dark' // dark, light
                    code={
\`
.rr-sourcecode.dark{
    background-color: #1E1E1E;

    .attributeName{
        color: #4EA4DE;
    }
    .tagStart,
    .tagEnd,
    .slash{
        color: #586470
    }
    .tagName{
        color: #255CB2;
    }
    .equal{
        color: #C2C2C2;
    }

    .quote-double,
    .quote-single,
    .attributeValue{
        color: #A75029;
    }

    .not-filtered,
    .no-match,
    .value{
        color: rgb(255,2552,255);
    }

    .line-number{
        color: #C2C2C2;
    }
    .variable-dollar{
      color: #f4459f;
    }
}
\`
                    }
                />
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
`
                    }
                />
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
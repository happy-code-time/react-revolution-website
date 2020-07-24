import * as React from 'react';

import ReactDOM from 'react-dom';

import { TableKeyValue } from './react-revolution/public/react-revolution';

/**
 * Render it to the html while testing
 */

import './react-revolution/sass/rr-table-key-value.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const host = '';

        return (
            <span>
              <TableKeyValue
                mediaBreak={1024}
                title={
                  {
                    left: 'key',
                    right: 'description'
                  }
                }
                data={
                  [
                    {
                      key: 'key',
                      value: 'value'
                    },
                    {
                      key: 'key',
                      value: 'value'
                    },
                    {
                      key: 'key',
                      value: 'value'
                    },
                    {
                      key: 'key',
                      value: 'value'
                    }
                  ]
                }
              />
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
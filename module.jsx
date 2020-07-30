import * as React from 'react';

import ReactDOM from 'react-dom';

// import { Breadcrumbs } from './react-revolution/public/react-revolution';

import { Breadcrumbs } from 'react-revolution';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const host = '';

    return (
      <Breadcrumbs
        hashRouter={true}
        reactRouter={false}
        domainName='Home'
        delimiter='>>'

        overwriteText={false}
        moduleMenu={
          {
            animation: 'height', // height, scale, opacity
            data: [
              {
                text: 'last entry - to toggle',
                data: [
                  {
                    text: 'Child 1',
                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                  },
                  {
                    text: 'Child 2',
                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                  },
                  {
                    text: 'Child 3',
                    href: 'http://localhost:3000/#/react-revolution-menu-click-horizontal',
                  },
                ]
              }
            ]
          }
        }
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
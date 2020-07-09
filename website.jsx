import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';

import Home from './Website/Pages/Home';

import WebsiteContainer from './Website/Modules/WebsiteContainer';

import { MenuClickHorizontal, SideBar } from './react-revolution/public/react-revolution';

import { appNameShort, version } from './Website/Globals';

import './Website/Scss/index.scss';

class App extends React.Component 
{

  constructor(props) {
    super(props);

    this.state = {

    };

    // this.translations = getTranslations();
  }

  render() {
    return (
      <div>
        <WebsiteContainer
          persistUserSelection={false} // set local sotrage on click
          clearPersistUserSelection={true} // do not remove the local storage on component did mount
          sidebarMinifiedAt={720}
          sidebarMaxifiedAt={1024}
          displayMinifyMaxifyIcon={true}
          moduleSidebar={
            <SideBar
              image={<img alt="image" src='dddd' />}
              textLong={appNameShort}
              textShort={`v${version}`}
              moduleMenu={
                <MenuClickHorizontal
                  reactRouter={false}
                  childrenPaddingX={18}
                  data={
                    [
                      {
                        text: 'Home',
                        icon: <i className='fas fa-user' />,
                        href: `account`,
                      }
                    ]
                  }
                />
              }
            />
          }
          headerData={
            <span>

            </span>
          }
          contentData={
            <HashRouter>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </HashRouter>
          }
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

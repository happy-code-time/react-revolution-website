import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';

import Home from './Website/Pages/Home';

import WebsiteContainer from './Website/Modules/WebsiteContainer';

import { MenuClickHorizontal, SideBar, PopupBox, uuid, CustomSuggestion } from './react-revolution/public/react-revolution';

import { appNameShort, version } from './Website/Globals';

import trans from './Website/Translations/trans';

import possibleLanguagesLong from './Website/Functions/language/possibleLanguagesLong';

import setLanguage from './Website/Functions/language/setLanguage';

import possibleLayouts from './Website/Functions/possibleLayouts';

import './Website/Scss/index.scss';
import getAllAvailableModulesNames from './Website/Functions/getAllAvailableModulesNames';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.setOnClickEvent = this.setOnClickEvent.bind(this);
    this.setScrollEvent = this.setScrollEvent.bind(this);
    this.scrollEvent = this.scrollEvent.bind(this);
    this.checkLocation = this.checkLocation.bind(this);
    this.changeSidebarMinifiedState = this.changeSidebarMinifiedState.bind(this);
    this.searchForModule = this.searchForModule.bind(this);

    this.state = {
      minifySidebard: '#/' == window.location.hash ? true : false,
      host: process.env.HOST,
      scrolled: document.documentElement.scrollTop,
      suggestions: [],
      inputValue: ''
    };

    this.href = window.location.href;
  }

  componentDidMount() {
    this.setOnClickEvent();
    this.setScrollEvent();
    this.changeSidebarMinifiedState();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.checkLocation);
    document.removeEventListener('scroll', this.scrollEvent);
  }

  /**
 * Check if the website using a react-router
 * and if the url changed then reload the protector functionalitty
 */
  setOnClickEvent() {
    document.removeEventListener('click', this.checkLocation);
    document.addEventListener('click', this.checkLocation);
  }

  setScrollEvent(){
    document.removeEventListener('scroll', this.scrollEvent);
    document.addEventListener('scroll', this.scrollEvent);
  }

  /**
   * Check location, if the stored href are changed then
   * reload the security context of this extension
   * This feature needed for websites based on
   * react framework
   */
  checkLocation() {
    const self = this;
    let count = 5;
    clearInterval(x);

    var x = setInterval(() => {
      /**
       * If the current href changed
       */
      if (self.href !== window.location.href && count > 0) {
        self.href = window.location.href;
        self.changeSidebarMinifiedState();
        return clearInterval(x);
      }

      if (!count) {
        return clearInterval(x);
      }

      count--;
    }, 100);
  }

  scrollEvent(){
    const { scrolled } = this.state;
    const currentScrollPosition = document.documentElement.scrollTop;
    
    if(50 <= currentScrollPosition){
      return this.setState({
        scrolled: currentScrollPosition
      });
    }

    if(50 >= currentScrollPosition && 0 !== scrolled){
      this.setState({
        scrolled: 0
      });
    }
  }

  changeSidebarMinifiedState() {
    const { minifySidebard } = this.state;
    const hash = window.location.hash;

    if ('#/' == hash && !minifySidebard) {
      return this.setState({ minifySidebard: true });
    }

    if ('#/' !== hash && minifySidebard) {
      this.setState({ minifySidebard: false });
    }
  }

  setLanguage(language = 'English') {
    setLanguage(language);
    window.location.reload();
  }

  setLayout(layout) {
    if (!possibleLayouts.includes(layout)) {
      layout = 'light';
    }

    localStorage.setItem('layout', layout);
  }

  searchForModule(inputValue){
    const { host } = this.state;
    const allModules = getAllAvailableModulesNames();
    const suggestions = [];

    allModules.map( i => {
      if(i.toLowerCase().indexOf(inputValue.toLowerCase())){
        suggestions.push(
          {
            href: `${host}#/${i}`,
            jsx: (
              <p>
                {
                  i
                }
              </p>
            ),
            props: {
              title: trans('clickToNavToTheModule')
            }
          }
        );
      }
    });

    suggestions.sort();
    this.setState({ suggestions });
  }

  render() {
    const { minifySidebard, host, scrolled, suggestions, inputValue } = this.state;

    return (
      <WebsiteContainer
        persistUserSelection={false} // set local sotrage on click
        clearPersistUserSelection={true} // do not remove the local storage on component did mount
        sidebarMinifiedAt={720}
        sidebarMaxifiedAt={1024}
        displayMinifyMaxifyIcon={true}
        minify={minifySidebard}
        moduleSidebar={
          <SideBar
            image={<img alt="image" src='./public/images/icon-48.png' />}
            textLong={appNameShort}
            textShort={`v${version}`}
            moduleMenu={
              <MenuClickHorizontal
                reactRouter={false}
                animation='height'
                data={
                  [
                    {
                      text: 'Home',
                      icon: <i className='fas fa-flag-checkered' />,
                      data: [
                        {
                          text: 'Home',
                          href: `${host}#/`,
                        },
                        {
                          text: 'Home',
                          href: `${host}#/home`,
                        },
                        {
                          text: 'Home',
                          href: `${host}#/ala`,
                        }
                      ]
                    }
                  ]
                }
              />
            }
          />
        }
        headerClassName={`${scrolled ? 'scrolled' : ''}`}
        headerData={
          <span>
            <PopupBox
              defaultClass={false}
              id={false}
              animationTime={300}
              animationType='top-right' // top-left, top-right, bottom-left, bottom-right
              icon={
                <i className='fas fa-globe-europe popup-box-icon'></i>
              }
              data={
                <span>
                  <h1 className="ellipsis">
                    <i className='fas fa-globe-europe' />
                    {
                      trans('changeLanguageTitle')
                    }
                  </h1>
                  <ul>
                    {
                      possibleLanguagesLong.map(language => {
                        return (
                          <li className="ellipsis" key={uuid()} onClick={() => this.setLanguage(language)}>
                            {
                              language
                            }
                          </li>
                        )
                      })
                    }
                  </ul>
                </span>
              }
            />
            <PopupBox
              defaultClass={false}
              id={false}
              animationTime={300}
              animationType='top-right' // top-left, top-right, bottom-left, bottom-right
              icon={
                <i className='fas fa-tint popup-box-icon'></i>
              }
              data={
                <span>
                  <h1 className="ellipsis">
                    <i className='fas fa-tint' />
                    {
                      trans('changeTintTitle')
                    }
                  </h1>
                  <ul>
                    <li className="ellipsis" key={uuid()} onClick={() => this.setLayout('light')}>
                      {
                        trans('lightTheme')
                      }
                    </li>
                    <li className="ellipsis" key={uuid()} onClick={() => this.setLayout('dark')}>
                      {
                        trans('darkTheme')
                      }
                    </li>
                  </ul>
                </span>
              }
            />
            <PopupBox
              defaultClass={false}
              id={false}
              animationTime={300}
              animationType='top-right' // top-left, top-right, bottom-left, bottom-right
              icon={
                <i className='fas fa-search popup-box-icon'></i>
              }
              data={
                <span>
                  <h1 className="ellipsis">
                    <i className='fas fa-search' />
                    {
                      trans('searchForModule')
                    }
                  </h1>
                  <CustomSuggestion
                    placeholder={`${trans('searchForModule')}`}
                    suggestions={suggestions}
                    callback={this.searchForModule}
                    value={inputValue}
                    inputProps={{}}
                    type='text'
                  />
                </span>
              }
            />
          </span>
        }
        contentData={
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => (<Home {...props} />)} />
            </Switch>
          </Router>
        }
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

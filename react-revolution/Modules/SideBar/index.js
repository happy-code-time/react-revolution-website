import React from 'react';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class SideBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      /**
       * User
       */
      defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-sidebar',
      id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
      image: (props.image && typeof {} == typeof props.image) ? props.image : undefined,
      moduleMenu: (props.moduleMenu && typeof {} == typeof props.moduleMenu) ? props.moduleMenu : undefined,
      textLong: (props.textLong && typeof '8' == typeof props.textLong) ? props.textLong : undefined,
      textShort: (props.textShort && typeof '8' == typeof props.textShort) ? props.textShort : undefined
    };
  }

  /**
   * Force re-rendering of this component based
   * on keysChangeListners keys
   * @param {object} props 
   * @param {object} state 
   */
  static getDerivedStateFromProps(props, state) {
    if (getDerivedStateFromPropsCheck(['defaultClass', 'id', 'image', 'moduleMenu', 'textLong', 'textShort'], props, state)) {
      return {
        defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-sidebar',
        id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
        image: (props.image && typeof {} == typeof props.image) ? props.image : undefined,
        moduleMenu: (props.moduleMenu && typeof {} == typeof props.moduleMenu) ? props.moduleMenu : undefined,
        textLong: (props.textLong && typeof '8' == typeof props.textLong) ? props.textLong : undefined,
        textShort: (props.textShort && typeof '8' == typeof props.textShort) ? props.textShort : undefined
      };
    }

    return null;
  }

  render() {
    const { defaultClass, id, moduleMenu, image, textLong, textShort } = this.state;

    return (
      <div id={id} className={defaultClass}>
        <div className="logo-text">
          {
            image &&
            <div className="logo">
              {
                image
              }
            </div>
          }
          <div className="text">
            {
              textLong &&
              <span className="long">
                {
                  textLong
                }
              </span>
            }
            {
              textShort &&
              <span className="short">
                {
                  textShort
                }
              </span>
            }
          </div>
        </div>
        {
          moduleMenu && moduleMenu
        }
      </div>
    );
  }
}

export default SideBar;

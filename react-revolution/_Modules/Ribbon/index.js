import React from 'react';
import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class Ribbon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            /**
             * User
             */
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-ribbon',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            background: (props.background && typeof '8' == typeof props.background) ? props.background : '',
            color: (props.color && typeof '8' == typeof props.color) ? props.color : '',
            ribbon: props.ribbon ? props.ribbon : '',
            content: props.content ? props.content : '',
            directionX: props.directionX && typeof '8' === typeof props.directionX && ['left', 'right'].includes(props.directionX) ? props.directionX : 'right',
            directionY: props.directionY && typeof '8' === typeof props.directionY && ['top', 'bottom'].includes(props.directionY) ? props.directionY : 'top',
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'defaultClass', 'id', 'ribbon', 'background', 'color', 'content', 'directionX', 'directionY', 'background', 'color'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-ribbon',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                background: (props.background && typeof '8' == typeof props.background) ? props.background : '',
                color: (props.color && typeof '8' == typeof props.color) ? props.color : '',
                ribbon: props.ribbon ? props.ribbon : '',
                content: props.content ? props.content : '',
                directionX: props.directionX && typeof '8' === typeof props.directionX && ['left', 'right'].includes(props.directionX) ? props.directionX : 'right',
                directionY: props.directionY && typeof '8' === typeof props.directionY && ['top', 'bottom'].includes(props.directionY) ? props.directionY : 'top',
            };
        }

        return null;
    }

    render() {
        const { addClass, defaultClass, id, ribbon, content, directionX, directionY, background, color } = this.state;
        let bgStyle = {};

        if(background){
            bgStyle.backgroundColor = background;
            bgStyle['--rr-ribbon-background'] = background;
        }

        if(color){
            bgStyle.color = color;
        }

        return (
            <div
                className={`${defaultClass} ${addClass}`}
                id={id}
            >
                <div className='wrapper'>
                    <div className='content'>
                        <div className={`ribbon-holder ${directionX} ${directionY}`}>
                            <div className='ribbon'>
                                <div className={`ribbon-data ${directionY}`} style={bgStyle}>
                                    {
                                        ribbon && ribbon
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='content-data'>
                            {
                                content
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ribbon;
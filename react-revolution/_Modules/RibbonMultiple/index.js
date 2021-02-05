import React from 'react';
import internalUuid from '../internalFunctions/internalUuid';
import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class RibbonMultiple extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            /**
             * User
             */
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-ribbon-multiple',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            content: props.content ? props.content : '',
            ribbons: props.ribbons && typeof [] === typeof props.ribbons && 0 !== props.ribbons.lenth ? props.ribbons : [],
            uuid: `${internalUuid()}`
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'defaultClass', 'id', 'ribbons', 'content' ], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-ribbon-multiple',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                content: props.content ? props.content : '',
                ribbons: props.ribbons && typeof [] === typeof props.ribbons && 0 !== props.ribbons.lenth ? props.ribbons : [],
            };
        }

        return null;
    }

    render() {
        const { addClass, defaultClass, id, ribbons, content, uuid } = this.state;

        return (
            <div
                className={`${defaultClass} ${addClass}`}
                id={id}
            >
                <div className='wrapper'>
                    <div className='content'>
                        {
                            ribbons && 0 !== ribbons.length &&
                            ribbons.map( (props, i) => {
                                const ribbon = props.ribbon ? props.ribbon : '';
                                const directionX = props.directionX && typeof '8' === typeof props.directionX && ['left', 'right'].includes(props.directionX) ? props.directionX : 'right';
                                const directionY = props.directionY && typeof '8' === typeof props.directionY && ['top', 'bottom'].includes(props.directionY) ? props.directionY : 'top';
                                const background = props.background && typeof '8' === typeof props.background ? props.background : '';
                                const color = props.color && typeof '8' === typeof props.color ? props.color : '';

                                let bgStyle = {};

                                if (background) {
                                    bgStyle.backgroundColor = background;
                                    bgStyle['--rr-ribbon-multiple-background'] = background;
                                }

                                if (color) {
                                    bgStyle.color = color;
                                }

                                return (
                                    <div key={`ribbon-holder-${i}-${uuid}`} className={`ribbon-holder ${directionX} ${directionY}`}>
                                        <div className='ribbon'>
                                            <div className={`ribbon-data ${directionY}`} style={bgStyle}>
                                                {
                                                    ribbon && ribbon
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
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

export default RibbonMultiple;
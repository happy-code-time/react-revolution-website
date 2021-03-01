import React from 'react';
import isObject from '../../_Functions/isObject';
import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class ImageBanner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // User
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-image-banner',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            boxData: props.boxData ? props.boxData : '',
            boxProps: props.boxProps && typeof {} === typeof props.boxProps ? props.boxProps : {},
            image: (props.image && typeof '8' == typeof props.image) ? props.image : '',
            imageAsSource: typeof true === typeof props.imageAsSource ? props.imageAsSource : false,
            imageProps: props.imageProps && typeof {} === typeof props.imageProps ? props.imageProps : {},
            direction: props.direction && typeof '8' == typeof props.direction && ['right', 'left', 'center'].includes(props.direction) ? props.direction : 'left',
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props
     * @param {object} state
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'id', 'defaultClass', 'boxData', 'boxProps', 'image', 'imageAsSource', 'imageProps', 'direction'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-image-banner',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                boxData: props.boxData ? props.boxData : '',
                boxProps: props.boxProps && typeof {} === typeof props.boxProps ? props.boxProps : {},
                image: (props.image && typeof '8' == typeof props.image) ? props.image : '',
                imageAsSource: typeof true === typeof props.imageAsSource ? props.imageAsSource : false,
                imageProps: props.imageProps && typeof {} === typeof props.imageProps ? props.imageProps : {},
                direction: props.direction && typeof '8' == typeof props.direction && ['right', 'left', 'center'].includes(props.direction) ? props.direction : 'left',
            };
        }

        return null;
    }

    render() {
        const { defaultClass, addClass, id, boxProps, boxData, image, imageAsSource, imageProps, direction } = this.state;

        return (
            <div
                className={`${defaultClass} ${addClass}`}
                id={id}
                {...(!imageAsSource) && {
                    style: {
                        backgroundImage: `url(${image})`
                    }
                }}
                {...(isObject(imageProps)) && { ...imageProps }}
            >
                <div className={`banner ${direction}`}>
                    <div
                        className='banner-box'
                        {...(isObject(boxProps)) && { ...boxProps }}
                    >
                        {
                            boxData
                        }
                    </div>
                </div>
                {
                    imageAsSource &&
                    <div className='banner-image'>
                        {
                            image &&
                            <img
                                src={image}
                                {...(isObject(imageProps)) && { ...imageProps }}
                                className='image'
                            />
                        }
                    </div>
                }
            </div>
        );
    }
}

export default ImageBanner;

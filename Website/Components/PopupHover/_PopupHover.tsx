import React from 'react';
//@ts-ignore
import { PopupHover } from '../../../react-revolution/public/react-revolution';

const _PopupHover = (holderData: any = '', contentData: any = '', isMenuOutside = false, direction = 'left', useMouseEnter: boolean = false) => {
    return <PopupHover 
        isMenuOutside={isMenuOutside} 
        useMouseEnter={useMouseEnter} 
        direction={direction} 
        holderData={holderData} 
        displayOnHover={true} 
        hideOnLeave={true}
        animation={true}
        contentData={contentData} 
    />;
};

export default _PopupHover;

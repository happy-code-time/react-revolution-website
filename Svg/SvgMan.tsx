import React from 'react';

const SvgMan = (widthHeight: any = 32, color = 'rgb(69,69,69)') => {
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height={`${widthHeight}`} width={`${widthHeight}`} viewBox="0 0 47.18 122.88">
            <g>
                <path fill={`${color}`} d="M23.59,0A10.34,10.34,0,1,1,13.25,10.34,10.34,10.34,0,0,1,23.59,0ZM36.66,38.93v78.23a5.74,5.74,0,0,1-5.72,5.72h0a5.73,5.73,0,0,1-5.72-5.72v-46H22.11v46a5.74,5.74,0,0,1-5.72,5.72h0a5.74,5.74,0,0,1-5.72-5.72V38.93h-2V67.68c0,5.73-8.67,5.73-8.67,0V36.74c0-5,1.69-8.56,4.77-10.88,5.3-4,32.33-4,37.63,0,3.08,2.32,4.79,5.85,4.78,10.88V67.68c0,5.73-8.68,5.73-8.68,0V38.93Z" />
            </g>
        </svg>
    );
};

export default SvgMan;
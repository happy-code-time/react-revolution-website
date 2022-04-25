import React from 'react';
import FixedSidebar from './FixedSidebar';

const _FixedSidebar = (opener: any, data: any, direction: string = 'right', display: number = -1) => {
    return (
        <FixedSidebar
            opener={opener}
            data={data}
            direction={direction}
            display={display}
        />
    );
};

export default _FixedSidebar;
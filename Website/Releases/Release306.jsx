import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release306 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '3.0.6',
                        [
                            {
                                key: 'addGlobalMessage',
                                value: 'Added new argument "clearStack".'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release306;
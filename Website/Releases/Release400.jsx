import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release400 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '4.0.0',
                        [
                            {
                                key: 'Funtions',
                                value: 'Added Functions with default import type.'
                            },
                            {
                                key: 'addGlobalMessage',
                                value: 'Added new argument "persistCurrentMessage".'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release400;
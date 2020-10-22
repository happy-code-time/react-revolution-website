import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release302 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '3.0.2',
                        [
                            {
                                key: 'package.json',
                                value: 'Fixed wrong dependencies versions.'
                            }
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release302;
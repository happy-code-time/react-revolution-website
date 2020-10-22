import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release303 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '3.0.3',
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

export default Release303;
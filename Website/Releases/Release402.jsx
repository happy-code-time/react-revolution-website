import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release402 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '4.0.2',
                        [
                            {
                                key: 'MenuHeight',
                                value: 'New component.'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release402;
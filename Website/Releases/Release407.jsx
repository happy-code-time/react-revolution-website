import React from 'react';
import generateRelease from '../Functions/generateRelease';

class Release407 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '4.0.7',
                        [
                            {
                                key: 'Container',
                                value: 'Added support for "url change detection".'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release407;
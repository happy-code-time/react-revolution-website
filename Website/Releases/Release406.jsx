import React from 'react';
import generateRelease from '../Functions/generateRelease';

class Release406 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '4.0.6',
                        [
                            {
                                key: 'Container',
                                value: 'Added new key "headerDataRight".'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release406;
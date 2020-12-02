import React from 'react';
import generateRelease from '../Functions/generateRelease';

class Release405 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '4.0.5',
                        [
                            {
                                key: 'Sidebar',
                                value: 'Added JSX support for the keys "textLong" and "textShort".'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release405;
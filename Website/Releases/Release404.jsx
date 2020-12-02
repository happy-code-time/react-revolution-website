import React from 'react';
import generateRelease from '../Functions/generateRelease';

class Release404 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '4.0.4',
                        [
                            {
                                key: 'Container',
                                value: 'Removed background color on css file for the Sidebar.'
                            },
                            {
                                key: 'Sidebar',
                                value: 'Added support for the key "addClass".'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release404;
import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release401 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '4.0.1',
                        [
                            {
                                key: 'Menu',
                                value: 'Apply new menu data based on the getDerivedStateFromProps check.'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release401;
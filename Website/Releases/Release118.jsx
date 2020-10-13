import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release118 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '1.1.8',
                        [
                            {
                                key: 'ReadMore',
                                value: 'New component.'
                            },
                            {
                                key: 'ReadMoreCallback',
                                value: 'New component.'
                            }
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release118;
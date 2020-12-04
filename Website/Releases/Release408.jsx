import React from 'react';
import generateRelease from '../Functions/generateRelease';

class Release408 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '4.0.8',
                        [
                            {
                                key: 'Astronaut404',
                                value: 'New component.'
                            },
                            {
                                key: 'Picture404',
                                value: 'New component.'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release408;
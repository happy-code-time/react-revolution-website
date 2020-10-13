import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release117 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '1.1.7',
                        [
                            {
                                key: 'Articles',
                                value: 'New component.'
                            },
                            {
                                key: 'ArticlesImages',
                                value: 'New component.'
                            }
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release117;

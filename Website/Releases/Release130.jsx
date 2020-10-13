import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release121 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '1.3.0',
                        [
                            {
                                key: 'Timeline',
                                value: 'New component.'
                            },
                            {
                                key: 'DarkLines404',
                                value: 'New component.'
                            },
                            {
                                key: 'Clipboard',
                                value: 'Bugfix of the callback function.'
                            },
                            {
                                key: 'Clipboard',
                                value: 'Added new key "callbackProps".'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release121;
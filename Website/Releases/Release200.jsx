import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release200 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '3.0.1',
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
                            {
                                key: 'Modules import',
                                value: 'Added functionality to import each single module from the library as: import <ModuleName> from "/react-revolution/public/<ModuleName>".'
                            },
                            {
                                key: 'Modules style',
                                value: 'Fixed bug to load style for each single module.'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release200;
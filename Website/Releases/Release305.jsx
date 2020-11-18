import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release305 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '3.0.5',
                        [
                            {
                                key: 'MenuClickHorizontal',
                                value: 'Renamed component from "MenuClickHorizontal" to "Menu".'
                            },
                            {
                                key: 'Menu',
                                value: 'Added new key "headData".'
                            },
                            {
                                key: 'Menu',
                                value: 'Added new key "activeClassName".'
                            },
                            {
                                key: 'Menu',
                                value: 'Added new key "toggledClassName".'
                            },
                            {
                                key: 'Menu',
                                value: 'Added new key "isActiveTree".'
                            },
                            {
                                key: 'Menu',
                                value: 'Added new key "forceClose".'
                            },
                            {
                                key: 'Menu',
                                value: 'Added new key "forceCloseAll".'
                            },
                            {
                                key: 'Menu',
                                value: 'Added new key "align".'
                            },
                            {
                                key: 'Menu',
                                value: 'Added new key "alignIcon".'
                            },
                            {
                                key: 'Container',
                                value: 'Added new key "align".'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release305;
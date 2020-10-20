import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release300 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '3.0.0',
                        [
                            {
                                key: 'DragDropArea',
                                value: 'New component.'
                            },
                            {
                                key: 'DragDropList',
                                value: 'New component.'
                            },
                            {
                                key: 'Modules import',
                                value: 'Added functionality to import each single module from the library as: import <ModuleName> from "/react-revolution/<ModuleName>".'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release300;
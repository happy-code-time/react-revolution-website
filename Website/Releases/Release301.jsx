import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release301 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '3.0.1',
                        [
                            {
                                key: 'DragDropArea',
                                value: 'Changed areas HTML structure.'
                            },
                            {
                                key: 'InputSuggestionArray',
                                value: 'Bugfix - applying new suggestions dynamically passed in state after custom callback function has been called.'
                            },
                            {
                                key: 'InputSuggestionObject',
                                value: 'Bugfix - applying new suggestions dynamically passed in state after custom callback function has been called.'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release301;
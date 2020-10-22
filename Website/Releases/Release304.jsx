import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release304 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '3.0.4',
                        [
                            {
                                key: 'Stars',
                                value: 'New component.'
                            },
                            {
                                key: 'InputSuggestionArray',
                                value: 'Added new key "loading" - to display an custom loading icon (data) while callback function are executed and waiting to resolve the Promise.'
                            },
                            {
                                key: 'InputSuggestionObject',
                                value: 'Added new key "loading" - to display an custom loading icon (data) while callback function are executed and waiting to resolve the Promise.'
                            },
                            {
                                key: 'CustomSuggestion',
                                value: 'Bugfix - applying new suggestions dynamically passed in state after custom callback function has been called.'
                            },
                            {
                                key: 'CustomSuggestion',
                                value: 'Added new key "loading" - to display an custom loading icon (data) while callback function are executed and waiting to resolve the Promise.'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release304;
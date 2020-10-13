import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release120 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '1.2.0',
                        [
                            {
                                key: 'LoadOnScroll',
                                value: 'Renamed key from "loadMoreLoadingIcon" to "loading".'
                            },
                            {
                                key: 'LoadOnScroll',
                                value: 'Added new key "callbackProps".'
                            },
                            {
                                key: 'LoadOnScroll',
                                value: 'Added Promise.reject() support.'
                            },
                            {
                                key: 'LoadOnScroll',
                                value: 'Added new key "persistReject".'
                            },
                            {
                                key: 'LoadOnScroll',
                                value: 'Added new key "onReject".'
                            },
                            {
                                key: 'LoadOnScroll',
                                value: 'Added new key "fireScrollEvent".'
                            },
                            {
                                key: 'LoadOnScroll',
                                value: 'Added new key "fireScrollBack".'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release120;
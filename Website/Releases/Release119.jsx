import React from 'react';

import generateRelease from '../Functions/generateRelease';

class Release119 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '1.1.9',
                        [
                            {
                                key: 'Modal',
                                value: 'New component.'
                            },
                            {
                                key: 'CardsScrollCallback',
                                value: 'Added Promise.reject() support.'
                            },
                            {
                                key: 'CardsScrollCallback',
                                value: 'Added new key "persistReject".'
                            },
                            {
                                key: 'CardsScrollCallback',
                                value: 'Added new key "onReject".'
                            },
                            {
                                key: 'Articles',
                                value: 'Added new keys "toggleForwards".'
                            },
                            {
                                key: 'Articles',
                                value: 'Added new keys "toggleBackwards".'
                            },
                            {
                                key: 'ArticlesImages',
                                value: 'Added new key "toggleForwards".'
                            },
                            {
                                key: 'ArticlesImages',
                                value: 'Added new key "toggleBackwards".'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release119;
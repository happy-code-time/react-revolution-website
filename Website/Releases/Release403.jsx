import React from 'react';
import generateRelease from '../Functions/generateRelease';

class Release403 extends React.Component 
{
    render() {
        return (
            <div className="Generator">
                {
                    generateRelease(
                        '4.0.3',
                        [
                            {
                                key: 'Container',
                                value: 'Removed keys "persistUserSelection", "clearPersistUserSelection", "minify", "autopilot".'
                            },
                            {
                                key: 'Container',
                                value: 'Renamed key from "minifyAt" to "minifyAt".'
                            },
                            {
                                key: 'Container',
                                value: 'Renamed key from "maxifyAt" to "maxifyAt".'
                            },
                            {
                                key: 'Container',
                                value: 'Added key "hideAt".'
                            },
                            {
                                key: 'Container',
                                value: 'Added key "minifySidebarOn".'
                            },
                        ]
                    )
                }
            </div>
        );
    }
}

export default Release403;
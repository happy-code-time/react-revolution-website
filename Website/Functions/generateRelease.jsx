import React from 'react';

import trans from '../Translations/trans';

import { Table } from '../../react-revolution/public/react-revolution';

const generateRelease = (version, data) => {
    return (
        <span>
            <h1 className="h1-example">
                {
                    `${trans('releaseNotes')} - ${version}`
                }
            </h1>
            <Table
                addClass='rr-table-releases'
                mediaBreak={1024}
                title={[trans('releaseNotesKey'), trans('releaseNotesDescription'),]}
                keysToRead={['key', 'value']}
                data={data}
            />
        </span>
    );
};

export default generateRelease;
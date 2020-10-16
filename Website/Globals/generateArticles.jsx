import React from 'react';

import { Articles } from '../../react-revolution/react-revolution';

import articlesSettings from '../Globals/articlesSettings';

const generateArticles = (title, dataToggle) => {
    return (
        <Articles
            addClass='rr-articles-production'
            animation={articlesSettings.animation}
            toggleOn={articlesSettings.toggleOn}
            itemsPerLine={1}
            data={
                [
                    {
                        border: articlesSettings.articleBorder,
                        title,
                        dataToggle
                    }
                ]
            }
        />
    );
};

export default generateArticles;
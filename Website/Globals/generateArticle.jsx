import React from 'react';

import { Article } from '../../react-revolution/react-revolution';

import articlesSettings from './articlesSettings';

const generateArticle = (title, dataToggle) => {
    return (
        <Article
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

export default generateArticle;
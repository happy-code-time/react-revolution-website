import React from 'react';
//@ts-ignore
import { Article } from '../../react-revolution/public/react-revolution';

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
import getTranslations from './index';

const translations = getTranslations();

const trans = (key = '') => {

    if(!key || undefined == translations[key]){
        return '';
    }

    return translations[key];
};

export default trans;
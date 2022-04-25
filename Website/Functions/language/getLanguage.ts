import possibleLanguages from './possibleLanguages';

const getLanguage = () => {
    let currentLanguage = localStorage.getItem('applanguage');
    
    if(null == currentLanguage || !possibleLanguages.includes(currentLanguage)){
        currentLanguage = 'en';
    }
    
    return currentLanguage.toLowerCase();
};

export default getLanguage;
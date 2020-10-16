const setLanguage = (language = 'en') => {

    switch(language){
        case 'Deutsch' :
        case 'de' : {
            language = 'de';
            break;
        }
        case 'English' :
        case 'en' : {
            language = 'en';
            break;
        }
        case 'Polski' :
        case 'pl' : {
            language = 'pl';
            break;
        }
        default: {
            language = 'en';
        }
    }

    if(localStorage.getItem('applanguage') !== language){
        localStorage.setItem('applanguage', language);
        return true;
    }

    return false;
}

export default setLanguage;
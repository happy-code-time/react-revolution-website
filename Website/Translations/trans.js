import EN from './index'

const trans = (key = '') => {

    if(!key || undefined == EN[key]){
        return '';
    }

    return EN[key];
};

export default trans;
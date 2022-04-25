import EN from './index'

export default (key = '') => {

    if(!key || undefined == EN[key]){
        return key;
    }

    return EN[key];
};
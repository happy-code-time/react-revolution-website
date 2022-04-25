const setDataLocalStorage = (key, data) => {

    if(typeof '8' !== typeof data){
        data = JSON.stringify(data);
    }
    
    localStorage.setItem(key, data);
};

export default setDataLocalStorage;
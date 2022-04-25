const getDataLocalStorage = (key) => {
    let data = localStorage.getItem(key);

    if(null === data){
        return null;
    }

    if(typeof '8' !== typeof data){
        data = JSON.parse(data);
    }

    return data;
};

export default getDataLocalStorage;
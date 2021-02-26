const copyObject = (object, ignoreKeys = []) => {
    const newObject = {};

    if(typeof {} !== typeof object || !object){
        return newObject;
    }

    let keys = [];

    try{
        keys = Object.keys(object);
    }
    catch(e){
        return newObject;
    }

    if(!ignoreKeys || typeof [] !== typeof ignoreKeys){
        ignoreKeys = [];
    }

    for(let x = 0; x <= keys.length-1; x++){

        if(!ignoreKeys.includes(keys[x])){
            newObject[keys[x]] = object[keys[x]];
        }
    }

    return newObject;
};

export default copyObject;
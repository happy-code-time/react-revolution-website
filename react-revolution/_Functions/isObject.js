const isObject = (object) => {
    let isObject = true;

    if(!object){
        isObject = false;
    }
    
    if(typeof {} !== typeof object){
        isObject = false;
    }

    let keys = [];

    try{
        keys = Object.keys(object);
    }
    catch(e){
        isObject = false;
    }

    return isObject;
}

export default isObject;
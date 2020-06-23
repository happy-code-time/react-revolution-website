const addGlobalMessage = (messageKey = '', errorMessage = '', errorCode, disappear = undefined) => {
    const message = { errorMessage, errorCode, disappear };

    if(messageKey){
        let currentMessages = sessionStorage.getItem(messageKey);

        try{
            if(null !== currentMessages){
                currentMessages = JSON.parse(currentMessages);
                currentMessages.push(message);
                sessionStorage.setItem(messageKey, JSON.stringify(currentMessages));
            }
            else{
                sessionStorage.setItem(messageKey, JSON.stringify([message]));
            }
        }
        catch(e){
            console.log(e);
            sessionStorage.setItem(messageKey, JSON.stringify([message]));
        }
    }
};

export default addGlobalMessage;

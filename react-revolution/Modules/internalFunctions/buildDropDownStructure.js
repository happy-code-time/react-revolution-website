import uuid from './uuid';

const buildDropDownStructure = (data = []) => {
    if(data && data.length){
        
        for(let x = 0; x <= data.length-1; x++){
            
            if(undefined == data[x].toggled){
                data[x].toggled = false;
            }

            if(undefined == data[x].uuid){
                data[x].unique = `${uuid()}`;
            }

            if(undefined == data[x].uuid){
                data[x].iconId = `${uuid()}`;
            }

            if(undefined == data[x].classList){
                data[x].classList = '';
            }

            if(data[x].data && typeof [] == typeof data[x].data && data[x].data.length){
                buildDropDownStructure(data[x].data);
            }
        }
    }

    return data;
};

export default buildDropDownStructure;
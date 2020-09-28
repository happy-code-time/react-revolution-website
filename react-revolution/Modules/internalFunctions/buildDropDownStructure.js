import uuid from './uuid';

const buildDropDownStructure = (data = [], parent = undefined) => {

    if(data && data.length){

        for(let x = 0; x <= data.length-1; x++){

            if(undefined == data[x].toggled){
                data[x].toggled = false;
            }

            if(undefined == data[x].uuid){
                data[x].unique = `${uuid()}${uuid()}${uuid()}`;
            }

            if(undefined == data[x].key){
                data[x].key = `single-entry-${x}${data[x].text ? data[x].text : ''}`;
            }

            if(undefined == data[x].uuid){
                data[x].iconId = `${uuid()}`;
            }

            if(undefined == data[x].classList){
                data[x].classList = '';
            }

            if(undefined == data[x].loopCount){
                data[x].loopCount = 1;
            }

            if(parent && data[x].data && typeof [] == typeof data[x].data && data[x].data.length){
                data[x].childrensNestedCount = parent.childrensNestedCount+1;
            }

            if(!parent){
                data[x].childrensNestedCount = 1;
            }

            if(data[x].data && typeof [] == typeof data[x].data && data[x].data.length){
                buildDropDownStructure(data[x].data, data[x]);
            }
        }
    }

    return data;
};

export default buildDropDownStructure;
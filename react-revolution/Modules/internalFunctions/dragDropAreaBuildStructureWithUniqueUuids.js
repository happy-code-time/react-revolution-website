import uuid from './uuid';

const dragDropAreaBuildStructureWithUniqueUuids = (data) => {
    let objectKeys = [];

    try {
        objectKeys = Object.keys(data);
    }
    catch (e) {
        objectKeys = [];
    }

    if (objectKeys && objectKeys.length) {

        for (let x = 0; x < objectKeys.length; x++) {

            /**
             * Target element to drop or reaasing an element
             */
            if(undefined == data[objectKeys[x]].targetsKey){
                data[objectKeys[x]].targetsKey = `target-${uuid()}-element-${uuid()}`;
            }

            /**
             * Unique identifier for a single element to: 
             * - remove it from the parent 
             * - attach to an other/ new parent
             * - reassign sort
             */
            if (data[objectKeys[x]] && data[objectKeys[x]].data && typeof [] == typeof data[objectKeys[x]].data) {

                data[objectKeys[x]].data.map((object, index) => {

                    if (undefined == data[objectKeys[x]].data[index].uuid) {
                        data[objectKeys[x]].data[index].uuid = `drag-${uuid()}-drop-${uuid()}`;
                    }

                });

            }
        }

        return data;
    }
};

export default dragDropAreaBuildStructureWithUniqueUuids;
import trans from "../Translations/trans";

const buildTableKeysStructure = (keys, defaultClass) => {
    const structure = [];

    keys.map( object => {
        const { key, values } = object;

        if(key == 'defaultClass' && defaultClass)
        {
            structure.push(
                {
                    key,
                    value: trans('defaultClass').description,
                    type: trans('defaultClass').type,
                    default: defaultClass
                }
            )
        }
        else
        {
            structure.push(
                {
                    key,
                    value: trans(values).description,
                    type: trans(values).type,
                    default: trans(values).default
                }
            )
        }
    });

    return structure;
};

export default buildTableKeysStructure;
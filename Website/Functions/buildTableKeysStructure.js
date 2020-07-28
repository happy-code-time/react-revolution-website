import trans from "../Translations/trans";

const buildTableKeysStructure = (keys, defaultClass) => {
    const structure = [];

    keys.map( object => {
        const { key, values } = object;

        structure.push(
            {
                key,
                value: trans(values).description,
                type: trans(values).type,
                default: key == 'class' ? defaultClass : trans(values).default
            }
        )
    });

    return structure;
};

export default buildTableKeysStructure;
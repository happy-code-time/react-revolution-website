import { version, host } from "../../_Globals";

const loadStyle = (moduleStyle, globalStyle, defaultClass) => {
    const moduleHref = `${host}/public/react-revolution/${version}/css/${defaultClass}.css`;
    const globalHref = `${host}/public/react-revolution/${version}/css/react-revolution.css`;
    const tagLink = document.createElement('link');
    tagLink.setAttribute("rel", "stylesheet");
    tagLink.setAttribute("type", "text/css");

    const prepend = () => {
        document.getElementsByTagName("head")[0].prepend(tagLink);
    }

    /**
     * Load css for single module
     */
    if(moduleStyle){
        const uuid = `react-revolution-${defaultClass}`;

        if(null == document.getElementById(uuid)){
            tagLink.setAttribute("id", uuid);
            tagLink.setAttribute('href', moduleHref);
            prepend();
        }
    }

    /**
     * Load global css for all modules
     */
    if(globalStyle){
        const uuid = `react-revolution-react-revolution`;

        if(null == document.getElementById(uuid)){
            tagLink.setAttribute("id", uuid);
            tagLink.setAttribute('href', globalHref);
            prepend();
        }
    }
};

export default loadStyle;
import { version, host } from "../../Globals";

const allowedStyles = [
    'rr-accordion',
    'rr-cards',
    'rr-cards-scroll',
    'rr-cards-scroll-callback',
    'rr-custom-suggestion',
    'rr-fullscreenlist',
    'rr-full-screen-overlay',
    'rr-global-messages',
    'rr-icons',
    'rr-input-animation',
    'rr-input-file',
    'rr-input-file-drag-drop',
    'rr-input-suggestion-array',
    'rr-input-suggestion-object',
    'rr-loading-box-top',
    'rr-load-on-scroll',
    'rr-menu-click-horizontal',
    'rr-pager-static',
    'rr-popupbox',
    'rr-sidebar',
    'rr-sourcecode',
    'rr-table',
    'rr-text-writer',
    // 404
    'rr-clouds-404',
    'rr-clouds-mountains-404',
    'rr-water-404',
    'rr-lightbulb-404'
];

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
    if(moduleStyle && allowedStyles.includes(defaultClass)){
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
    if(globalStyle && allowedStyles.includes(defaultClass)){
        const uuid = `react-revolution-react-revolution`;

        if(null == document.getElementById(uuid)){
            tagLink.setAttribute("id", uuid);
            tagLink.setAttribute('href', globalHref);
            prepend();
        }
    }
};

export default loadStyle;
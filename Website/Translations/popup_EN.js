import getAllAvailableModulesNames from '../Functions/getAllAvailableModulesNames';

const len = getAllAvailableModulesNames().length-1;

const EN = {
    functions: 'Functions',
    components: 'Components',
    description_uuid: 'The uuid function returns always an unique string based on a random number and the current timestamp.',
    description_disableHtmlScroll: 'The HTML tag will have the attributes: class = "overflow-hidden" and style = "overflow: hidden;" so that a user is not allowed to scroll which of the website.',
    description_enableHtmlScroll: 'The class "overflow-hidden" and the style: "overflow: hidden;" are removed from the HTML tag. The user again has the option to scroll within the website.',
    description_scrollTopListener: "Scroll to the top of the current page on each location (window.location) change. Initial the function has to be called (best way is to call the function on componentDidMount) to initialise the location change listener. This function take 3 additional arguments. Argment 1: time (in miliseconds) to scroll to top of the page, argument 2: scroll behavior - 'auto','smooth','inherit','initial','unset', argument 3: remove the listener (boolean). To remove the listener pass to the 3 argument the value true (default the value is set to false).",
    description_urlExtract: 'Extracts the URL on individual paths of the window.location, key and its values. The function receives 1 optional argument: isHashRouter (boolean) - by default the transferred value is undefined. This function extracts paths and key values for the window.location: "href", "hash" and "path".',
    is: 'is',
    iconTokenFrom: 'Icon token from',
    openSourceText: 'A Free Open Source Project',
    changeLanguageTitle: 'Change language',
    changeTintTitle: 'Change layout',
    lightTheme: 'Light',
    darkTheme: 'Dark (coming soon)',
    searchForModule: 'Module search',
    clickToNavToTheModule: 'Navigate to this module',
    fast: 'Fast',
    light: 'Light',
    interactive: 'Interactive',
    "fast.description" : "Minimal generation time and optimal source usage of the browser.",
    "light.description" : `With the current number of ${len} Modules a total size of less than 190 KB.`,
    "interactive.description" : "Each module can be designed freely and contains callback functions.",
    exampleOfUsage: 'Usage example',
    copyToClipboard: 'Copy to clipboard',
    installation: 'Installation',
    documentation: 'Documentation',
    modules: 'Modules',
    getStarted: 'Get started',
    installation: 'Installation',
    feedback: 'Feedback',
    usefullLinks: 'Useful Links',
    rights: 'Rights',
    rigthsText: 'All rights reserved',
    author: 'Author',
    exampleTitle: 'Live example',
    reactCodeTitle: 'Above modules react code',
    reactFunctionTitle: 'Above functions react code',
    cssCodeTitle: 'Additional css',
    jsCodeTitle: 'Additional javascript',
    loading: 'Loading...',
    keyUsageTitle: 'Keys Explanations',
    "table.title.key" : 'Key',
    "table.title.description" : 'Description',
    "table.title.type" : 'Type',
    "table.title.default" : 'Default',
    /**
     * Module keys
     */
    "id": {
        "description": 'Set an id for the root element of this module.',
        "type": 'String',
        "default": '<empty string>'
    },
    "class": {
        "description": 'Replace the main class with your own. If this is used, the standard styles that the module brings with it no longer apply.',
        "type": 'String',
        "default": ''
    },
    "addClass": {
        "description": 'Set an additional class for the root element of this module.',
        "type": 'String',
        "default": '<empty string>'
    },
    "inputanimation.callback": {
        "description": "Custom defined Function are called each time the input has changed. This function returns 1 argument - the current value of the input field.",
        "type": "Function",
        "default": "undefined"
    },
    "accordion.animation": {
        "description": "An animation when opening and closing the accordion. Animations that can be used: 'height', 'scale', 'opacity'.",
        "type": "String",
        "default": "undefined"
    },
    "accordion.data": {
        "description": "Main data - Array of Objects.",
        "type": "array",
        "default": "[]"
    },
    'accordion.data.href': {
        "description": "An <a> or <Link> Tag aroung the text entry to navigate the user on your app.",
        "type": "String",
        "default": "undefined"
    },
    'accordion.data.icon': {
        "description": "Custom JSX data placed on the left side of the text entry.",
        "type": "JSX | String",
        "default": "undefined"
    },
    'accordion.data.text': {
        "description": "The text to be displayed before a child element is expanded.",
        "type": "String",
        "default": "<empty string>"
    },
    'accordion.data.dataToggle': {
        "description": "The content of an element to be displayed after the parent element has been expanded.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'accordion.data.toggled': {
        "description": "If the element is toggled or not.",
        "type": "Boolean",
        "default": "False"
    },
    "props": {
        "description": "The HTML properties of the HTML element.",
        "type": "Object",
        "default": "{}"
    },
    "itemsPerLine": {
        "description": "How many items should be displayed in a row.",
        "type": "Number",
        "default": "3"
    },
    "mediaBreak": {
        "description": "If this value is given, the module becomes interactive. By default, the parent element is rendered with the class: 'flex-row'. When the media break point is reached, the parent element is rendered new with the class : flex-column. ",
        "type": "Number",
        "default": "undefined"
    },
    "defaultItems": {
        "description": "How many items should be shown when loading first time.",
        "type": "Number",
        "default": "3"
    },
    "data": {
        "description": "Main data - Array of Objects.",
        "type": "array",
        "default": "[]"
    },
    "cards.data": {
        "description": "Main data - Array of Objects.",
        "type": "array",
        "default": "[]"
    },
    "cards.data.title": {
        "description": "Custom cards header data.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "cards.data.content": {
        "description": "Custom cards content data.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "cards.data.footer": {
        "description": "Custom cards footer data.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "loadonscroll.data" : {
        "description": "Custom data to render on the first time.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "minify": {
        "description": "When the user scrolls down, data is loaded. Loading the data can be speeded up by adding a PIXEL value here.",
        "type": "Number",
        "default": "0"
    },
    "loadMoreCallback": {
        "description": "If the root element has been scrolled all the way down, data can be reloaded. If the callback returns 'break', the scroll event is removed from the root element.",
        "type": "Function",
        "default": "undefined"
    },
    "loadMoreLoadingIcon": {
        "description": "While additional elements are being loaded, a self-defined JSX element can be rendered.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "customsuggestion.callback": {
        "description": "After a change in the input field, this function is called with 1 parameter: Value of the input field. The callback must return a list and objects. The structure is described in the 'suggestions' key.",
        "type": "Function",
        "default": "undefined"
    },
    "customsuggestion.suggestions": {
        "description": "list of objects",
        "type": "array",
        "default": "undefined"
    },
    "customsuggestion.suggestions.href": {
        "description": "The custom suggestion is wrapped with an A tag so the user can follow a suggestion directly.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.jsx": {
        "description": "Custom HTML the end user sees.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.props": {
        "description": "The HTML properties of the HTML element.",
        "type": "Object",
        "default": "{}"
    },
    "customsuggestion.suggestions.onClickValue": {
        "description": "Value to be written in the input field when a click event takes place.",
        "type": "String",
        "default": "undefined"
    },
    "clipboard": {
        "description": "Data that should be saved in the cipboard. If this type of data is not a string, it is saved in the buffer with JSON.strigify.",
        "type": "String | Array | Object | Number",
        "default": "undefined"
    },
    "clipboard.data": {
        "description": "Custom JSX.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "clipboard.animation": {
        "description": "An animation when click event are fired on the custom 'data'. Animations that can be used: 'scale', 'jump'.",
        "type": "String",
        "default": "undefined"
    },
    "plainValue": {
        "description": "The value of the input field.",
        "type": "String",
        "default": "<empty string>"
    },
    "inputsuggestionarray.callbackSelection": {
        "description": "User-defined function for which an element was selected. This function provides 1 argument. Argument 1: List of the selected elements (clicked element).",
        "type": "Function",
        "default": "undefined"
    },
    "inputsuggestionobject.callbackSelection": {
        "description": "User-defined function for which an element was selected. This function provides 1 argument. Argument 1: List of the selected elements (clicked element).",
        "type": "Function",
        "default": "undefined"
    },
    "inputPlaceholder": {
        "description": "Inputs placeholder.",
        "type": "String",
        "default": "<empty string>"
    },
    "inputType": {
        "description": "Type of an Inptu field.",
        "type": "String",
        "default": "text"
    },
    "callbackRerender": {
        "description": "If true, the module only listens to the transferred state and state changes. If false, the module expects data from the callback to be processed further.",
        "type": "Boolean",
        "default": "False"
    },
    "allowOnlyAZ": {
        "description": "If true, the following regex is applied to the value of the input field: (/ [^ a-zA-Z] / gmi).",
        "type": "Boolean",
        "default": "False"
    },
    "display": {
        "description": "Should the element be displayed or not?",
        "type": "Boolean",
        "default": "False"
    },
    "lineNumber": {
        "description": "Allow rendering, on the left side, each line number.",
        "type": "Boolean",
        "default": "False"
    },
    "iconClose": {
        "description": "User defined HTML with the action to 'close' the module.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "inputActive": {
        "description": "Render an input field.",
        "type": "Boolean",
        "default": "False"
    },
    "noDataText": {
        "description": "If no elements were found, this text will be displayed.",
        "type": "String",
        "default": "<empty string>"
    },
    "callbackClose": {
        "description": "User-defined function that is called without arguments after the item is closed.",
        "type": "Function",
        "default": "undefined"
    },
    "closeOnCallback": {
        "description": "If an element is selected from the list, the module should also be closed or the display of the module should be kept.",
        "type": "Boolean",
        "default": "False"
    },
    "listarray.callback": {
        "description": "User defined callback function are fired if the user click on an list element. The function returns 2 arguments. Argument 1: click event, Argument 2: clicked entry.",
        "type": "Function",
        "default": "undefined"
    },
    "listarray.data": {
        "description": "Array of Strings (values) to display.",
        "type": "Array",
        "default": "[]"
    },
    "listobject.data": {
        "description": "Array of Objects.",
        "type": "Array",
        "default": "[]"
    },
    "listobject.data.text": {
        "description": "Main string to display.",
        "type": "String",
        "default": "undefined"
    },
    "closeOnDimmedClick": {
        "description": "If you click on the 'dark' HTML which is outside the content area, the module will no longer be displayed.",
        "type": "Boolean",
        "default": "False"
    },
    "closeOnEsc": {
        "description": "When you press the 'Escape' key, the module should continue to be displayed or the display should be interrupted.",
        "type": "Boolean",
        "default": "False"
    },
    "inputEmptyOnCallback": {
        "description": "After an element has been selected from the list, the input field should be taught or the value of the input field should remain unchanged.",
        "type": "Boolean",
        "default": "False"
    },
    "closeOnClick": {
        "description": "If the darkened HTML area is clicked, the module will no longer be displayed.",
        "type": "Boolean",
        "default": "True"
    },
    "fullscreenOverlay.animation": {
        "description": "An animation during the rendering of the module. Animations that can be used: 'scale', 'left', 'top', 'right', 'bottom'.",
        "type": "String",
        "default": "<empty string>"
    },
    "popupbox.data": {
        "description": "Custom JSX data inside the toggled box.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "popupbox.animation": {
        "description": "An animation during the rendering of the module. Animations that can be used: 'top-left', 'top-right', 'bottom-left', 'bottom-right'.",
        "type": "String",
        "default": "top-left"
    },
    "fullscreenoverlay.dimmed": {
        "description": "Should the lightly darkened area be displayed or not.",
        "type": "Boolean",
        "default": "False"
    },   
    "fullscreenoverlay.data": {
        "description": "Custom JSX data to display inside the overlay.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "disableScroll": {
        "description": "While displaying the module, the HTML element (tag) should be scrollable or not.",
        "type": "Boolean",
        "default": "False"
    },
    "messageKey": {
        "description": "A unique string.",
        "type": "String",
        "default": "<empty string>"
    },
    "codeMapping": {
        "description": "Object",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.title": {
        "description": "Title of the message",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.displayErrorCode": {
        "description": "Should the code of the transmitted message also be displayed or not?",
        "type": "Boolean",
        "default": "undefined"
    },
    "codeMapping.text": {
        "description": "Object - Text to be displayed as a message.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.text.prefix": {
        "description": "Prefix text before the actual mediation.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.text.suffix": {
        "description": "Suffix - Text after the actual mediation.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.text.props": {
        "description": "The HTML properties of the HTML element.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.close": {
        "description": "Object text to close the message box.",
        "type": "Object",
        "default": "undefined"
    },
    "codeMapping.close.text": {
        "description": "Text for closing to be displayed. A 'click close event' is attached to this text.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.close.props": {
        "description": "The HTML properties of the HTML element.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.link": {
        "description": "Object - External Link.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.link.text": {
        "description": "The text to display.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.link.useTagLink": {
        "description": "Should the <Link> tag be used if the module moves within a route or a <a> tag by default.",
        "type": "Boolean",
        "default": "False"
    },
    "codeMapping.link.href": {
        "description": "The attribute 'to' in the <Link> tag or 'href' in the <a> tag.",
        "type": "Object",
        "default": "{}"
    },
    "timer": {
        "description": "Interval to display error messages.",
        "type": "Number",
        "default": "2500"
    },
    "iconsType": {
        "description": "Standard clicked icons set when rendering the module for the first time.",
        "type": "String",
        "default": "smileys"
    },
    "displayTabs": {
        "description": "Should the headings of all icon sets to be displayed be shown or hidden.",
        "type": "Boolean",
        "default": "True"
    },
    "renderItems": {
        "description": "Which items should be shown by default.",
        "type": "array",
        "default": "'Smileys',' Peoples', 'Animals',' Plants', 'Nature', 'Food', 'Activity', 'Travel', 'Objects',' Symbols', 'Currency', ' Arrows', 'Html' "
    },
    "translations": {
        "description": "Translations for the respective headings of the icon sets.",
        "type": "Object",
        "default": "undefined"
    },
    "custom": {
        "description": "User defined icon sets as an array of objects.",
        "type": "array",
        "default": "undefined"
    },
    "custom.title": {
        "description": "Title of the icon set as a unique key.",
        "type": "String",
        "default": "undefined"
    },
    "custom.data": {
        "description": "Array of strings with custom icons.",
        "type": "array",
        "default": "undefined"
    },
    "defaultClassOrigin": {
        "description": "",
        "type": "String",
        "default": ""
    },
    "animatePlaceholder": {
        "description": "Placeholder (which is then also animated).",
        "type": "String",
        "default": "<empty string>"
    },
    "onEnter": {
        "description": "User-defined function when the user presses Enter within the input field. This function provides 1 argument: the current value of the input field.",
        "type": "Function",
        "default": "undefined"
    },
    "getValueFromCallback": {
        "description": "If false, the module only listens to the transferred state and state changes. If true, the module expects data from the callback to be processed further.",
        "type": "Boolean",
        "default": "False"
    },
    "allowedFileSize": {
        "description": "Maximum size of a file.",
        "type": "String",
        "default": "undefined"
    },
    "allowedFileSizeDescriptor": {
        "description": "Sizes vector: B, KB, MB, GB, TB or PT.",
        "type": "String",
        "default": "undefined"
    },
    "allowedFiles": {
        "description": "File types that are allowed.",
        "type": "String",
        "default": "undefined"
    },
    "label": {
        "description": "The JSX to be displayed within a <label> tag",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "readFileCallback": {
        "description": "User-defined function to process a file. Two arguments are passed: Argument 1: The file, Argument 2: The file type.",
        "type": "Function",
        "default": "undefined"
    },
    "errorCallback": {
        "description": "User-defined callback during file handling error. It passes 2 arguments. Argument 1: Error type (unsupported_filetype, maximum_filesize_reached, unrecognized_filetype, empty_filecontent, empty_filename), Argumnt 2: 'errorCallbackCustomData'",
        "type": "Function",
        "default": "undefined"
    },
    "errorCallbackCustomData": {
        "description": "User-defined value for the 2 argument of the function: 'errorCallback'.",
        "type": "String | Array | Object | Number",
        "default": "undefined"
    },
    "multiple": {
        "description": "Allow multiple files at once.",
        "type": "Boolean",
        "default": "False"
    },
    "isDraggingData": {
        "description": "If a user is currently in the 'dragging' status, a user-defined JSX can be displayed.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "uploadOnClick": {
        "description": "Allow files to be processed when the user clicks on the 'drag and drop' area.",
        "type": "Boolean",
        "default": "False"
    },
    "selected": {
        "description": "An array of selected items from the list.",
        "type": "array",
        "default": "[]"
    },
    "suggestionsToFilter": {
        "description": "An array of elements (strings) that will then appear for the user to choose from.",
        "type": "array",
        "default": "[]"
    },
    "emptySuggestionAfterSelection": {
        "description": "Teach the suggestions after the user clicks on an item.",
        "type": "Boolen",
        "default": "True"
    },
    "sortSelected": {
        "description": "Should the selected elements be sorted alphabetically. Allowed sorting options: 'asc', 'desc'.",
        "type": "String",
        "default": "undefined"
    },
    "sortSuggestions": {
        "description": "Shall the elements to be displayed be sorted alphabetically. Allowed sorting options: 'asc', 'desc'.",
        "type": "String",
        "default": "undefined"
    },
    "text": {
        "description": "The text to display.",
        "type": "String",
        "default": "<empty string>"
    },
    "scrollReference": {
        "description": "If true, the root element of the module is used as a reference, otherwise the HTML document Elment.",
        "type": "Boolean",
        "default": "True"
    },
    "reactRouter": {
        "description": "If true - (then the module moves within a Rect Router) a <Link> tag is rendered, if false a <a> tag is rendered.",
        "type": "Boolean",
        "default": "False"
    },
    "icon": {
        "description": "Custom JSX to close the module.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "iconCallback": {
        "description": "Custom callback when the 'icon' is clicked.",
        "type": "Function",
        "default": "undefined"
    },
    "animationTime": {
        "description": "Time of animation in ms.",
        "type": "Number",
        "default": "300"
    },
    "image": {
        "description": "JSX of the image / icon.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "moduleMenu": {
        "description": "The embedded 'MenuClickHorizontal' module.",
        "type": "JSX",
        "default": "undefined"
    },
    "textLong": {
        "description": "Long text as a heading next to the photo.",
        "type": "String",
        "default": "undefined"
    },
    "textShort": {
        "description": "Short text under the heading and also next to the photo.",
        "type": "String",
        "default": "undefined"
    },
    "href": {
        "description": "If href is set, a <a> is stretched around the photo and the text.",
        "type": "String",
        "default": "undefined"
    },
    "hrefProps": {
        "description": "The HTML properties of the <a> tag.",
        "type": "Object",
        "default": "{}"
    },
    "title": {
        "description": "Array of strings - table heading.",
        "type": "Array",
        "default": "undefined"
    },
    "writer.text": {
        "description": "Text to be written.",
        "type": "String",
        "default": "<empty string>"
    },
    "speed": {
        "description": "Speed ​​of the text writer in ms.",
        "type": "Number",
        "default": "300"
    },
    "pipeDisplay": {
        "description": "Display the pipe while writing.",
        "type": "Boolen",
        "default": "True"
    },
    "pipeChar": {
        "description": "Charachter of the pipe",
        "type": "String | JSX",
        "default": "|"
    },
    "pipeSite": {
        "description": "Display pipe on the site: 'left', 'right'",
        "type": "String",
        "default": "right"
    },
    "pipePersist": {
        "description": "Persist the pipe after the text was written.",
        "type": "Boolean",
        "default": "False"
    },
    "replaces": {
        "description": "Object - Replace Text after, the text was written.",
        "type": "Object",
        "default": "undefined"
    },
    "replaces.from": {
        "description": "Start replacement on this char.",
        "type": "Number",
        "default": "undefined"
    },
    "replaces.to": {
        "description": "End replacement on this char.",
        "type": "Number",
        "default": "undefined"
    },
    "replaces.replace": {
        "description": "Text to write as replacement.",
        "type": "String",
        "default": "undefined"
    },
    "writer.timeout": {
        "description": "Start writing text after this time in ms.",
        "type": "Number",
        "default": "0"
    },
    "table.data": {
        "description": "Array of objects.",
        "type": "array",
        "default": "undefined"
    },
    "table.keysToRead": {
        "description": "Array of strings - which keys should be read from the object.",
        "type": "array",
        "default": "undefined"
    },
    "table.titleOnMinified": {
        "description": "Render the table title of the table are minified.",
        "type": "Boolean",
        "default": "True"
    },
    "bread.hashRouter" : {
        "description": "Is the current React App inside an ReactRouter or not. If true the hostname (first breadcrumbs) becomes the suffix '/#/'.",
        "type": "Boolean",
        "default": "False"
    },
    "bread.domainName" : {
        "description": "Replace the hostname (first breadcrumb) with a customized text",
        "type": "String",
        "default": "undefined"
    },
    "bread.delimiter" : {
        "description": "Delimiter between the breadrumbs.",
        "type": "String | JSX",
        "default": ">"
    },
    "bread.overwriteText" : {
        "description": "Has to be used with the key: 'moduleMenu'. If true then the first menu childs key: 'text' are displayed instead of the breadcrumbs path. If false then the menus first childs key: 'text' are ignored.",
        "type": "Boolean",
        "default": "false"
    },
    "bread.moduleMenu" : {
        "description": "Attached the module: 'MenuClickHorizontal' only available for the last breadcrumb. Only one single child allowed as parent element - child nesting allowed without limitations.",
        "type": "<MenuClickHorizontal>",
        "default": "undefined"
    },
    "closeOnClickOutside": {
        "description": "If true and the user does not click inside the module content, then all expanded elements will be toggled back - closed.",
        "type": "Boolean",
        "default": "false"
    },
    /**
     * Descriptions
     */
    "accordion.description" : "The Accordion module has no limits in child nesting.",
    "accordion.description2" : "Example with click handler (outside the module) provided by the key: 'closeOnClickOutside' setted to true (all childs closed recursively).",
    "cards.scroll.description" : "The Cards module will load more items, if the bottom of the parent div are reached.",
    "cards.scrollCallback.description" : "The Cards module will load more items, if the bottom of the parent div are reached. Load more cards are base on the custom provided callback function. If the value is 'break', then the scroll listener are removed.",
    "icons.description" : "Icons module with all icons set, NO translations and default selected icons set: Smileys. After the click event, look into the console for an icon.",
    "icons.description2" : "Icons module with selected icons set: Smileys, Activity, Travel, Peoples, Objects, NO translations yet and default selected icons set: Activity. After the click event, look into the console for an icon.",
    "icons.description3" : "Icons module with selected icons set: Smileys, Activity, Travel, Peoples, Objects and 2 translated icons titles. After the click event, look into the console for an icon.",
    /**
     * 
     */
    globalStyle: {
        "description": "Load the global style file (react-revolution.css). If they have already been loaded, they will not be loaded twice.",
        "type": "Boolean",
        "default": "False"
    },
    moduleStyle: {
        "description": "Load single modules style file - if the file currently not available.",
        "type": "Boolean",
        "default": "False"
    },
    styleLoading: "Styles used for this module",
    "runtime.generator.description": 'If an error occured (runtime generator are not defined) while using the callback functionality in this module (callback), please install: npm install --save @babel/runtime && npm install --save-dev @babel/plugin-transform-runtime; Then in the .babelrc file add this line: {"presets": ["@babel/preset-env", "@babel/preset-react"],"plugins": [["@babel/transform-runtime"]]}.',
    
    "pagination.data": {
        "description": "Array of custom defined objects.",
        "type": "Array",
        "default": "[]"
    },
    "pagination.searchOnKeys": {
        "description": "Array of strings. Array of (provided objects inside the 'data' key) key names to use the search (input) field.",
        "type": "Array",
        "default": "[]"
    },
    "pagination.itemsPerSite": {
        "description": "How many sites to render on each page.",
        "type": "Number",
        "default": "10"
    },
    "pagination.keysToRender": {
        "description": "Array of strings. Array of key names Which should be displayed based on the Array of objects (key: 'data').",
        "type": "Array",
        "default": "[]"
    },
    "pagination.liCallback": {
        "description": "Custom callback function, if the user click an single line. This function returns 2 arguments. Argument 1: clickEvent, Argument 2: current klicked item as object.",
        "type": "Function",
        "default": "undefined"
    },
    "pagination.inputCallback": {
        "description": "Custom callback function, if the user change the value of the input field. This function returns 1 arguments. Argument 1: event.",
        "type": "Function",
        "default": "undefined"
    },
    "pagination.lineNumber": {
        "description": "Display the current line number (loop index +1).",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.resetLineNumber": {
        "description": "Reset the number of each line for each page. Each item will be begin with the count: 1.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.displayTotal": {
        "description": "Display the total count of provided data.length.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.totalPrefix": {
        "description": "Display a prefix before the number of total data.length are displayed.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.totalSufix": {
        "description": "Display a suffix after the number of total data.length are displayed.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.paginationPages": {
        "description": "Display the pagination.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.paginationTextPrefix": {
        "description": "Text of 'Page'.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.paginationTextMiddle": {
        "description": "Text of 'of'.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.prevPages": {
        "description": "How many page should be displayed 'before' the current page (as previous pages).",
        "type": "Number",
        "default": "2"
    },
    "pagination.nextPages": {
        "description": "How many page should be displayed 'after' the current page (as next pages).",
        "type": "Number",
        "default": "2"
    },
    "pagination.totalPages": {
        "description": "Total number of pages available.",
        "type": "Number",
        "default": "0"
    },
    "pagination.globalCount": {
        "description": "Total number of items available.",
        "type": "Number",
        "default": "0"
    },
    "pagination.alignPagesItems": {
        "description": "Rendered items structure. Available options: 1, 2, 3, 4, 5.",
        "type": "Number",
        "default": "1"
    },
    "pagination.alignPagination": {
        "description": "Rendered pagination structure. Available options: 1, 2.",
        "type": "Number",
        "default": "1"
    },
    "pagination.previousButton": {
        "description": "HTML for the previous button.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "pagination.nextButton": {
        "description": "HTML for the next button.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "pagination.searchActive": {
        "description": "Render the search input field.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.searchPlaceholder": {
        "description": "Inputs inputPlaceholder.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.searchPlaceholder": {
        "description": "Placeholder.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.searchIcon": {
        "description": "The HTML of the search button on the right site of the search input field. If the user click the search icon, then a search are executed.",
        "type": "String | JSX",
        "default": "🔍"
    },
    "pagination.searchSensitive": {
        "description": "Execute a search as 'key sensitive search'.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.searchValue": {
        "description": "Redner for the 1 time an custom search value to execute a search without any user interaction.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.searchOnKeyDown": {
        "description": "Execute a search on the provided data if the user are changing the input value.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.searchTitle": {
        "description": "Tag <h1> as title for the search field.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.paginationTitle": {
        "description": "Tag <h1> as title for the table.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.paginationTitle": {
        "description": "Tag <h1> as title for the table.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.fallbackLoading": {
        "description": "Use an loading icon while the user are filtering data.",
        "type": "Boolean",
        "default": "False"
    },
    "pagination.fallbackLoadingTime": {
        "description": "Use an custom timeout to display the loading icon for longer ms (milliseconds).",
        "type": "Number",
        "default": "0"
    },
    "pagination.fallbackNoData": {
        "description": "Custom data to render if no data are provided.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "pagination.fallbackNoDataSearch": {
        "description": "Custom data to render if no data was found during the search.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "pagination.fallbackMounting": {
        "description": "Use an loading icon while the module (component) are generating data.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "removeHashFromDomain": {
        "description": "Remove the characters '/#/' from the domain name.",
        "type": "Boolean",
        "default": "False"
    },
    "globalMessage.empty": {
        "description": "If true, all messages are removed when the location is changed (window.location.href).",
        "type": "Boolean",
        "default": "True"
    },
    "breadcrumbs.example3": "Example with menu attached on the last breadcrumb entry.",
    "pager.dynamic.description": 'This is an example with a dynamic pager, so every time a page is changed, a database query is carried out. This function with the DB query returns a promise. It has to be a promise, because the module internally contains an "await", so the page change will only take place if the promise is resolved and data is delivered. ',
    "promise": {
        "description": "Generate each line of code as Promise for better performance while generation very long strings to the source code structure. If false, then the module generates the source code (jsx code) without a Promise.",
        "type": "Boolean",
        "default": "False"
    },
    "promiseLine": {
        "description": "Works only if the key 'promise' are set to true. Make a 'break' (timeout to resolve the current Promise) on the line number x - to stop the critical CPU usage if the passed string/ code longer then 10.000 lines of code.",
        "type": "Number",
        "default": "1000"
    },
    "promiseTime": {
        "description": "Works only if the key 'promise' are set to true. Time of the Timeout to resolve the current lines Promise used in combination with the key 'promiseLine'.",
        "type": "Number",
        "default": "500"
    },
    "matcher": {
        "description": "Array of objects.",
        "type": "Array",
        "default": "[]"
    },
    "matcher.words": {
        "description": "Array of strings/ words to match.",
        "type": "Array",
        "default": "[]"
    },
    "matcher.className": {
        "description": "Attach an class name to the matched word.",
        "type": "String",
        "default": "undefined"
    },
    "lineNumberNewLine": {
        "description": "Works only if the key 'lineNumber' are set to true. Render the line number for empty lines.",
        "type": "String",
        "default": "undefined"
    },
    "sourceCode": {
        "description": "Array of strings. Which logical functions should be called, for each line in the provided order, to match specific codes. The steps for each line of code are: 1 - tags: JSX (HTML) tags. 2 - properties: HTML properties like className. 3 - variables: words thats includes the equal (=) character. 4 - objectProperty: single property of an object if the colon character are provided. 5 - functions: match single functions. 6 - words: match custom provided words. 7 - quotes: match quotes (''', '\"'). 8 - bracktes: match brackets ( '(', '}', ']').",
        "type": "Array",
        "default": "[ 'tags', 'properties', 'variables', 'objectProperty', 'functions', 'words', 'quotes', 'brackets']"
    },
    "code": {
        "description": "Main string to generate the source code.",
        "type": "String",
        "default": "<empty string>"
    },
    "link.404": {
        "description": "Object for the back link functionality.",
        "type": "Object",
        "default": "{}"
    },
    "link.404.text": {
        "description": "Links text.",
        "type": "JSX | String",
        "default": "undefined"
    },
    "link.404.href": {
        "description": "Links destination.",
        "type": "String",
        "default": "undefined"
    },
    "link.404.props": {
        "description": "The HTML properties of the <a> tag.",
        "type": "Object",
        "default": "undefined"
    },
    "link.404.callback": {
        "description": "Callback function on click event. This function returns 1 argument. Argument 1: click event.",
        "type": "Object",
        "default": "undefined"
    },
    "text404": {
        "description": "Error code.",
        "type": "String",
        "default": "404"
    },
    "404.text1": {
        "description": "Custom (bigger) text.",
        "type": "String",
        "default": "requested page"
    },
    "404.text2": {
        "description": "Custom (smaller) text.",
        "type": "String",
        "default": "was not found"
    },
    "404.bad": {
        "description": "Is the module in bad mode.",
        "type": "Boolean",
        "default": "False"
    },
    "404.shipname": {
        "description": "Ships name.",
        "type": "JSX | String",
        "default": "<empty string>"
    },
    "scroll-to-desc-1": "Example with navigation to the start of the page within 1 second.",
    "scroll-to-desc-2": "Example with navigation to the first example within 300 milliseconds.",
    "navigationTime": {
        "description": "User-defined navigation time in milliseconds.",
        "type": "Number",
        "default": "300"
    },
    "navigationTarget": {
        "description": "Navigate on the page to this HTML element (selector). For a class, type in the first position . (period), if it is an ID, there must be a # (hash) in the first position. If the key 'html' are empty/undefined and the value is 'bottom' - then the module returns an scroll to bottom predefined html and scroll to bottom functionality, if the value is 'top'  - then the module retuns an scroll to top predefined html and scroll to top functionality.",
        "type": "JSX | String",
        "default": "<empty string>"
    },
    "html": {
        "description": "Custom HTML that is displayed if the key 'navigationTarget' does not have a . (period) or # (hash) in the first position.",
        "type": "JSX | String",
        "default": "<empty string>"
    },
    "persistUserSelection": {
        "description": "Save the current setting of the toggled sidebar. If the user refresh the page, then the sidebars previous state are used.",
        "type": "Boolean",
        "default": "undefined"
    },
    "clearPersistUserSelection": {
        "description": "Clear the saved sidebars previous state.",
        "type": "Boolean",
        "default": "undefined"
    },
    "sidebarMinifiedAt": {
        "description": "If the key 'autopilot' are true then minify the sidebar to the min width, if false then hide the sidebar - sidebar are toggled with the 'toggleMenuHtml' key.",
        "type": "Number",
        "default": "720"
    },
    "sidebarMaxifiedAt": {
        "description": "Maxify the previously minified sidebar to the main (base) width.",
        "type": "Number",
        "default": "1024"
    },
    "displayMinifyMaxifyIcon": {
        "description": "Render the sidebars toggling HTML - the JSX from the key 'toggleMenuHtml'.",
        "type": "Boolean",
        "default": "undefined"
    },
    "minify": {
        "description": "Is the sidebar (completely) minified.",
        "type": "Boolean",
        "default": "undefined"
    },
    "autopilot": {
        "description": "If true then the resize event listener are resizing the sidebar in 3 steps. If false then the resize event listener are resizing the sidebar in 2 steps.",
        "type": "Boolean",
        "default": "False"
    },
    "toggleMenuHtml": {
        "description": "Custom JSX used as toggling icon for the sidebar. This HTML are located inside the headers content.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "closeMenuHtml": {
        "description": "Custom JSX used as close icon on the sidebar if the documents width lower then the value passed to the module with the key 'sidebarMinifiedAt'.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "moduleSidebar": {
        "description": "The module 'MenuClickHorizontal'.",
        "type": "Module",
        "default": "undefined"
    },
    "headerData": {
        "description": "Custom JSX inside the headers area.",
        "type": "Module",
        "default": "<empty string>"
    },
    "headerProps": {
        "description": "Header div`s properties.",
        "type": "Object",
        "default": "{}"
    },
    "contentData": {
        "description": "Custom JSX inside the content area.",
        "type": "Module",
        "default": "<empty string>"
    },
    "contentProps": {
        "description": "Content div`s properties.",
        "type": "Object",
        "default": "{}"
    },
    "footerData": {
        "description": "Custom JSX inside the footer area.",
        "type": "Module",
        "default": "<empty string>"
    },
    "footerProps": {
        "description": "Footer div`s properties.",
        "type": "Object",
        "default": "{}"
    }
};

export default EN;

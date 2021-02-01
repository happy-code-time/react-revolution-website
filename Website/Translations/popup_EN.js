import getAllAvailableModulesNames from '../Functions/getAllAvailableModulesNames';

const len = getAllAvailableModulesNames().length - 1;

const EN = {
    vailableComponents: 'Components',
    authorLink: 'Author',
    lastReleaseNotes: 'Last release',
    fastActions: 'Useful links',
    releaseNotesKey: 'Affected component',
    releaseNotesDescription: 'Description',
    releaseNotes: 'Release Notes',
    back_404: 'Homepage',
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
    darkTheme: 'Dark',
    codeTheme: 'Code',
    searchForModule: 'Module search',
    clickToNavToTheModule: 'Navigate to this module',
    fast: 'Fast',
    light: 'Light',
    interactive: 'Interactive',
    "fast.description": "Minimal generation time and optimal source usage of the browser.",
    "light.description": `With the current number of ${len} Modules a total size of less than 190 KB.`,
    "interactive.description": "Each module can be designed freely and contains callback functions.",
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
    reactCodeTitle: 'React code',
    reactFunctionTitle: 'Functions code',
    cssCodeTitle: 'Css code',
    jsCodeTitle: 'Javascript code',
    loading: 'Loading...',
    keyUsageTitle: 'Keys Explanations',
    "table.title.key": 'Key',
    "table.title.description": 'Description',
    "table.title.type": 'Type',
    "table.title.default": 'Default',
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
        "default": '<empty string>'
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
    "accordion.animationTimeout": {
        "description": "How long does the animation take. Based on the CSS animation. Relevant if the value should be other than 300ms.",
        "type": "Number",
        "default": "300"
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
        "default": "false"
    },
    "props": {
        "description": "The HTML properties of the HTML element.",
        "type": "{}",
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
    "loadonscroll.data": {
        "description": "Custom data to render on the first time.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "loadonscroll.fireScrollEvent": {
        "description": "A number that causes the addressed element (scroll Reference) to be scrolled down with the specified number. This behavior is called in 'componentDidMount' (once).",
        "type": "Number",
        "default": "0"
    },
    "loadonscroll.fireScrollBack": {
        "description": "Should the element (scroll Reference.scrollTop = 0) be scrolled to the top after the 'fireScrollEvent' function has been called.",
        "type": "Boolean",
        "default": "true"
    },
    "loadonscroll.minify": {
        "description": "Callback function faster during the scroll event.",
        "type": "Number",
        "default": "0"
    },
    "loadonscroll.scrolledToBottom": {
        "description": "The callback function is only executed when the user has completely reached the end of the website minus minify.",
        "type": "Boolean",
        "default": "false"
    },
    "loadonscroll-description-1": "Example with Promise.resolve() three times.",
    "loadonscroll-description-2": "Example with Promise.reject() (returns default undefined as value) the key usage 'persistReject={false}' (do not remove the scroll event) and 'onReject' (display custom button to call the callback function again).",
    "loadonscroll-description-3": "Example with Promise.reject() (with custom JSX as error message for the user) with the key usage 'persistReject={true}' (remove the scroll event !) and 'onReject' (display custom button to call the callback function again).",
    "loadonscroll-description-4": "Example with: for the first loading count = Promise.reject(), for the second loading count Promise.reject() (with custom JSX as error message for the user) with the key usage 'persistReject={true}' (remove the scroll event !) and 'onReject' (display custom button to call the callback function again), for the third count Promise.resolve().",
    "minify": {
        "description": "When the user scrolls down, data is loaded. Loading the data can be speeded up by adding a PIXEL value here.",
        "type": "Number",
        "default": "0"
    },
    "cards.callback": {
        "description": "If the root element has been scrolled all the way down, data can be reloaded. If the callback returns 'break', the scroll event is removed from the root element. There are 2 arguments passed to this function. Argument 1: event (scroll, click: for the 'onReject' data), argument 2: custom data provided by the key 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    "cards.callback.persistReject": {
        "description": "If true then if the Promise has been rejected, then the scroll event are removed.",
        "type": "Boolean",
        "default": "false"
    },
    "cards.callback.onReject": {
        "description": "Custom data to display after an Promise was rejected and the user should be able to load more data again. To this data the click event are attached.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "cards.loading": {
        "description": "While additional elements are being loaded, a self-defined JSX element can be rendered.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "customsuggestion.callback": {
        "description": "After a change in the input field, this function is called with 1 parameter: Value of the input field. The callback must return a list and objects. The structure is described in the 'suggestions' key.",
        "type": "Function",
        "default": "undefined"
    },
    "customsuggestion.suggestions.text": {
        "description": "User-defined text that is used to filter.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.searchSensitive": {
        "description": "Search key sensitive.",
        "type": "Boolean",
        "default": "true"
    },
    "customsuggestion.suggestions": {
        "description": "List of objects",
        "type": "array",
        "default": "undefined"
    },
    "customsuggestion.suggestions.href": {
        "description": "The custom suggestion is wrapped with an A tag so the user can follow a suggestion directly.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.jsx": {
        "description": "Custom HTML the end user sees. If not available, the value of the key 'text' is displayed.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.text": {
        "description": "User-defined text that is used to filter.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.props": {
        "description": "The HTML properties of the HTML element.",
        "type": "{}",
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
    "clipboard.callback": {
        "description": "Custom callback function called if the clipboard button has been clicked. This function return 2 arguments. Argument 1: click event, argument 2: custom callbackProps, argument 3: the clipboards data.",
        "type": "Function",
        "default": "undefined"
    },
    "clipboard.callbackProps": {
        "description": "Custom callback properties passed as second argument to the callback function.",
        "type": "String | Array | Object | Number",
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
    "inputsuggestionobject.loading": {
        "description": "User-defined custom JSX data to show an loading icon while executing the 'callback' function. The passed callback function has to be an Promise. To show suggestions the Promise has to be resolved or rejected.",
        "type": "String | JSX",
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
        "default": "false"
    },
    "allowOnlyAZ": {
        "description": "If true, the following regex is applied to the value of the input field: (/ [^ a-zA-Z] / gmi).",
        "type": "Boolean",
        "default": "false"
    },
    "display": {
        "description": "Should the element be displayed or not?",
        "type": "Boolean",
        "default": "false"
    },
    "lineNumber": {
        "description": "Allow rendering, on the left side, each line number.",
        "type": "Boolean",
        "default": "false"
    },
    "iconClose": {
        "description": "User defined HTML with the action to 'close' the module.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "inputActive": {
        "description": "Render an input field.",
        "type": "Boolean",
        "default": "false"
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
        "default": "false"
    },
    "listarray.callback": {
        "description": "User defined callback function are fired if the user click on an list element. The function returns 2 arguments. Argument 1: click event, Argument 2: clicked entry.",
        "type": "Function",
        "default": "undefined"
    },
    "listarray.data": {
        "description": "Array of Strings (values) to display.",
        "type": "[]",
        "default": "[]"
    },
    "listobject.data": {
        "description": "Array of Objects.",
        "type": "[]",
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
        "default": "false"
    },
    "closeOnEsc": {
        "description": "When you press the 'Escape' key, the module should continue to be displayed or the display should be interrupted.",
        "type": "Boolean",
        "default": "false"
    },
    "inputEmptyOnCallback": {
        "description": "After an element has been selected from the list, the input field should be taught or the value of the input field should remain unchanged.",
        "type": "Boolean",
        "default": "false"
    },
    "closeOnClick": {
        "description": "If the darkened HTML area is clicked, the module will no longer be displayed.",
        "type": "Boolean",
        "default": "true"
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
        "default": "false"
    },
    "fullscreenoverlay.data": {
        "description": "Custom JSX data to display inside the overlay.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "disableScroll": {
        "description": "While displaying the module, the HTML element (tag) should be scrollable or not.",
        "type": "Boolean",
        "default": "false"
    },
    "messageKey": {
        "description": "A unique string.",
        "type": "String",
        "default": "<empty string>"
    },
    "codeMapping": {
        "description": "Object",
        "type": "{}",
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
        "type": "{}",
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
        "type": "{}",
        "default": "{}"
    },
    "codeMapping.close": {
        "description": "Object text to close the message box.",
        "type": "{}",
        "default": "undefined"
    },
    "codeMapping.close.text": {
        "description": "Text for closing to be displayed. A 'click close event' is attached to this text.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.close.props": {
        "description": "The HTML properties of the HTML element.",
        "type": "{}",
        "default": "{}"
    },
    "codeMapping.link": {
        "description": "Object - External Link.",
        "type": "{}",
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
        "default": "false"
    },
    "codeMapping.link.href": {
        "description": "The attribute 'to' in the <Link> tag or 'href' in the <a> tag.",
        "type": "{}",
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
        "default": "true"
    },
    "renderItems": {
        "description": "Which items should be shown by default.",
        "type": "array",
        "default": "'Smileys',' Peoples', 'Animals',' Plants', 'Nature', 'Food', 'Activity', 'Travel', 'Objects',' Symbols', 'Currency', ' Arrows', 'Html' "
    },
    "translations": {
        "description": "Translations for the respective headings of the icon sets.",
        "type": "{}",
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
        "default": "false"
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
        "default": "false"
    },
    "isDraggingData": {
        "description": "If a user is currently in the 'dragging' status, a user-defined JSX can be displayed.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "uploadOnClick": {
        "description": "Allow files to be processed when the user clicks on the 'drag and drop' area.",
        "type": "Boolean",
        "default": "false"
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
        "default": "true"
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
        "default": "true"
    },
    "reactRouter": {
        "description": "If true - (then the module moves within a Rect Router) a <Link> tag is rendered, if false a <a> tag is rendered.",
        "type": "Boolean",
        "default": "false"
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
        "description": "The embedded 'Menu' module.",
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
        "type": "{}",
        "default": "{}"
    },
    "title": {
        "description": "Array of strings - table heading.",
        "type": "[]",
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
        "default": "true"
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
        "default": "false"
    },
    "replaces": {
        "description": "Object - Replace Text after, the text was written.",
        "type": "{}",
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
        "default": "true"
    },
    "bread.hashRouter": {
        "description": "Is the current React App inside an ReactRouter or not. If true the hostname (first breadcrumbs) becomes the suffix '/#/'.",
        "type": "Boolean",
        "default": "false"
    },
    "bread.domainName": {
        "description": "Replace the hostname (first breadcrumb) with a customized text",
        "type": "String",
        "default": "undefined"
    },
    "bread.delimiter": {
        "description": "Delimiter between the breadrumbs.",
        "type": "String | JSX",
        "default": ">"
    },
    "bread.overwriteText": {
        "description": "Has to be used with the key: 'moduleMenu'. If true then the first menu childs key: 'text' are displayed instead of the breadcrumbs path. If false then the menus first childs key: 'text' are ignored.",
        "type": "Boolean",
        "default": "false"
    },
    "bread.moduleMenu": {
        "description": "Attached the module: 'Menu' only available for the last breadcrumb. Only one single child allowed as parent element - child nesting allowed without limitations.",
        "type": "<Menu>",
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
    "accordion.description.1": "Example with a single nested childs.",
    "accordion.description.2": "Example with 4 nested childs.",
    "accordion.description.3": "Example with click handler (outside the module) provided by the key: 'closeOnClickOutside' setted to true (all childs closed recursively).",
    "accordion.description.4": "Example using an animated icon.",
    "cards.scroll.description": "The Cards module will load more items, if the bottom of the parent div are reached.",
    "cards.scrollCallback.description": "The Cards module will load more items, if the bottom of the parent div are reached. Load more cards are base on the custom provided callback function. If the value is 'break', then the scroll listener are removed.",
    "cards.scrollCallback.example1": "Example width Promise.resolve(), LoadingBoxTop with the fixed position and 'break' on the 4 scroll Event.",
    "cards.scrollCallback.example2": "Example width Promise.reject() (default returns undefined), custom loading JSX passed by the key 'loading' and with the key 'persistReject={true}' it`s mean the scrollEvent listener are removed and the callback function not called again on a scroll event.",
    "cards.scrollCallback.example3": "Example width Promise.reject() width custom JSX as error message, custom loading JSX passed by the key 'loading' and with the key 'persistReject={false}' (default the value is false) it`s mean the scrollEvent listener are NOT removed! The user can scroll down back and the callback function are called again.",
    "cards.scrollCallback.example4": "Example width Promise.reject() width custom JSX as error message, custom loading JSX passed by the key 'loading' and with the key 'persistReject={true}' it`s mean the scrollEvent listener are removed! This example provides the key 'onReject' with a custom JSX - to this HTML are attached an click event. This click event call the custom 'callback' function.",
    "icons.description": "Icons module with all icons set, NO translations and default selected icons set: Smileys. After the click event, look into the console for an icon.",
    "icons.description2": "Icons module with selected icons set: Smileys, Activity, Travel, Peoples, Objects, NO translations yet and default selected icons set: Activity. After the click event, look into the console for an icon.",
    "icons.description3": "Icons module with selected icons set: Smileys, Activity, Travel, Peoples, Objects and 2 translated icons titles. After the click event, look into the console for an icon.",
    /**
     * 
     */
    globalStyle: {
        "description": "Load the global style file (react-revolution.css). If they have already been loaded, they will not be loaded twice.",
        "type": "Boolean",
        "default": "false"
    },
    moduleStyle: {
        "description": "Load single modules style file - if the file currently not available.",
        "type": "Boolean",
        "default": "false"
    },
    styleLoading: "Styles used for this module",
    "runtime.generator.description": 'If an error occured (runtime generator are not defined) while using the callback functionality in this module (callback), please install: npm install --save @babel/runtime && npm install --save-dev @babel/plugin-transform-runtime; Then in the .babelrc file add this line: {"presets": ["@babel/preset-env", "@babel/preset-react"],"plugins": [["@babel/transform-runtime"]]}.',

    "pagination.data": {
        "description": "Array of custom defined objects.",
        "type": "[]",
        "default": "[]"
    },
    "pagination.searchOnKeys": {
        "description": "Array of strings. Array of (provided objects inside the 'data' key) key names to use the search (input) field.",
        "type": "[]",
        "default": "[]"
    },
    "pagination.itemsPerSite": {
        "description": "How many sites to render on each page.",
        "type": "Number",
        "default": "10"
    },
    "pagination.keysToRender": {
        "description": "Array of strings. Array of key names Which should be displayed based on the Array of objects (key: 'data').",
        "type": "[]",
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
        "default": "false"
    },
    "pagination.resetLineNumber": {
        "description": "Reset the number of each line for each page. Each item will be begin with the count: 1.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.displayTotal": {
        "description": "Display the total count of provided data.length.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.totalPrefix": {
        "description": "Display a prefix before the number of total data.length are displayed.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.totalSufix": {
        "description": "Display a suffix after the number of total data.length are displayed.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.paginationPages": {
        "description": "Display the pagination.",
        "type": "Boolean",
        "default": "false"
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
        "default": "false"
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
        "default": "false"
    },
    "pagination.searchValue": {
        "description": "Redner for the 1 time an custom search value to execute a search without any user interaction.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.searchOnKeyDown": {
        "description": "Execute a search on the provided data if the user are changing the input value.",
        "type": "Boolean",
        "default": "false"
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
        "default": "false"
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
        "default": "false"
    },
    "globalMessage.empty": {
        "description": "If true, all messages are removed when the location is changed (window.location.href).",
        "type": "Boolean",
        "default": "true"
    },
    "breadcrumbs.example3": "Example with menu attached on the last breadcrumb entry.",
    "pager.dynamic.description": 'This is an example with a dynamic pager, so every time a page is changed, a database query is carried out. This function with the DB query returns a promise. It has to be a promise, because the module internally contains an "await", so the page change will only take place if the promise is resolved and data is delivered. ',
    "promise": {
        "description": "Generate each line of code as Promise for better performance while generation very long strings to the source code structure. If false, then the module generates the source code (jsx code) without a Promise.",
        "type": "Boolean",
        "default": "false"
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
        "type": "[]",
        "default": "[]"
    },
    "matcher.words": {
        "description": "Array of strings/ words to match.",
        "type": "[]",
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
        "type": "[]",
        "default": "[ 'tags', 'properties', 'variables', 'objectProperty', 'functions', 'words', 'quotes', 'brackets']"
    },
    "code": {
        "description": "Main string to generate the source code.",
        "type": "String",
        "default": "<empty string>"
    },
    "link.404": {
        "description": "Object for the back link functionality.",
        "type": "{}",
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
        "type": "{}",
        "default": "undefined"
    },
    "link.404.callback": {
        "description": "Callback function on click event. This function returns 1 argument. Argument 1: click event.",
        "type": "{}",
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
        "default": "false"
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
    "hideAt": {
        "description": "If the document is 'resized' and the value is less than or equal to this value, the sidebar is completely minimized.",
        "type": "Number",
        "default": "520"
    },
    "minifyAt": {
        "description": "If the document is 'resized' and the value is less than or equal to this value, the sidebar is minimized.",
        "type": "Number",
        "default": "720"
    },
    "maxifyAt": {
        "description": "Maxify the previously minified sidebar to the main (base) width.",
        "type": "Number",
        "default": "1024"
    },
    "minifySidebarOn": {
        "description": "If the value of window.location.href or window.location.hash matches an entry in this list, then the sidebar is displayed completely minimized.",
        "type": "String[]",
        "default": "[]"
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
    "toggleMenuHtml": {
        "description": "Custom JSX used as toggling icon for the sidebar. This HTML are located inside the headers content.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "closeMenuHtml": {
        "description": "Custom JSX used as close icon on the sidebar if the documents width lower then the value passed to the module with the key 'minifyAt'.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "moduleSidebar": {
        "description": "The module 'Menu'.",
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
        "type": "{}",
        "default": "{}"
    },
    "contentData": {
        "description": "Custom JSX inside the content area.",
        "type": "Module",
        "default": "<empty string>"
    },
    "contentProps": {
        "description": "Content div`s properties.",
        "type": "{}",
        "default": "{}"
    },
    "footerData": {
        "description": "Custom JSX inside the footer area.",
        "type": "Module",
        "default": "<empty string>"
    },
    "footerProps": {
        "description": "Footer div`s properties.",
        "type": "{}",
        "default": "{}"
    },
    "dashed": {
        "description": "Draw, on the left side, for each toggle menu entry a dashed border.",
        "type": "Boolean",
        "default": "false"
    },
    "dashed_example": "Example with the usage of the key 'dashed={true}'.",
    "articles.animation": {
        "description": "An animation while toggling the article. Animations that can be used: 'height', 'scale', 'opacity'. In order for the animation to have an effect, the element has to be an inline-block or block element, this can be solved with CSS by adding the CSS property to the toggler: display: block, display: inline-block.",
        "type": "String",
        "default": "undefined"
    },
    "articles.animation.images": {
        "description": "An animation when toggling the article. Animations that can be used: 'scale'.",
        "type": "String",
        "default": "undefined"
    },
    "articles.title": {
        "description": "Title of the article.",
        "type": "String",
        "default": "undefined"
    },
    "articles.titleProps": {
        "description": "The titles HTML tags attributes.",
        "type": "{}",
        "default": "{}"
    },
    "articles.text": {
        "description": "Text of the article.",
        "type": "String",
        "default": "undefined"
    },
    "articles.textProps": {
        "description": "The text HTML tags attributes.",
        "type": "{}",
        "default": "{}"
    },
    "articles.image": {
        "description": "Url of the image.",
        "type": "String",
        "default": "undefined"
    },
    "articles.imageProps": {
        "description": "The images HTML tags attributes.",
        "type": "{}",
        "default": "{}"
    },
    "articles.imageData": {
        "description": "Custom data inside the image.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "articles.dataToggle": {
        "description": "Main custom data to toggle after the article has been clicked.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "articles.border": {
        "description": "Object.",
        "type": "{}",
        "default": "{}"
    },
    "articles.border.site": {
        "description": "Align the border on the site: 'top', 'right', 'bottom', 'left'.",
        "type": "String",
        "default": "undefined"
    },
    "articles.border.width": {
        "description": "The borders width in px.",
        "type": "Number",
        "default": "undefined"
    },
    "articles.border.color": {
        "description": "The color of the border. Values that can be used as color: string, rgb/rgba and HEX.",
        "type": "String",
        "default": "undefined"
    },
    "articles.toggleOn": {
        "description": "Switching happens after clicking on the element. Available options: 'title', 'text'. By default, only one click on the whole 'box' (article box) is accepted and causes a toggle effect.",
        "type": "String",
        "default": "undefined"
    },
    "articles.itemsPerLine": {
        "description": "Number of elements rendered in a single 'line'.",
        "type": "Number",
        "default": "3"
    },
    "articles.persist": {
        "description": "After toggling an element, this element should be persisted (the toggle back functionality are not available).",
        "type": "Boolean",
        "default": "false"
    },
    "articles.toggleForwards": {
        "description": "Custom defined JSX to toggle/show data. If defined then the key 'toggleOn' are ignored.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "articles.toggleBackwards": {
        "description": "Custom defined JSX to toggle data back.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "articles.description.1": "Example with the key usage 'border'.",
    "articles.description.2": "Example with the key usage closeOnClickOutside={true}. Its mean close all toggled articles if the user make a click outside the module.",
    "articles.description.3": "Example with the key usage persist={true}.",
    "articles.description.4": "Example with the key usages 'toggleForwards' and 'toggleBackwards'.",
    "readmore.animation": {
        "description": "An animation while switching the text to be read. Animations that can be used: 'height', 'scale', 'opacity'. In order for the animation to have an effect, the element has to be an inline-block or block element, this can be solved with CSS by adding the CSS property to the toggler: display: block, display: inline-block.",
        "type": "String",
        "default": "undefined"
    },
    "readmore.toggleForwards": {
        "description": "Show self-defined text or HTML around the text. The event 'read more' is added here.",
        "type": "String | JSX",
        "default": "..."
    },
    "readmore.toggleBackwards": {
        "description": "Hide self-defined text or HTML around the text. The event 'read less' is added here.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "readmore.data": {
        "description": "Main text.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "readmore.dataToggle": {
        "description": "The text to be displayed.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "readmore.callback.toggleOnReject": {
        "description": "Allow redisplay of the button from the key 'toggle Reject' to redo the query (callback).",
        "type": "Boolean",
        "default": "false"
    },
    "readmore.callback.toggleReject": {
        "description": "Show self-defined text or HTML code to rerun the query.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "readmore.callback.callback": {
        "description": "Callback function to load data. This function returns 2 arguments. Argument 1: click Event, argument 2: custom defined data passed by the key 'callback Props'.",
        "type": "Boolean",
        "default": "false"
    },
    "readmore.callback.callbackProps": {
        "description": "Custom defined data passed as second argument to the callback function.",
        "type": "Boolean",
        "default": "false"
    },
    "readmore.callback.loading": {
        "description": "Show self-defined text or HTML code while fetching data in pending Promise state.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "readmore-description-1": "Example with the custom button 'read more'.",
    "readmore-description-2": "Example with the custom button 'read more' and 'read less'.",
    "readmore-callback-description-1": "Example using the 'read more' button with a callback method that lasts 2000ms, during this time the HTML of the 'loading' key is shown. In this case its own gif image. The module's internal function waits ( await) to resolve the 'promise' (Promise -> resolve) to get the data to show. When the data has been loaded once, it will not be loaded a second time! When 'Promise.reject ()' is in place and there is no data, then 'nothing' happens and the 'toggleForwards' key reappears. ",
    "readmore-callback-description-2": "Example using the 'read more' button and 'read less' with a callback method that lasts 2000ms, during this time the HTML of the 'loading' key is shown, in this case your own gif image. The module's inner function waits (await) for a Promise -> resolve to get the data to show. When the data has been loaded once, it will not be loaded a second time! If the promise has failed (> reject) then also you can pass data to the module. When 'Promise.reject ()' has place and there is no data, then 'nothing' happens and the key 'toggleForwards' reappears. ",
    "readmore-callback-description-3": "Example with Promise.reject() and returned custom JSX data (error message) and with the key 'toggleOnReject={true}' and 'toggleReject' (custom button - try again).",
    "readmore-callback-description-4": "Example with Promise.reject().",
    "readmore-callback-description-5": "Example with returned custom JSX data (error message) after 2 click an Promise.reject() and on the 3 click Promise.resolve().",
    "modal.callback": {
        "description": "Mandatory callback function to change the current display status. The only passed parameter is the event (keydown | touch | click).",
        "type": "Function",
        "default": "undefined"
    },
    "modal.data": {
        "description": "Self-defined HTML order string to be displayed.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "modal.close": {
        "description": "Self-defined HTML order string. The 'callback' function is added to this HTML.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "modal.closeOnKeyDown": {
        "description": "Add the 'keydown' and 'touch' event to the DOM element to invoke the 'callback' function.",
        "type": "Boolean",
        "default": "true"
    },
    "modal.closeOnClickDimmed": {
        "description": "Add the 'click' event to the 'holder' of the module to invoke the 'callback' function.",
        "type": "Boolean",
        "default": "true"
    },
    "timeline.lineMiddle": {
        "description": "Draw an line on the middle of the timeline.",
        "type": "Boolean",
        "default": "false"
    },
    "timeline.lineTitle": {
        "description": "Draw an line from the title`s div to the middle line.",
        "type": "Boolean",
        "default": "false"
    },
    "timeline.lineEntry": {
        "description": "Draw an line from the content div`s to the middle line.",
        "type": "Boolean",
        "default": "false"
    },
    "timeline.colorLineMiddle": {
        "description": "Color of the lineMiddle.",
        "type": "String",
        "default": "#dadce0"
    },
    "timeline.colorLineEntry": {
        "description": "Color of the lineTitle and lineEntry.",
        "type": "String",
        "default": "#dadce0"
    },
    "timeline.colorBorderEntry": {
        "description": "Color of the border of each single entry.",
        "type": "String",
        "default": "#dadce0"
    },
    "timeline.borderStyle": {
        "description": "Border style. Available options are: 'solid', 'dashed', 'mixed' and '!mixed'.",
        "type": "String",
        "default": "solid"
    },
    "timeline.dashedSize": {
        "description": "Size of the borderStyle. Works only if the borderStyle are 'dashed'. Available options are: 'small' and 'large'.",
        "type": "String",
        "default": "small"
    },
    "timeline.data": {
        "description": "Timelines data as array of object.",
        "type": "[]",
        "default": "[]"
    },
    "timeline.data.title": {
        "description": "Custom data for the title area.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "timeline.data.align": {
        "description": "Align the entry to the site: 'left', 'right' or 'center'.",
        "type": "String",
        "default": "center"
    },
    "timeline.data.content": {
        "description": "Custom data for the content area.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "description.dragDrop.1": "Example with a default drag & drop functionality based on a callback to apply the state changes.",
    "description.dragDrop.2": "Example with a custom callbackAllowDrop (Promise - you have to resolve or reject with the value true or false) function to return true/ false to apply or discard state changes.",
    "description.dragDrop.3": "Example with a custom callbackAllowDrop (Promise - you have to resolve or reject with the value true or false) function to return true/ false to apply or discard state changes and custom Loading icon while waiting for the response of the 'callbackAllowDrop' function.",
    "description.dragDrop.4": "Example with the area 'Fruits' - only drop allowed and 'Vegetables' - only drag allowed.",
    "drag.drop.data": {
        "description": "Object.",
        "type": "{}",
        "default": "{}"
    },
    "drag.drop.data.data": {
        "description": "Array of objects with single items.",
        "type": "[]",
        "default": "undefined"
    },
    "drag.drop.data.data.text": {
        "description": "Main single items text to display.",
        "type": "String",
        "default": "undefined"
    },
    "drag.drop.data.data.props": {
        "description": "Single items (li) properties.",
        "type": "String",
        "default": "undefined"
    },
    "drag.drop.data.name": {
        "description": "Areas name (title).",
        "type": "String",
        "default": "Objects key"
    },
    "drag.drop.data.areaProps": {
        "description": "Areas (ul) properties.",
        "type": "{}",
        "default": "{}"
    },
    "drag.drop.data.titleProps": {
        "description": "Titles properties.",
        "type": "String",
        "default": "Objects key"
    },
    "drag.drop.data.allowDrop": {
        "description": "Allow to drop items to the this are.",
        "type": "Boolean",
        "default": "true"
    },
    "drag.drop.data.allowDrag": {
        "description": "Allow to drag items from this area.",
        "type": "Boolean",
        "default": "true"
    },
    "drag.drop.data.dropLoading": {
        "description": "Can only be used in combinations with the key 'callbackAllowDrop'. Custom loading data.",
        "type": "Boolean",
        "default": "true"
    },
    "drag.drop.itemsPerLine": {
        "description": "How many boxes in an single line.",
        "type": "Number",
        "default": "2"
    },
    "drag.drop.mediaBreak": {
        "description": "Default the main box holder (for each line 'itemsPerLine') becomes the class flex, flex-row on media break its becomes the class flex and flex-column.",
        "type": "Number",
        "default": "undefined"
    },
    "drag.drop.callback": {
        "description": "Custom user callback with the new changes to apply. This function returns 4 arguments. Argument 1: previous state of the current data, Argument 2: nex state of the current data, Argument 3: changes that will be made, Argument 4: custom data comes form the key 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    "drag.drop.callbackProps": {
        "description": "Custom user data.",
        "type": "Any",
        "default": "undefined"
    },
    "drag.drop.callbackAllowDrop": {
        "description": "Custom user callback function with the changes before applying it (After the user made a drop but the changes are not re-rendered to the new state). This function returns 4 arguments. Argument 1: previous state of the current data, Argument 2: nex state of the current data, Argument 3: changes that will be made, Argument 4: custom data comes form the key 'callbackAllowDropProps'.",
        "type": "Function",
        "default": "undefined"
    },
    "drag.drop.callbackAllowDropProps": {
        "description": "Custom user data.",
        "type": "Any",
        "default": "undefined"
    },
    "drag.drop.lineNumber": {
        "description": "Display the line number on the left site of the text.",
        "type": "Boolean",
        "default": "false"
    },
    "drag.drop.lineNumberChar": {
        "description": "can only be used if the key 'lineNumber' are true. Display a custom character after the line number.",
        "type": "String",
        "default": "<empty string>"
    },
    "description.dragDropList.1": "Example with a default drag & drop functionality based on a callback to apply the state changes.",
    "description.dragDropList.2": "Example with a custom callbackAllowDrop (Promise - you have to resolve or reject with the value true or false) function to return true/ false to apply or discard state changes.",
    "drag.drop.list.placeholder": {
        "description": "Custom JSX data to render inside the placeholder.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "drag.drop.list.placeholderPosition": {
        "description": "If the user starts dragging an element and is over the drop position then generate the PLACEHOLDER on the site of the hovered element. Available options: 'top' (placeholder are always on the top of an hovered item), 'bottom' (placeholder are always on the bottom of an hovered item) and 'auto' (placeholder are detected automatically).",
        "type": "String",
        "default": "auto"
    },
    "drag.drop.list.areaProps": {
        "description": "Custom ul properties.",
        "type": "{}",
        "default": "{}"
    },
    "drag.drop.list.data": {
        "description": "Array of objects.",
        "type": "[]",
        "default": "[]"
    },
    "drag.drop.list.text": {
        "description": "Main text to display.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "drag.drop.list.props": {
        "description": "Custom li properties.",
        "type": "{}",
        "default": "{}"
    },
    "stars.description.1": "Example with stars in readonly mode and without filled stars and in default black color.",
    "stars.description.2": "Example with stars in readonly mode and 2 filled stars of 5 and with the filled color 'orange-yellow'.",
    "stars.description.3": "Example with stars in callback mode and 0 filled stars of 5 and with the custom callback function to re-render filled items after  star has been clicked.",
    "stars.description.4": "Example with custom properties (title) passed to each star.",
    "stars.count": {
        "description": "How many stars should be generated.",
        "type": "Number",
        "default": "0"
    },
    "stars.filled": {
        "description": "How many stars should be displayed as filled.",
        "type": "Number",
        "default": "0"
    },
    "stars.fillHover": {
        "description": "Fill an unfilled star.",
        "type": "Boolean",
        "default": "false"
    },
    "stars.callback": {
        "description": "Custom callback function if a star are clicked. This function return 3 arguments: Argument 1: the click event, Argument 2: the current clicked star, Argument 3: callbackProps.",
        "type": "Function",
        "default": "undefined"
    },
    "stars.callbackProps": {
        "description": "Custom defined data passed as last arguemnt to the 'callback' function.",
        "type": "Any",
        "default": "undefined"
    },
    "stars.color": {
        "description": "Color of the filled and unfilled stars. Default 3 colors are available: 'orange', 'orange-yellow' and 'yellow'.",
        "type": "String",
        "default": "<empty string>"
    },
    "stars.starsData": {
        "description": "Array of objects.",
        "type": "[]",
        "default": "[]"
    },
    "stars.starsData.props": {
        "description": "Object with custom properties.",
        "type": "{}",
        "default": "{}"
    },
    "stars.starsData.data": {
        "description": "Custom JSX data attached inside the stars HTML.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "InputSuggestionObject.description.1": "Example with a preloaded list to filter and a key-sensitive search. The (key-sensitive/ key-NOT-sensitive) filter function are executed internal and is based on the childs (object) key 'text'. You can render/ display the value of the key 'text' or a different value (JSX) by passing to the childs (object) the key 'jsx'.",
    "InputSuggestionObject.description.2": "Example with a key-not-sensitive search and with the key 'loading' based on the callback function and the passed callback have to be an Promise (in combination with the key 'loading'!). For this (await) time the loading icon are displayed. If you resolve or reject the Promise, then the loading icon/ data are disappear.",
    "InputSuggestionArray.description.1": "Example with a preloaded list to filter with a key-sensitive search. The (key-sensitive/ key-NOT-sensitive) filter function are executed internal and is based on the childs (arrays) text entry.",
    "CustomSuggestion.description.1": "Example with suggestions with an href to redirect the user after the click event and the key 'callbackRerender={true}' (required to accept the new internal state) and with a predefiend suggestions list.",
    "CustomSuggestion.description.2": "Example with suggestions with an href to redirect the user after the click event and the key 'callbackRerender={false}' - its mean accept the suggestion comes from outsite.",
    "CustomSuggestion.description.3": "Example with suggestions with an href to redirect the user after the click event and the key 'callbackRerender={true}' (required to accept the new state = the incoming suggestions from the Promise) and a key-not-sensitive search and with the key 'loading' based on the callback function and the passed callback have to be an Promise (in combination with the key 'loading'!). For this (await) time the loading icon are displayed. If you resolve or reject the Promise, then the loading icon/ data are disappear.",
    "GlobalMessages.description.1": "Example with a single message. This message will only disappear if the user change the current location.",
    "GlobalMessages.description.2": "Example with a single message. This message will disappear after two seconds.",
    "menu.headData": {
        "description": "User-defined JSX data at the top of the menu.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "menu.activeClassName": {
        "description": "When an element is clicked, it gets this class name.",
        "type": "String",
        "default": "is-active"
    },
    "menu.toggledClassName": {
        "description": "When an element has been toggled, it is given this class name.",
        "type": "String",
        "default": "is-toggled"
    },
    "menu.isActiveTree": {
        "description": "How many elements - starting from the root node - should be marked as ACTIVE ('activeClassName'). The value -1 means without restrictions.",
        "type": "Number",
        "default": "-1"
    },
    "menu.forceClose": {
        "description": "Forcing the closure of all other ROOT elements that have not been toggled.",
        "type": "Boolean",
        "default": "false"
    },
    "menu.forceCloseAll": {
        "description": "Force closure of ALL other elements that have not been toggled.",
        "type": "Boolean",
        "default": "false"
    },
    "menu.align": {
        "description": "In which direction the menu elements should be created. Starting from the left or right.",
        "type": "String",
        "default": "left"
    },
    "menu.alignIcon": {
        "description": "If the key 'icon' was supplied, the icon should be on the right or left side.",
        "type": "String",
        "default": "left"
    },
    "menuHeight.singleItemsHeight": {
        "description": "Individual height of each individual menu entry. Only relevant during the duration of an animation.",
        "type": "Number",
        "default": "35"
    },
    "menuHeight.animationTime": {
        "description": "Animation time to control the time of the internal handling of classes. In order to get an animation flush with CSS, if the value is different than 300, the section 'animation .scss' must be found in the file 'rr-menu-height.scss' : menuHeightAnimateStart <timout> ms ease-in forwards; ' and 'animation: menuHeightAnimateStop <timout> ms ease-in forwards;' customize. ",
        "type": "Number",
        "default": "300"
    },
    "headerDataRight": {
        "description": "The JSX data from the key 'headerData' should be displayed on the right and the JSX data from the key 'toggleMenuHtml' should be displayed on the left. If false then the JSX data from the key 'headerData' should be displayed on the left and the JSX data from the key 'toggleMenuHtml' are displayed on the right. ",
        "type": "Boolean",
        "default": "false"
    },
    "404.imagePath": {
        "description": "Source of the image.",
        "type": "String",
        "default": "<empty string>"
    },
    'slider.staticData' : {
        "description": "Static data inside the slider.",
        "type": "JSX | String",
        "default": "<empty string>"
    },
    'slider.onSlideTime' : {
        "description": "Sliders transformation time during an ACTIVE mouse / touch slide. Possible values ​​are '0' and from: '01' to '30' (01 = 100ms, 20 = 2000ms, 30 = 3000ms).",
        "type": "String",
        "default": "0"
    },
    'slider.data': {
        "description": "An array of objects.",
        "type": "{} []",
        "default": "[]"
    },
    'slider.data.data': {
        "description": "User defined Jsx code",
        "type": "String|Jsx",
        "default": "undefined"
    },
    'slider.data.image': {
        "description": "Source of the picture.",
        "type": "String",
        "default": "undefined"
    },
    'slider.data.callback': {
        "description": "User-defined function that is called when the image / slide is called. Return arguments are: Argument 1: the index of the slide, Argument 2: the values ​​of the key 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'slider.data.callbackProps': {
        "description": "User-defined data that is passed as 2 arguments to the callback function.",
        "type": "Any",
        "default": "undefined"
    },
    'slider.data.dot': {
        "description": "User-defined data for the 'content' of a single navigation point. The key displayDotsIndex has to be false (displayDotsIndex={true}).",
        "type": "Any",
        "default": "undefined"
    },
    'slider.displayDots': {
        "description": "Allow rendering of navigation points within the paginator.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.callbackMount': {
        "description": "User-defined function that is called after the slider component has been initialized. This function returns 1 argument, the value of the key: 'callbackMountProps'. A promise is expected which expects a number as the return value. This number is changed the slide number. The value must not be negative (x> = 0) and not greater than the data length (x <data.length). ",
        "type": "Function",
        "default": "undefined"
    },
    'slider.callbackMountProps': {
        "description": "User-defined data that is passed as 1 argument to the 'callbackMount' function.",
        "type": "Boolean",
        "default": "false"
    },
    'slider.imageAsBackground': {
        "description": "Don't put the image in an <img /> tag, but rather as a backgroundImage and render custom data within the image / slide.",
        "type": "Boolean",
        "default": "false"
    },
    'slider.displayPagination': {
        "description": "Allow rendering of the paginator - the button 'next' and the button 'before'.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.paginationInside': {
        "description": "The button 'next' and the button 'before' should be generated inside the slider (standard setting). If false, the buttons are generated outside the slider.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.dotsInside': {
        "description": "The navigations dots should be generated inside the slider (standard setting). If false, the dots are generated outside the slider.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.slideAfterMove': {
        "description": "Autoslide only after the value is greater than or equal to x (>=) than the value specified here.",
        "type": "number",
        "default": "50"
    },
    'slider.displayDotsIndex': {
        "description": "Allow rendering of the single paginator index.",
        "type": "Boolean",
        "default": "false"
    },
    'slider.buttonsAlwaysVisible': {
        "description": "Always show navigation buttons.",
        "type": "Boolean",
        "default": "false"
    },
    'slider.next': {
        "description": "User-defined Jsx within the button: next.",
        "type": "String | JSX",
        "default": ">"
    },
    'slider.previous': {
        "description": "User-defined Jsx within the button: earlier.",
        "type": "String | JSX",
        "default": "<"
    },
    'slider.items.data': {
        "description": "Array of objects.",
        "type": "{} []",
        "default": "[]"
    },
    'slider.items.data.data': {
        "description": "Custom Jsx.",
        "type": "String | Jsx",
        "default": "undefined"
    },
    'slider.cards.slideItemsXS': {
        "description": "Number of elements to be moved (individual cards) if the width of the document is smaller than (the value of) 'resizeS'.",
        "type": "Number",
        "default": "1"
    },
    'slider.cards.slideItemsS': {
        "description": "Number of elements to be moved (individual cards) if the width of the document is smaller than (the value of) 'resizeL' but larger than (the value of) 'resizeS'.",
        "type": "Number",
        "default": "2"
    },
    'slider.cards.slideItemsL': {
        "description": "Number of elements to be moved (individual cards) if the width of the document is smaller than (the value of) 'resizeXL' but larger than (the value of) 'resizeL'.",
        "type": "Number",
        "default": "3"
    },
    'slider.cards.slideItemsXL': {
        "description": "Number of elements to be moved (individual cards) if the width of the document is larger than (the value of) 'resizeXL'.",
        "type": "Number",
        "default": "4"
    },
    'slider.items.itemsXS': {
        "description": "How many objects from the transferred key 'data' (array) should be displayed in the individual slide if the width of the document is smaller than (the value of) 'resizeS'.",
        "type": "Number",
        "default": "1"
    },
    'slider.items.itemsS': {
        "description": "How many objects from the transferred key 'data' (array) should be displayed in the single slide if the width of the document is smaller than (the value of) 'resizeL' but larger than (the value of) 'resizeS'. ",
        "type": "Number",
        "default": "2"
    },
    'slider.items.itemsL': {
        "description": "How many objects from the transferred key 'data' (array) should be displayed in the single slide if the width of the document is smaller than (the value of) 'resizeXL' but larger than (the value of) 'resizeL'. ",
        "type": "Number",
        "default": "3"
    },
    'slider.items.itemsXL': {
        "description": "How many objects from the transferred key 'data' (array) should be displayed in the individual slide if the screen width is greater (or equal) than the transferred value in the key 'resizeXL'.",
        "type": "Number",
        "default": "4"
    },
    'slider.items.resizeS': {
        "description": "If the width of the document is smaller than this value, then the number of generated elements is 'itemsXS'. If the width of the document is larger than this value and smaller than 'itemsL', then the number of generated Items match 'itemsS'. ",
        "type": "Number",
        "default": "768"
    },
    'slider.items.resizeL': {
        "description": "If the width of the document is larger than this value and smaller than 'itemsXL', then the number of generated elements should correspond to 'itemsL'.",
        "type": "Number",
        "default": "1024"
    },
    'slider.items.resizeXL': {
        "description": "If the width of the document is larger than this value, then the number of generated elements should correspond to 'itemsXL'.",
        "type": "Number",
        "default": "1260"
    },
    'slider.example1': 'Slider using the key buttonsAlwaysVisible = {false} (standard setting).',
    'slider.example2': 'Slider with the use of the key buttonsAlwaysVisible={true}.',
    'slider.example3': 'Slider with the use of the key displayPagination={false} to hide the paginator.',
    'slider.example4': 'Slider using the key displayDotsIndex={false}.',
    'slider.example5': 'Slider using the key dotsInside={false}.',
    'slider.example6': 'Slider with the example of the elements generation depending on the screen width using the keys: resizeS, resizeL, resizeXL, resizeS, resizeL and resizeXL.',
    'steps.next': {
        "description": "User-defined Jsx within the button: next.",
        "type": "String | JSX",
        "default": "Next"
    },
    'steps.previous': {
        "description": "User-defined Jsx within the button: earlier.",
        "type": "String | JSX",
        "default": "Previous"
    },
    'steps.submit': {
        "description": "User-defined Jsx within the button: Save.",
        "type": "String | JSX",
        "default": "Submit"
    },
    'steps.callback': {
        "description": "User-defined function that is called when the 'Save' button is pressed. Return arguments are: Argument 1: the click event, Argument 2: the values ​​of the key 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'steps.callbackProps': {
        "description": "User-defined data that is passed as 2 arguments to the callback function.",
        "type": "Any",
        "default": "undefined"
    },
    'steps.progressBar': {
        "description": "Display control of the animated ProgressBar.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.iconStep': {
        "description": "Navigate to the next point that was clicked.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.callbackCheck': {
        "description": "If true then the 'callback' function expects a promise which returns true or false. If true then the user is allowed to navigate further.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.callbackCheckNavigate': {
        "description": "In combination with 'callbackCheck={true}' it is checked whether the promise of the respective step is false (for example, if the user navigates from step 1 to step 3, steps 1 and 2 must be checked). The user is navigated to the step where the promise returns the value false. ",
        "type": "Boolean",
        "default": "false"
    },
    'steps.liveGeneration': {
        "description": "Activates a special function to generate the data of the content (of a single step) in real time. Only works if the child element of the data also contains a callback function 'liveGeneration'.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.data': {
        "description": "Array of objects.",
        "type": "{} []",
        "default": "[]"
    },
    'steps.data.text': {
        "description": "The text in each step.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'steps.data.icon': {
        "description": "The icon of a single step.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'steps.data.data': {
        "description": "The content of a single step.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'steps.data.callback': {
        "description": "If the user clicks the button 'next' or 'before', this function is called. This returns an argument 'callbackProps'. This function must return a promise. If the value (resolve) is true, the user is allowed to continue navigating, otherwise not. ",
        "type": "Function",
        "default": "undefined"
    },
    'steps.data.callbackProps': {
        "description": "User-defined data for the 'callback' function.",
        "type": "Any",
        "default": "undefined"
    },
    'steps.data.onError': {
        "description": "User-defined function that is called when the function 'callback' returns false (Promise.resolve (false)). This function must return a promise. The result of this promise is interpreted as an error message and displayed to the user. This function returns an argument 'onErrorProps'. ",
        "type": "Function",
        "default": "undefined"
    },
    'steps.data.onErrorProps': {
        "description": "User-defined data for the 'onError' function.",
        "type": "Any",
        "default": "undefined"
    },
    'steps.data.liveGeneration': {
        "description": "User-defined function to generate the data of the content (of a single step) in real time. This function must return a promise. The result of Promise.resolve (...) is then the content (JSX) what the user only works if the parent key is 'liveGeneration = {true}'. ",
        "type": "Function",
        "default": "undefined"
    },
    'steps.data.liveGenerationProps': {
        "description": "User-defined data for the callback function 'liveGeneration'.",
        "type": "Any",
        "default": "undefined"
    },
    'steps.errorDataInside': {
        "description": "The value of the response 'liveGeneration' (error message) should be displayed outside the content area. If true, the message will be displayed within the content area.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.errorAlignTop': {
        "description": "The value of the response 'liveGeneration' (error message) should be displayed below the content area. If true, the message is displayed above the content area.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.iconBg': {
        "description": "Icons background color.",
        "type": "String",
        "default": "rgb (71, 180, 118)"
    },
    'steps.progressBgBlank': {
        "description": "First part of the animated progress bar.",
        "type": "String",
        "default": "rgba (71, 180, 118, 0.9)"
    },
    'steps.progressBgStripe': {
        "description": "Second part of the animated progress bar.",
        "type": "String",
        "default": "rgb (71, 180, 118)"
    },
    'steps.progressBgSize': {
        "description": "Line width (in px) of the animated progress bar.",
        "type": "Number",
        "default": "30"
    },
    'steps.buttonsBg': {
        "description": "Buttons background color (next, before, submit).",
        "type": "String",
        "default": "rgb (71, 180, 118)"
    },
    'steps.example1': 'Steps with the standard settings.',
    'steps.example2': 'Steps using the key progressBar={true}.',
    'steps.example3': 'Steps using the key iconStep={true}.',
    'steps.example3a': 'Steps with a user-defined color definition.',
    'steps.example4': 'Steps using the keys callbackCheck={true} and iconStep={true}.',
    'steps.example5': 'Steps with a user-defined "onError" function and user-defined data for this function "onErrorProps".',
    'steps.example6': 'Steps with a user-defined "onError" function, user-defined data for this function "onErrorProps" and live code (JSX) code generation using the "liveGeneration" function.',
    'menu.data.callback': {
        "description": "User-defined function that is executed when a menu element has been clicked and this element has no child element. The function has only one return argument, the value of the key 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'menu.data.callbackProps': {
        "description": "User-defined argument for the callback function.",
        "type": "Any",
        "default": "undefined"
    },
    'menu.data.externalLink': {
        "description": "If the value is true, the tag <a> is generated with the attribute target = '_ blank'.",
        "type": "Boolean",
        "default": "false"
    },
    'suggestion.applySelected': {
        "description": "If the value is false, the selected value (from the drop-down suggestions) will not be adopted, this only has the purpose of calling the callback function without keeping the selected 'suggestion'.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.cards.cardWidthS': {
        "description": "The width of the card (in px) with the value of the document resizeS={xxx}.",
        "type": "Number",
        "default": "2"
    },
    'slider.cards.cardWidthL': {
        "description": "The width of the card (in px) with the value of the document resizeL={xxx}.",
        "type": "Number",
        "default": "2"
    },
    'slider.cards.cardWidthXL': {
        "description": "The width of the card (in px) with the value of the document resizeXL={xxx}.",
        "type": "Number",
        "default": "3"
    },
    'slider.paginationType': {
        "description": "Paginator type. Possible types: 1 and 2.",
        "type": "Number",
        "default": "1"
    },
    'slider.autoplay': {
        "description": "Should the slide change automatically.",
        "type": "Boolean",
        "default": "false"
    },
    'slider.autoplayTime': {
        "description": "Time delay (timeout) for every next slide after the previous one or after the component has been mounted.",
        "type": "Number",
        "default": "5000"
    },
    'slider.autoplayNext': {
        "description": "If true then the slide direction is right, if false then left.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.animationTime': {
        "description": "Sliders transformation time for autoplay and mouse / touch move. Possible values '0' and ​​from: '01' to '30' (01 = 100ms, 20 = 2000ms, 30 = 3000ms).",
        "type": "String",
        "default": "06"
    },
    'slider.allowMouseTouch': {
        "description": "Allow the user to change the slider with the mouse or finger (touch screen).",
        "type": "Boolean",
        "default": "true"
    },
    'slider.wrapDirection': {
        "description": "If true and the user is in the first slide and presses the button beforehand, navigation to the last slide is made and vice versa. If the user is in the last slide and presses the button again, the first slide is displayed.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.inlineStyle': {
        "description": "If the slider is moved with the mouse an inline-style is used. If false then setState.",
        "type": "Boolean",
        "default": "false"
    },
    'slider.example7': 'Example using the key paginationType={2}.',
    'slider.example8': 'Example with the use of the key autoplay={true} and autoplayTime={5000}.',
    'slider.example9': 'Example using the key animationTime="10" to limit all animations to 1000ms.',
    'slider.useLayerX': {
        "description": "If the slider (in the desktop version) is moved, the value of event.layerX is used to move the slider. If the value of this key is false, the value of event.clientX is used.",
        "type": "Boolean",
        "default": "false"
    },
    'overlay.display': {
        "description": "Overlay display control.",
        "type": "Boolean",
        "default": "false"
    },
    'overlay.callback': {
        "description": "User-defined function that is called when the 'Escape' key is pressed or the dark border is clicked. This function returns an argument 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'overlay.callbackProps': {
        "description": "User-defined data that are passed as an argument for the 'callback' function.",
        "type": "Any",
        "default": "undefined"
    },
    'overlay.data': {
        "description": "User-defined data within the overlay.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'popupData.direction': {
        "description": "Direction of the popup window relative to the 'Holder'. Possible direcrions: 'left', 'right' and 'center'.",
        "type": "String",
        "default": "left"
    },
    'popupData.holderData': {
        "description": "User-defined data that are the trigger for the popup window to appear. There are pre-entered placeholders: dots, square, hamburger and hamburger-left. These names are also reserved and cannot be changed.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'popupData.animationTimeout': {
        "description": "If the developer has specified a transition-duration time other than 300 in his CSS, then the module needs this value here (to be 100% compatible). This is only relevant if you opt for a predefined placeholder : dots, square, hamburger or hamburger-left. ",
        "type": "Number",
        "default": "300"
    },
    'popupData.animation': {
        "description": "If the developer opts for a predefined placeholder: dots, square, hamburger or hamburger-left, an animation is automatically triggered. If you want to switch this off, the value must be 'false' (animation = {false}). If animtion = {true} and the menu is to be displayed, the root <div> gets the class 'data-active', when the menu is closed again, the root <div> gets the class 'data-inactive'. " ,
        "type": "Boolean",
        "default": "true"
    },
    'popupData.contentData': {
        "description": "Custom JSX or an array of objects.",
        "type": "{} [] | JSX",
        "default": "[]"
    },
    'popupData.contentData.data': {
        "description": "Custom JSX if you opt for an array of objects for the key 'contentData'. Each individual field 'data' is packed with an <li>.",
        "type": "JSX | String",
        "default": "undefined"
    },
    'popupData.example1': 'Example with a user-defined placeholder, OUTSIDE - LEFT (the placeholder is outside the data), user-defined placeholder and data in the form of an array of objects.',
    'popupData.example1a': 'Example with a user-defined placeholder, OUTSIDE - LEFT (the placeholder is outside the data), user-defined placeholder and data in the form of JSX.',
    'popupData.example2': 'Example with a user-defined placeholder, OUTSIDE - RIGHT (the placeholder is outside the data), user-defined placeholder and data in the form of an array of objects.',
    'popupData.example3': 'Example with a user-defined placeholder, OUTSIDE - CENTER (the placeholder is outside the data), user-defined placeholder and data in the form of an array of objects.',
    'popupData.example4': 'Example with a user-defined placeholder, INSIDE - LEFT (the placeholder is inside the data), user-defined placeholder and data in the form of an array of objects.',
    'popupData.example5': 'Example with a user-defined placeholder, INSIDE - RIGHT (the placeholder is within the data), user-defined placeholder and data in the form of an array of objects.',
    'popupData.example6': 'Example with a user-defined placeholder, INSIDE - CENTER (the placeholder is located within the data), user-defined placeholder and data in the form of an array of objects.',
    'popupData.example7': 'Example with the use of a predefined placeholder: DOTS. To switch off the animation (when the element has been clicked) you have to transfer the key animation={false} to the component. ',
    'popupData.example8': 'Example with the use of a predefined placeholder: SQUARE. To switch off the animation (when the element has been clicked) you have to transfer the key animation={false} to the component. ',
    'popupData.example9': 'Example with the use of a predefined placeholder: HAMBURGER. To switch off the animation (when the element has been clicked) you have to transfer the key animation={false} to the component. ',
    'popupData.example10': 'Example with the use of a predefined placeholder: HAMBURGER-RIGHT. To switch off the animation (when the element has been clicked) you have to transfer the key animation={false} to the component. ',
    'menuXY.direction': {
        "description": "Direction of the child elements to be displayed. Possible directions: 'right' and 'left'.",
        "type": "String",
        "default": "right"
    },
    'menuXY.data': {
        "description": "Array of objects.",
        "type": "{} []",
        "default": "[]"
    },
    'menuXY.data.callback': {
        "description": "User-defined function that is called as soon as a child element is clicked. This function returns an argument 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'menuXY.data.callbackProps': {
        "description": "User-defined data for the 'callback' function.",
        "type": "Any",
        "default": "undefined"
    },
    'menuXY.data.data': {
        "description": "More nested child elements.",
        "type": "{} []",
        "default": "undefined"
    },
    'menuXY.example1': "Example with the direction of the child elements: 'right'.",
    'menuXY.example2': "Example with the direction of the child elements: 'left'.",
    'menuXY.example1a': "Example with the direction of the child elements: 'right'.",
    'menuXY.example2a': "Example with the direction of the child elements: 'left'.",
    'menuDropDown.placeholder': {
        "description": "Placeholder so that the menu can be displayed.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'menuDropDown.holderLoading': {
        "description": "If the data is 'fetched', a loading placeholder is displayed during this time.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'menuDropDown.callback': {
        "description": "If the placeholder is clicked, this function is called to load the user-defined data. This callback function must return a promise. This function returns an argument: 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'menuDropDown.callbackProps': {
        "description": "Only argument for the 'callback' function.",
        "type": "Any",
        "default": "undefined"
    },
    'menuDropDown.closeOnEsc': {
        "description": "If the end user presses the 'Esc' key, the menu is closed. If you want to switch this feature off, the value of this key should be set to 'false'.",
        "type": "Boolean",
        "default": "true"
    },
    'menuDropDown.closeOnOutsideClick': {
        "description": "If the end user clicks outside of the menu, the menu will be closed. If you want to turn this feature off, the value of this key should be set to 'false'.",
        "type": "Boolean",
        "default": "true"
    },
    'menuDropDown.example1': 'Example with an instant display of data.',
    'menuDropDown.example2': 'Example with a load placeholder in the time when the data is loaded.',
    'listSwitch.data': {
        "description": "Predefined data that are already available when the component is loaded.",
        "type": "String | Jsx",
        "default": "<empty string>"
    },
    'listSwitch.data': {
        "description": "Predefined data that are already available when the component is loaded. This only applies if the key 'callback' is undefined!",
        "type": "String | Jsx",
        "default": "<empty string>"
    },
    'listSwitch.data.text': {
        "description": "JSX to be displayed",
        "type": "String | Jsx",
        "default": "undefined"
    },
    'listSwitch.data.next': {
        "description": "If this mother element contains child element (data: []), this JSX is displayed as the button 'next'.",
        "type": "String | Jsx",
        "default": "<"
    },
    'listSwitch.data.previous': {
        "description": "The JSX to be displayed, the 'back' button, within child elements.",
        "type": "String | Jsx",
        "default": ">"
    },
    'listSwitch.data.callback': {
        "description": "If the end user clicks on an element, this function is called. This function returns the value of 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'listSwitch.data.callbackProps': {
        "description": "Single argument of the 'callback' function.",
        "type": "Any",
        "default": "undefined"
    },
    'listSwitch.previous': {
        "description": "If the user clicks on a nested element, the data of this key are provided as a 'back' button. The back button can (if available) be overwritten by the child elements!",
        "type": "String | Jsx",
        "default": "<"
    },
    'listSwitch.next': {
        "description": "If element contains nested child elements, the data of this key are provided as a 'next' button. The next button can (if available) be overwritten by the child elements!",
        "type": "String | Jsx",
        "default": ">"
    },
    'listSwitch.title': {
        "description": "First title of the data. All other titles are shown from the respective element clicked (the key 'text' of the child element clicked).",
        "type": "String | Jsx",
        "default": "<empty string>"
    },
    'listSwitch.arrowNextClick': {
        "description": "Should the click event be attached to the 'next' button or globally on the entire element. Only applies to the 'next' button.",
        "type": "Boolean",
        "default": "false"
    },
    'listSwitch.arrowNextClick': {
        "description": "Should the click event be attached to the 'next' button or globally on the entire element. Only applies to the 'next' button.",
        "type": "Boolean",
        "default": "false"
    },
    'listSwitch.animation': {
        "description": "Moving within the mother-child element should be animated.",
        "type": "Boolean",
        "default": "true"
    },
    'listSwitch.animationTimeout': {
        "description": "Movement within the mother-child element should be restored (end of animation) after this time (ms). Must be compatible with the (react-revolution) CSS file ($ default-transition: 300ms).",
        "type": "Number",
        "default": "350"
    },
    'listSwitch.animationTimeout': {
        "description": "Movement within the mother-child element should be restored (end of animation) after this time (ms). Must be compatible with the (react-revolution) CSS file ($ default-transition: 300ms).",
        "type": "Number",
        "default": "350"
    },
    'listSwitch.closeAfterCallback': {
        "description": "If a (nested) element contains a 'callback' function (this is not the root 'callback' function), the displayed data is closed after this function is called.",
        "type": "Boolean",
        "default": "false"
    },
    'listSwitch.resetSlides': {
        "description": "When the displayed data is closed again, the content of the switched data is reset to the beginning.",
        "type": "Boolean",
        "default": "false"
    },
    'listSwitch.resetData': {
        "description": "When the displayed data is closed again, the data received from the component is deleted, so the 'callback' function is activated again to reload (possibly new) data when the user displays the data again . ",
        "type": "Boolean",
        "default": "false"
    },
    'listSwitch.example1': 'Example with a provision of data directly when the component is loaded.',
    'listSwitch.example2': 'Example with a provision of data only after the user has clicked on the placeholder. If the value of the "resetData" key is not true, the data is only loaded once, after which the data is always available without having to load the data again.',
    'stepGen.maxSteps': {
        "description": "The maximum of steps.",
        "type": "Number",
        "default": "undefined"
    },
    'stepGen.stepsData': {
        "description": "Array of objects. Each single index of this array, are the index if the step.",
        "type": "{}",
        "default": "[]"
    },
    'stepGen.stepsData.data': {
        "description": "Custom data of the step.",
        "type": "Boolean",
        "default": "false"
    },
    'stepGen.stepsData.top': {
        "description": "Display custom data on the top of the step.",
        "type": "Boolean",
        "default": "false"
    },
    'stepGen.stepsData.bottom': {
        "description": "Display custom data on the bottom of the step.",
        "type": "Boolean",
        "default": "false"
    },
    'stepGen.newStepData': {
        "description": "Function to provide custom data for each new generated step. The minimal structure of the return value has to be { data: any = undefined, ?top: boolean = false, ?bottom: boolean = false }.",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.mountCallback': {
        "description": "Callback function after componentDidMount (called only once) to save the generated uuid`s for each single step. The generation of the uuid`s are provided by the component. The returning value is 'stepsData' with the new 'uuid'.",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.stepRemovedCallback': {
        "description": "Callback function if a step has been removed to update your provided 'stepsData'.",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.callback': {
        "description": "User-defined function that is always called as soon as a change is made in one of the input / text fields. This function returns 2 arguments. Argument 1: callbackProps, argument 2: the current values ​​(array of objects) of the input / Textar fields. ",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.callbackProps': {
        "description": "The value of the first argument of the 'callback' function.",
        "type": "Any",
        "default": "undefined"
    },
    'stepGen.defaultSteps': {
        "description": "Number of fields to be generated.",
        "type": "Number",
        "default": "3"
    },
    'stepGen.addNewStepOn': {
        "description": "If the user is in the field x, the system checks how many fields are left. If the number of remaining fields is less than or equal to this value, an additional field is automatically added. If the value of this key is 0, auto generation is ignored. ",
        "type": "Number",
        "default": "0"
    },
    'stepGen.addStep': {
        "description": "Custom JSX for the user so that another field can be added manually.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'stepGen.removeStep': {
        "description": "Custom JSX for the user, so that a single field can be deleted again.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'stepGen.stepPrefix': {
        "description": "Prefix for the user of the respective step.",
        "type": "String | JSX",
        "default": "Step"
    },
    'stepGen.displayStepCount': {
        "description": "The count of the respective step. Is shown after the prefix.",
        "type": "Boolean",
        "default": "false"
    },
    'stepGen.useInput': {
        "description": "Instead of a text field, an input field is generated if the value of this key is 'true'.",
        "type": "Boolean",
        "default": "false"
    },
    'stepGen.onEnter': {
        "description": "If the user presses 'Enter' (within an input / textarea field), this function is called with the argument 'onEnterProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.onEnterProps': {
        "description": "The only argument for the 'onEnter' function.",
        "type": "Any",
        "default": "undefined"
    },
    'stepGen.onEsc': {
        "description": "If the user presses 'Esc' (within an input / textarea field), this function is called with the argument 'onEscProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.onEscProps': {
        "description": "The only argument for the 'onEsc' function.",
        "type": "Any",
        "default": "undefined"
    },
    'stepGen.removeStepAlignTop': {
        "description": "The JSX for deleting a step is displayed above the individual step. If the value is 'false', the delete button is displayed below.",
        "type": "Boolean",
        "default": "true"
    },
    'stepGen.submit': {
        "description": "A 'submit' button that is generated below the steps.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'stepGen.submitCallback': {
        "description": "User-defined function that is called after the user has clicked the 'submit' button. This function returns an argument 'submitCallbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.submitCallbackProps': {
        "description": "The only argument for the 'submitCallback' function.",
        "type": "Any",
        "default": "undefined"
    },
    'stepGen.resetOnSubmit': {
        "description": "After the user has clicked the 'submit' button, the entire component will be restored to its original state.",
        "type": "Boolean",
        "default": "false"
    },
    'stepGen.example1': 'Example with the generation of 3 fields (at the start), one delete and one submit button. Open your developer console to watch the changes. ',
    'stepGen.example2': 'Example with user-defined data for every step except the second.',
    'stepGenDragDrop.placeholderPosition': {
        "description": "If the user starts dragging an element and is over the drop position then generate the PLACEHOLDER on the site of the hovered element. Available options: 'top' (placeholder are always on the top of an hovered item), 'bottom' (placeholder are always on the bottom of an hovered item) and 'auto' (placeholder are detected automatically).",
        "type": "String",
        "default": "auto"
    },
    'stepGenDragDrop.placeholder': {
        "description": "Placeholder to be displayed during a drag phase.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'stepGenDragDrop.stepReorderCallback': {
        "description": "After the user has done drag & drop, the user-defined data 'stepsData' will be rearranged.",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.data': {
        "description": "Array of objects to use predefined data. If data is available, the value of the key 'defaultSteps' is ignored.",
        "type": "{} []",
        "default": "[]"
    },
    'stepGen.data.value': {
        "description": "The value of a single field.",
        "type": "String | Number",
        "default": "undefined"
    },
    'stepGenDragDrop.example1': 'Example with the generation of 3 fields (at the start), a delete and submit button, a self-defined placeholder and the placeholder in the direction of "auto". Open your developer console to watch the changes.',
    'timelineList.direction': {
        "description": "Direction of the timeline. Possible directions: 'right' and 'left'.",
        "type": "String",
        "default": "left"
    },
    'timelineList.data': {
        "description": "Object of objects.",
        "type": "{}",
        "default": "undefined"
    },
    'timelineList.data.props': {
        "description": "HTML arguments for the key of the object (time - title of the respective timeline entry).",
        "type": "{}",
        "default": "undefined"
    },
    'timelineList.data.data': {
        "description": "Object.",
        "type": "{}",
        "default": "undefined"
    },
    'timelineList.data.icon': {
        "description": "JSX to be displayed instead of the icon.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'timelineList.data.iconProps': {
        "description": "HTML arguments for the icon HTML element.",
        "type": "{}",
        "default": "undefined"
    },
    'timelineList.data.dataProps': {
        "description": "HTML arguments for the data HTML element.",
        "type": "{}",
        "default": "undefined"
    },
    'timelineList.data.callback': {
        "description": "Callback function after a user clicks on the 'Icon'. This function returns a single argument: 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'timelineList.data.callbackProps': {
        "description": "Single argument of the 'callback' function.",
        "type": "Any",
        "default": "undefined"
    },
    'timelineList.data.data.data': {
        "description": "User-defined JSX data of the individual timeline entry.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'timelineList.timelineStart': {
        "description": "User-defined JSX data that is displayed at the beginning of the timeline (beginning of the line at the top).",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'timelineList.timelineEnd': {
        "description": "User-defined JSX data that is displayed at the end of the timeline (end of the line at the bottom).",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'timelineList.example1': 'Example with the timeline on the left and using the keys: "timelineStart" and "timelineEnd". Open your developer console to watch the logs by clicking the icons. ',
    'timelineList.example2': 'Example with the timeline on the left and without using the keys: "timelineStart" and "timelineEnd". Open your developer console to watch the logs by clicking the icons. ',
    'timelineList.example3': 'Example using props.',
    'fss.fsDisplayPagination': {
        "description": "Allow rendering of the paginator - the button 'next' and the button 'before'.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsSlideAfterMove': {
        "description": "Autoslide only after the value is greater than or equal to x (> =) than the value specified here.",
        "type": "Number",
        "default": "50"
    },
    'fss.fsDisplayPreview': {
        "description": "Allow rendering the thumbnails below the fullscreen slider.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsPreviewWidth': {
        "description": "The width (px) of a single preview image below the fullscreen slider.",
        "type": "Number",
        "default": "80"
    },
    'fss.fsPreviewHeight': {
        "description": "The height (px) of a single preview image below the fullscreen slider.",
        "type": "Number",
        "default": "80"
    },
    'fss.fsPreviewMarginX': {
        "description": "The CSS property margin-left / right (px) of a single preview image below the fullscreen slider.",
        "type": "Number",
        "default": "10"
    },
    'fss.fsPreviewMarginY': {
        "description": "The CSS property margin-top / bottom (px) of a single preview image below the fullscreen slider.",
        "type": "Number",
        "default": "10"
    },
    'fss.fsWrapDirection': {
        "description": "If true and the user is in the first slide and presses the button beforehand, navigation is carried out to the last slide and reversed. If the user is in the last slide and presses the button again, the first slide is displayed.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsPreviewToggle': {
        "description": "User-defined JSX within the button to hide or show the lower preview slider.",
        "type": "String | JSX",
        "default": "⇩"
    },
    'fss.fsToggleDirection': {
        "description": "The side of the button to be displayed in order to hide or display the lower preview slider. Possible values: 'left' or 'right'.",
        "type": "String | JSX",
        "default": "right"
    },
    'fss.fsImageAsBackground': {
        "description": "Don't put the image in an <img /> tag, but rather as a backgroundImage and render custom data within the image / slide.",
        "type": "Boolean",
        "default": "false"
    },
    'fss.fsAutoplayIcon': {
        "description": "Custom JSX to start a slideshow.",
        "type": "String | JSX",
        "default": "🎞"
    },
    'fss.fsCloseIcon': {
        "description": "Custom JSX to close the slider.",
        "type": "String | JSX",
        "default": "x"
    },
    'fss.fsUseLayerX': {
        "description": "If the slider (in the desktop version) is moved, the value of event.layerX is used to move the slider. If the value of this key is false, the value of event.clientX is used.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsAutoplayTime': {
        "description": "Time delay (timeout) for every next slide after the previous one or after the component has been mounted.",
        "type": "Number",
        "default": "5000"
    },
    'fss.fsAutoplayNext': {
        "description": "If true then the slide direction is right, if false then left.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsAnimationTime': {
        "description": "Sliders transformation time for autoplay and mouse / touch move. Possible values ​​from: '01' to '30' (01 = 100ms, 20 = 2000ms, 30 = 3000ms).",
        "type": "String",
        "default": "05"
    },
    'fss.fsNext': {
        "description": "User-defined Jsx within the button: next.",
        "type": "String | JSX",
        "default": ">"
    },
    'fss.fsPrevious': {
        "description": "User-defined Jsx within the button: earlier.",
        "type": "String | JSX",
        "default": "<"
    },
    'fss.fsAutoplayStopIcon': {
        "description": "Custom JSX to end a slideshow.",
        "type": "String | JSX",
        "default": "🛑"
    },
    'fss.fsDisplayDots': {
        "description": "Allow rendering of navigation points within the paginator.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsAutoplayStopOnLast': {
        "description": "If the slider is at the end / beginning (depending on the value of the key 'fsAutoplayNext'), the slideshow will end.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsDisplayDotsIndex': {
        "description": "Allow rendering of the single paginator index.",
        "type": "Boolean",
        "default": "false"
    },
    'fss.fsCloseOnEsc': {
        "description": "When you press the 'Escape' key, the fullscreen slider should continue to be displayed or the display should be interrupted.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsActive': {
        "description": "When you click on an image, a fullscreen slider will be generated.",
        "type": "Boolean",
        "default": "false"
    },
    'fss.example1': 'Slider example with fullscreen support. The full screen is activated as soon as you click on a photo. The slider can be closed with the ESC key or the X button. ',
    'fss.example2': 'The slider can be closed with the ESC key or the X button.',
    'ribbon.directionX': {
        "description": "Side of the ribbon on the X-axis. Possible X-orientations: 'left' and 'right'.",
        "type": "String",
        "default": "right"
    },
    'ribbon.directionY': {
        "description": "Side of the ribbon on the Y-axis. Possible Y-orientations: 'top' and 'bottom'.",
        "type": "String",
        "default": "top"
    },
    'ribbon.background': {
        "description": "Background color of the ribbon.",
        "type": "String",
        "default": "<empty string>"
    },
    'ribbon.color': {
        "description": "Color of the ribbon.",
        "type": "String",
        "default": "<empty string>"
    },
    'ribbon.ribbon': {
        "description": "Text of the ribbon.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'ribbon.content': {
        "description": "Contents of the box.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'ribbon.example1': 'Example with the direction: TOP | RIGHT. ',
    'ribbon.example2': 'Example with the direction: TOP | LEFT. ',
    'ribbon.example3': 'Example with the direction: BOTTOM | RIGHT. ',
    'ribbon.example4': 'Example with the direction: BOTTOM | LEFT. ',
    'ribbon.ribbons': {
        "description": "Array excluding objects.",
        "type": "{} []",
        "default": "[]"
    },
    'ribbonM.example1': 'Example with the 2 directions: TOP | RIGHT and BOTTOM | LEFT. ',
    'ribbonM.example1': 'Example with the 2 directions: TOP | LEFT and BOTTOM | RIGHT. ',
    'ribbonM.example3': 'Example with all directions.',
    'popupHover.animation': {
        "description": "If the developer opts for a predefined placeholder: dots, square, hamburger or hamburger-left, an animation is automatically triggered. If you want to switch this off, the value must be 'false' (animation = {false}). If animtion = {true} and the menu is to be displayed, the root <div> gets the class 'data-active', when the menu is closed again, the root <div> gets the class 'data-inactive'. " ,
        "type": "Boolean",
        "default": "true"
    },
    'popupHover.direction': {
        "description": "Direction of the popup window relative to the 'Holder' Possible directions: 'left', 'right' or 'center'.",
        "type": "String",
        "default": "left"
    },
    'popupHover.holderData': {
        "description": "User-defined data that are the trigger for the popup window to appear. There are pre-entered placeholders: dots, square, hamburger and hamburger-left. These names are also reserved and cannot be changed.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'popupHover.animationTimeout': {
        "description": "If the developer specified a transition-duration time other than 300 in his CSS, then the module needs this value here (to be 100% compatible). This is only relevant if you opt for a predefined placeholder : dots, square, hamburger or hamburger-left. ",
        "type": "Number",
        "default": "300"
    },
    'popupHover.contentData': {
        "description": "Custom JSX or an array of objects.",
        "type": "{} [] | JSX",
        "default": "[]"
    },
    'popupHover.contentData.data': {
        "description": "Custom JSX if you opt for an array of objects for the key 'contentData'. Each individual field 'data' is packed with an <li>.",
        "type": "JSX | String",
        "default": "undefined"
    },
    'popupHover.useMouseEnter': {
        "description": "Use the 'onMouseEnter' event handler to display the data. If the value of this key is 'false' then the event handler 'onMouseOver' is used.",
        "type": "Boolean",
        "default": "true"
    },
    'popupHover.description': "If a user is able to hover over the placeholder, the data to be displayed is displayed. If the key animation = {true}, the data holder <div> also receives the class' menu-active '. If a user navigates away again with the mouse (from the placeholder or the data) and the key is animation = {true}, the data holder <div> also receives the class' menu-inactive'.",
    'popupHover.example1': 'Example with the alignment of the data to be displayed on the left side.',
    'popupHover.example2': 'Example with the alignment of the data to be displayed on the right side.',
    'popupHover.example3': 'Example with the alignment of the data to be displayed which will be centered.',
};

export default EN;

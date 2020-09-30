# React Revolution

## Website: https://react-revolution.j.pl/

### React Revolution is a light javascript library to generate interactive modules for react project.

### Installation 
- npm i react-revolution
- yarn add react-revolution

### Example of usage

```
import { Breadcrumbs } from 'react-revolution';

<Breadcrumbs 
    hashRouter={true}
/>
```

### Modules

Accordion
- [https://react-revolution.j.pl/#/react-revolution-accordion](https://react-revolution.j.pl/#/react-revolution-accordion)

Articles
- [https://react-revolution.j.pl/#/react-revolution-articles](https://react-revolution.j.pl/#/react-revolution-articles)

ArticlesImages
- [https://react-revolution.j.pl/#/react-revolution-articles-images](https://react-revolution.j.pl/#/react-revolution-articles-images)

Breadcrumbs
- [https://react-revolution.j.pl/#/react-revolution-breadcrumbs](https://react-revolution.j.pl/#/react-revolution-breadcrumbs)

Cards
- [https://react-revolution.j.pl/#/react-revolution-cards](https://react-revolution.j.pl/#/react-revolution-cards)

CardsScroll
- [https://react-revolution.j.pl/#/react-revolution-cards-scroll](https://react-revolution.j.pl/#/react-revolution-cards-scroll)

CardsScrollCallback
- [https://react-revolution.j.pl/#/react-revolution-cards-scroll-callback](https://react-revolution.j.pl/#/react-revolution-cards-scroll-callback)

Clipboard
- [https://react-revolution.j.pl/#/react-revolution-clipboard](https://react-revolution.j.pl/#/react-revolution-clipboard)

Clouds404
- [https://react-revolution.j.pl/#/react-revolution-clouds-404](https://react-revolution.j.pl/#/react-revolution-clouds-404)

CloudsMountains404
- [https://react-revolution.j.pl/#/react-revolution-clouds-mountains-404](https://react-revolution.j.pl/#/react-revolution-clouds-mountains-404)

Container
- [https://react-revolution.j.pl/#/react-revolution-container](https://react-revolution.j.pl/#/react-revolution-container)

CustomSuggestion
- [https://react-revolution.j.pl/#/react-revolution-custom-suggestion](https://react-revolution.j.pl/#/react-revolution-custom-suggestion)

FullScreenListArray
- [https://react-revolution.j.pl/#/react-revolution-fullscreen-list-array](https://react-revolution.j.pl/#/react-revolution-fullscreen-list-array)

FullScreenListObject
- [https://react-revolution.j.pl/#/react-revolution-fullscreen-list-object](https://react-revolution.j.pl/#/react-revolution-fullscreen-list-object)

FullScreenOverlay
- [https://react-revolution.j.pl/#/react-revolution-fullscreen-overlay](https://react-revolution.j.pl/#/react-revolution-fullscreen-overlay)

GlobalMessages
- [https://react-revolution.j.pl/#/react-revolution-global-messages](https://react-revolution.j.pl/#/react-revolution-global-messages)

Icons
- [https://react-revolution.j.pl/#/react-revolution-icons](https://react-revolution.j.pl/#/react-revolution-icons)

InputAnimation
- [https://react-revolution.j.pl/#/react-revolution-input-animation](https://react-revolution.j.pl/#/react-revolution-input-animation)

InputFile
- [https://react-revolution.j.pl/#/react-revolution-input-file](https://react-revolution.j.pl/#/react-revolution-input-file)

InputFileDragDrop
- [https://react-revolution.j.pl/#/react-revolution-input-file-drag-drop](https://react-revolution.j.pl/#/react-revolution-input-file-drag-drop)

InputSuggestionArray
- [https://react-revolution.j.pl/#/react-revolution-input-suggestion-array](https://react-revolution.j.pl/#/react-revolution-input-suggestion-array)

InputSuggestionObject
- [https://react-revolution.j.pl/#/react-revolution-input-suggestion-object](https://react-revolution.j.pl/#/react-revolution-input-suggestion-object)

Lightbulb404
- [https://react-revolution.j.pl/#/react-revolution-lightbulb-404](https://react-revolution.j.pl/#/react-revolution-lightbulb-404)

LoadingBoxTop
- [https://react-revolution.j.pl/#/react-revolution-loading-box-top](https://react-revolution.j.pl/#/react-revolution-loading-box-top)

LoadOnScroll
- [https://react-revolution.j.pl/#/react-revolution-load-on-scroll](https://react-revolution.j.pl/#/react-revolution-load-on-scroll)

MenuClickHorizontal
- [https://react-revolution.j.pl/#/react-revolution-menu-click-horizontal](https://react-revolution.j.pl/#/react-revolution-menu-click-horizontal)

PagerStatic
- [https://react-revolution.j.pl/#/react-revolution-pager-static](https://react-revolution.j.pl/#/react-revolution-pager-static)

PagerDynamic
- [https://react-revolution.j.pl/#/react-revolution-pager-dynamic](https://react-revolution.j.pl/#/react-revolution-pager-dynamic)

PopupBox
- [https://react-revolution.j.pl/#/react-revolution-popup-box](https://react-revolution.j.pl/#/react-revolution-popup-box)

ReadMore
- [https://react-revolution.j.pl/#/react-revolution-scroll-to](https://react-revolution.j.pl/#/react-revolution-read-more)

ReadMoreCallback
- [https://react-revolution.j.pl/#/react-revolution-scroll-to](https://react-revolution.j.pl/#/react-revolution-read-more-callback)

ScrollTo
- [https://react-revolution.j.pl/#/react-revolution-scroll-to](https://react-revolution.j.pl/#/react-revolution-scroll-to)

SideBar
- [https://react-revolution.j.pl/#/react-revolution-sidebar](https://react-revolution.j.pl/#/react-revolution-sidebar)

SourceCode
- [https://react-revolution.j.pl/#/react-revolution-source-code](https://react-revolution.j.pl/#/react-revolution-source-code)

Table
- [https://react-revolution.j.pl/#/react-revolution-table](https://react-revolution.j.pl/#/react-revolution-table)

TextWriter
- [https://react-revolution.j.pl/#/react-revolution-text-writer](https://react-revolution.j.pl/#/react-revolution-text-writer)

Water404
- [https://react-revolution.j.pl/#/react-revolution-water-404](https://react-revolution.j.pl/#/react-revolution-water-404)


### Functions


**disableHtmlScroll** - The HTML tag will have the attributes: class = "overflow-hidden" and style = "overflow: hidden;" so that a user is not allowed to scroll which of the website.

- [https://react-revolution.j.pl/#/react-revolution-function-disable-html-scroll](https://react-revolution.j.pl/#/react-revolution-function-disable-html-scroll)

**enableHtmlScroll** - The class "overflow-hidden" and the style: "overflow: hidden;" are removed from the HTML tag. The user again has the option to scroll within the website.

- [https://react-revolution.j.pl/#/react-revolution-function-enable-html-scroll](https://react-revolution.j.pl/#/react-revolution-function-enable-html-scroll)

**scrollTopListener** - Scroll to the top of the current page on each location (window.location) change. Initial the function has to be called (best way is to call the function on componentDidMount) to initialise the location change listener. This function take 3 additional arguments. Argment 1: time (in miliseconds) to scroll to top of the page, argument 2: scroll behavior - 'auto','smooth','inherit','initial','unset', argument 3: remove the listener (boolean). To remove the listener pass to the 3 argument the value true (default the value is set to false).

- [https://react-revolution.j.pl/#/react-revolution-function-scroll-top-listener](https://react-revolution.j.pl/#/react-revolution-function-scroll-top-listener)

**urlExtract** - Extracts the URL on individual paths of the window.location, key and its values. The function receives 1 optional argument: isHashRouter (boolean) - by default the transferred value is undefined. This function extracts paths and key values for the window.location: "href", "hash" and "path".

- [https://react-revolution.j.pl/#/react-revolution-function-url-extract](https://react-revolution.j.pl/#/react-revolution-function-url-extract)

**uuid** - Extracts the URL on individual paths of the window.location, key and its values. The function receives 1 optional argument: isHashRouter (boolean) - by default the transferred value is undefined. This function extracts paths and key values for the window.location: "href", "hash" and "path".

- [https://react-revolution.j.pl/#/react-revolution-function-uuid](https://react-revolution.j.pl/#/react-revolution-function-uuid)

### ChangeLog

- v1.1.7
    - Added new module: Articles
    - Added new module: ArticlesImages

- v1.1.8    
    - Added new module: ReadMore
    - Added new module: ReadMoreCallback

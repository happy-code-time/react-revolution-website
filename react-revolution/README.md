# React Revolution

React Revolution is a light javascript library to generate interactive modules for react projects.

## Website: 

[https://react-revolution.j.pl/](https://react-revolution.j.pl/)

### Installation 
- npm i react-revolution
- yarn add react-revolution

### Desctructuring module import

```
import { Breadcrumbs } from 'react-revolution';
```

### Default module import

```
import Breadcrumbs from 'react-revolution/Breadcrumbs';
```

### Additional sass file import
```
@import 'react-revolution/Breadcrumbs/scss/index.scss';
```

### Additional compiled sass file import
```
@import 'react-revolution/Breadcrumbs/css/index.scss';
```

### Example

```
import { Breadcrumbs } from 'react-revolution';

// or default import 
// import Breadcrumbs from 'react-revolution/Breadcrumbs';

<Breadcrumbs 
    hashRouter={true}
/>
```

### Available modules

    Accordion
    Articles
    ArticlesImages
    Astronaut404
    Breadcrumbs
    Cards
    CardsScroll
    CardsScrollCallback
    Clouds404
    CloudsMountains404
    Container
    CustomSuggestion
    DarkLines404
    DragDropArea
    DragDropList
    FullScreenListArrays
    FullScreenListObject
    FullScreenOverlay
    GlobalMessages
    Icons
    InputAnimation
    InputFile
    InputFileDragDrop
    InputSuggestionArray
    InputSuggestionObject
    Lightbulb404
    ListSwitch
    LoadingBoxTop
    LoadOnScroll
    Menu
    MenuDropDown
    MenuHeight
    MenuHoverX
    MenuHoverY
    Modal
    Overlay
    PagerDynamic
    PagerStatic
    Picture404
    PopupBox
    PopupData
    ReadMore
    ReadMoreCallback
    Ribbon
    RibbonMultiple
    ScrollTo
    SideBar
    Slider
    SliderCards
    SliderFullscreen
    SliderItems
    SourceCode
    Stars
    Steps
    StepsGenerator
    StepsGeneratorDragDrop
    Table
    TextWriter
    Timeline
    TimelineList
    Water404

### Available functions

    addGlobalMessage
    disableHtmlScroll
    enableHtmlScroll
    isObject
    scrollTopListener
    urlExtract
    uuid
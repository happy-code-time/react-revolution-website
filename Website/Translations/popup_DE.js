const DE = {
    openSourceText: 'Ein kostenloses Open Source Projekt',
    changeLanguageTitle: 'Sprache ändern',
    changeTintTitle: 'Webseiten Layout ändern',
    lightTheme: 'Hell',
    darkTheme: 'Dunkel',
    searchForModule: 'Module Suche',
    clickToNavToTheModule: 'Navigieren Sie zu diesem Modul',
    fast: 'Schnell',
    light: 'Leicht',
    interactive: 'Interaktiv',
    exampleOfUsage: 'Beispiel Benutzung',
    copyToClipboard: 'Zwischenspeichern',
    installation: 'Installation',
    documentation: 'Dokumenation',
    modules: 'Module',
    getStarted: 'Anfangen',
    installation: 'Installation',
    feedback: 'Feedback',
    usefullLinks: 'Nützliche Links',
    rights: 'Rechte',
    rigthsText: 'Alle Rechte vorbehalten',
    author: 'Author',
    exampleTitle: 'Beispiel',
    reactCodeTitle: 'React Kod',
    cssCodeTitle: 'Css Kod',
    jsCodeTitle: 'Javascript Kod',
    loading: 'Laden...',
    keyUsageTitle: 'Keys Erläuterungen',
    /**
     * Module keys
     */
    "id": {
        "description": 'Setzte eine id für das Root Element dieses Modules.',
        "type": 'String',
        "default": '<empty string>'
    },
    "class": {
        "description": 'Ersetze die Hauptklasse gegen eine eigene. Falls dies genutzt wird, greifen die Standard Styles, die das Module mitbringt, nicht mehr.',
        "type": 'String',
        "default": ''
    },
    "addClass": {
        "description": 'Setzte eine zusätzliche Klasse für das Root Element dieses Modules.',
        "type": 'String',
        "default": '<empty string>'
    },
    "accordion.animation": {
        "description": "Eine Animation wärend des aufklappens und zuklappens des Accordions. Animationen die verwendet werden können: 'height', 'scale', 'opacity'.",
        "type": "String",
        "default": "undefined"
    },
    "accordion.data": {
        "description": "Hauptdaten",
        "type": "Array",
        "default": "[]"
    },
    'accordion.data.text' : {
        "description": "Der anzuzeigende Text bevor ein Kind Element aufgeklappt wird.",
        "type": "String",
        "default": "<empty string>"
    },
    'accordion.data.dataToggle' : {
        "description": "Der anzuzeigende Inhalt eines Elementes nachdem das Mutter Element aufgeklappt wurde.",
        "type": "String | JSX ",
        "default": "<empty string>"
    },
    'accordion.data.toggled' : {
        "description": "Ist das Element ge-toggelt order nicht.",
        "type": "Boolean",
        "default": "False"
    },
    'props' : {
        "description": "Die HTML Eigenschaften des HTML Elementes.",
        "type": "Object",
        "default": "{}"
    },
    "itemsPerLine": {
        "description": "Wie viele Elemente sollen in einer Zeile angezeigt werden.",
        "type": "Number",
        "default": "3"
    },
    "mediaBreak": {
        "description": "Falls dieser Wert mitgegeben wird, wird das Module interaktiv. Standard mäßig wird das Mutter Element mit der Klasse gerendert: 'flex-row'. Bei der Erreichung des Media Break Points, wird das Mutter Element neu gerender mit der Klasse: flex-column.",
        "type": "Number",
        "default": "undefined"
    },
    "defaultItems": {
        "description": "Wie viele Elemente sollen direkt beim Laden angezeigt werden.",
        "type": "Number",
        "default": "3"
    },
    "loadMoreCallback": {
        "description": "Falls das Root Element bis ganz nach unten ge-scrollt wurde, können Daten nachgeladen werden. Falls der Callback 'break' als Antwort liefert, wird der Scroll Event von dem Root Element entfernt.",
        "type": "Function",
        "default": "undefined"
    },
    "loadMoreLoadingIcon": {
        "description": "Wärend zusätzliche Elemente geladen werden, kann ein eigen definiertes JSX Element gerendert werden.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "customsuggestion.callback": {
        "description": "Nachdem eine Änderung im Input Feld statt findet, wird diese Übergebene Funktion aufgerufen mit 1 Paramater: Wert des Input Feldes. Der Callback muss eine Liste and Objecten zurück liefern. Die Struktur ist im 'suggestions' Key beschrieben.",
        "type": "Function",
        "default": "undefined"
    },
    "customsuggestion.suggestions": {
        "description": "Liste von Objecten",
        "type": "Array",
        "default": "undefined"
    },
    "customsuggestion.suggestions.href": {
        "description": "Der Benutzerdefinierte Vorschlag wird mit einem A Tag umfasst, damit der Benutzer direkt einem Vorschlag folgen kann.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.jsx": {
        "description": "Benutzerdefiniertes HTML das der Endanwender sieht.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.props": {
        "description": "Die HTML Eigenschaften des HTML Elementes.",
        "type": "Object",
        "default": "{}"
    },
    "customsuggestion.suggestions.onClickValue": {
        "description": "Wert, der in das Input Feld geschrieben werden soll, wenn ein Click Event statt findet.",
        "type": "String",
        "default": "undefined"
    },
    "clipboard": {
        "description": "Daten die in den Cipboard zwischen gespeichert werden sollen. Wenn diese Daten vom Typ kein String sind, werden diese in den Zwischenspeicher mit JSON.strigify gespeichert.",
        "type": "String | Array | Object | Number",
        "default": "undefined"
    },
    "plainValue": {
        "description": "Der Wert des Input Feldes.",
        "type": "String",
        "default": "<empty string>"
    },

    "inputsuggestionarray.callbackSelection": {
        "description": "Benutzerdefinierte Funktion dam dem ein Element ausgewählt wurde. Diese Function liefert 1 Argument. Argument 1: Liste der Ausgewählten Elemente (angeklickten Element).",
        "type": "Function",
        "default": "undefined"
    },
    "inputsuggestionobject.callbackSelection": {
        "description": "Benutzerdefinierte Funktion dam dem ein Element ausgewählt wurde. Diese Function liefert 1 Argument. Argument 1: Liste der Ausgewählten Elemente (angeklickten Element).",
        "type": "Function",
        "default": "undefined"
    },
    "placeholder": {
        "description": "Platzhalter.",
        "type": "String",
        "default": "<empty string>"
    },
    "inputType": {
        "description": "Typ eines Inptu Feldes.",
        "type": "String",
        "default": "text"
    },
    "callbackRerender": {
        "description": "Wenn true, dann hört das Modul nur auf den bergebenen State und die State Änderungen. Wenn false, dann erwartet das Modul Daten aus dem Callback die weiter verarbeitet werden.",
        "type": "Boolean",
        "default": "False"
    },
    "allowOnlyAZ": {
        "description": "Falls true, dann wird folgendes Regex auf den Wert der Input Feldes angewandt: (/[^a-zA-Z ]/gmi).",
        "type": "Boolean",
        "default": "False"
    },
    "display": {
        "description": "Soll das Element angezeigt werden oder nicht.",
        "type": "Boolean",
        "default": "False"
    },
    "displayLineNumber": {
        "description": "Erlaube das rendern, auf der Linken Seite, jeder Zeilen Nummer.",
        "type": "Boolean",
        "default": "False"
    },
    "iconClose": {
        "description": "Benutzer definiertes HTML mit der Aktion das Module 'zu schließenden'.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "inputActive": {
        "description": "Soll das Input feld mit angezeigt werden oder nicht.",
        "type": "Boolean",
        "default": "False"
    },
    "noDataText": {
        "description": "Falls keine Elemente gefunden wurden, dann wird dieser Text angezeigt.",
        "type": "String",
        "default": "<empty string>"
    },
    "callbackClose": {
        "description": "Benutzer definierte Funktion, die ohne Argumente aufgerufen wird, nachdem dass Element geschlossen wurde.",
        "type": "Function",
        "default": "undefined"
    },
    "closeOnCallback": {
        "description": "Falls ein Element aus der List ausgewählt wird, soll das Modul auch geschlossen werden oder soll die Anzeige des Modules beibehaltet werden.",
        "type": "Boolean",
        "default": "False"
    },
    "closeOnDimmedClick": {
        "description": "Bei dem Anklicken des 'dunklen' HTML`s, das ausserum des Content Bereiches sicht befindet, wird das Module icht mehr angezeigt.",
        "type": "Boolean",
        "default": "False"
    },
    "closeOnEsc": {
        "description": "Beim Drücken der 'Escape' Taste, soll das Module eiterhin angezeigt werden oder die Anzeige soll unterbrochen werden.",
        "type": "Boolean",
        "default": "False"
    },
    "inputEmptyOnCallback": {
        "description": "Nachdem ein Element aus der List ausgewählt wurde, soll das Input Feld gelehrt werden oder der Wert des Input Feldes soll unverändert bleiben.",
        "type": "Boolean",
        "default": "False"
    },
    "closeOnClick": {
        "description": "",
        "type": "String",
        "default": ""
    },
    "fullscreenOverlay.animation": {
        "description": "Eine Animation wärend des renders des Modules. Animationen die verwendet werden können: 'scale','left','top','right', 'bottom'.",
        "type": "String",
        "default": "<empty string>"
    },
    "popupbox.animation": {
        "description": "Eine Animation wärend des renders des Modules. Animationen die verwendet werden können: 'top-left', 'top-right', 'bottom-left', 'bottom-right'.",
        "type": "String",
        "default": "top-left"
    },
    "fullscreenoverlay.dimmed": {
        "description": "Soll die leicht gedunkelte Bereich angezeigt werden oder nicht.",
        "type": "Boolean",
        "default": "False"
    },
    "disableScroll": {
        "description": "Während der Anzeige des Modules, soll das HTML Element (Tag) scrollbar sein oder nicht.",
        "type": "Boolean",
        "default": "False"
    },
    "messageKey": {
        "description": "Ein unique string.",
        "type": "String",
        "default": "<empty string>"
    },
    "codeMapping": {
        "description": "Object",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.title": {
        "description": "Title der Meldung",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.displayErrorCode": {
        "description": "Soll der Kod der Übergebenene Meldung auch angezeigt werden oder nicht.",
        "type": "Boolean",
        "default": "undefined"
    },
    "codeMapping.text": {
        "description": "Object - Anzuzeigender Text als Meldung.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.text.prefix": {
        "description": "Prefix - Text vor der eigentlichen Medlung.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.text.suffix": {
        "description": "Suffix - Text nach der eigentlichen Medlung.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.text.props": {
        "description": "Die HTML Eigenschaften des HTML Elementes.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.close": {
        "description": "Object - Text um die Mitteilungs Box zu schließen.",
        "type": "Object",
        "default": "undefined"
    },
    "codeMapping.close.text": {
        "description": "Text zur Schließung der angezeigt werden soll. Auf diesem Text ist ein 'click close Event' beigefügt.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.close.props": {
        "description": "Die HTML Eigenschaften des HTML Elementes.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.link": {
        "description": "Object - Externer Link.",
        "type": "Object",
        "default": "{}"
    },

    "codeMapping.link.text": {
        "description": "Der anzuzeigender Text.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.link.text": {
        "description": "Object",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.link.useTagLink": {
        "description": "Soll der Tag <Link> benutzt werden, falls sich das Modul innerhalb eines Routes beweget oder standartmäßig eine <a> Tag.",
        "type": "Boolean",
        "default": "False"
    },
    "codeMapping.link.href": {
        "description": "Das Attribut 'to' im <Link> Tag oder 'href' im <a> Tag.",
        "type": "Object",
        "default": "{}"
    },
    "timer": {
        "description": "Interval um Fehlermeldungen anzuzeigen.",
        "type": "Number",
        "default": "2500"
    },
    "iconsType": {
        "description": "Standard angeklicktes Icons Set beim ersten rendern des Modules.",
        "type": "String",
        "default": "Smileys"
    },
    "displayTabs": {
        "description": "Sollen die Überschriften aller anzuzeigenden Icons Sets eingeblender oder ausgeblendet werden.",
        "type": "Boolean",
        "default": "True"
    },
    "renderItems": {
        "description": "Welche Elemente sollen standardmäßig angezeigt werden.",
        "type": "Array",
        "default": "'Smileys', 'Peoples','Animals', 'Plants', 'Nature', 'Food', 'Activity', 'Travel', 'Objects','Symbols', 'Currency', 'Arrows', 'Html'"
    },
    "translations": {
        "description": "Übersetzungen für die jeweiligen Überschriften der Icons Sets.",
        "type": "Object",
        "default": "undefined"
    },
    "custom": {
        "description": "Benutzer definierte Icons Sets.",
        "type": "Array",
        "default": "undefined"
    },
    "custom": {
        "description": "Benutzer definierte Icons Sets als Array aus Objekten.",
        "type": "Array",
        "default": "undefined"
    },
    "custom.title": {
        "description": "Titel des Icons Set als unique Key.",
        "type": "String",
        "default": "undefined"
    },
    "custom.data": {
        "description": "Array aus Strings mit benutzerdefinierten Icons.",
        "type": "Array",
        "default": "undefined"
    },
    "defaultClassOrigin": {
        "description": "",
        "type": "String",
        "default": ""
    },
    "animatePlaceholder": {
        "description": "Platzhalter (der dann auch animiert wird).",
        "type": "String",
        "default": "<empty string>"
    },
    "onEnter": {
        "description": "Benutzerdefinierte Funktion wenn der Benutzer Enter drückt innerhalb des Input Feldes. Diese Funktion liefert 1 Argument: der aktuelle Wert des Input Feldes.",
        "type": "Function",
        "default": "undefined"
    },
    "getValueFromCallback": {
        "description": "Wenn false, dann hört das Modul nur auf den bergebenen State und die State Änderungen. Wenn true, dann erwartet das Modul Daten aus dem Callback die weiter verarbeitet werden.",
        "type": "Boolean",
        "default": "False"
    },
    "allowedFileSize": {
        "description": "Maximale Größe einer Datei.",
        "type": "String",
        "default": "undefined"
    },
    "allowedFileSizeDescriptor": {
        "description": "Größen Vektor: B, KB, MB, GB, TB oder PT.",
        "type": "String",
        "default": "undefined"
    },
    "allowedFiles": {
        "description": "Datei Typen die erlaubt sind.",
        "type": "String",
        "default": "undefined"
    },
    "label": {
        "description": "Das anzuzeigende JSX innerhalb eine <label> Tags",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "readFileCallback": {
        "description": "",
        "type": "Function",
        "default": "undefined"
    },
    "errorCallback": {
        "description": "Benutzerdefiniertes Callback wärend eines Fehlers beim Datei Handling. Es übergibt 2 Argumente. Argument 1: Fehlertyp (unsupported_filetype, maximum_filesize_reached, unrecognized_filetype, empty_filecontent, empty_filename), Argumnt 2: 'errorCallbackCustomData'",
        "type": "Function",
        "default": "undefined"
    },
    "errorCallbackCustomData": {
        "description": "Benutzerdefinierter Wert für den 2 Argument der Funktion: 'errorCallback'.",
        "type": "String | Array | Object | Number",
        "default": "undefined"
    },
    "multiple": {
        "description": "Erlaube mehrere Dateien auf einmal.",
        "type": "Boolean",
        "default": "False"
    },
    "isDraggingData": {
        "description": "Wenn ein Benutzer aktuell im Status 'dragging' ist, dann kann eine Benutzerdefiniertes JSX angezeigt werden.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "uploadOnClick": {
        "description": "Erlaube auch das Verarbeiten von Dateien wenn der Benutzer auf den 'Drag & Drop' Bereich ein Klick Event durchführt.",
        "type": "Boolean",
        "default": "False"
    },
    "selected": {
        "description": "Ein Array mit ausgewählten Elementen aus der Liste.",
        "type": "Array",
        "default": "[]"
    },
    "suggestionsToFilter": {
        "description": "Ein Array aus Elementen die danach zur Auswahl für den Benutzer erscheinen.",
        "type": "Array",
        "default": "[]"
    },
    "emptySuggestionAfterSelection": {
        "description": "Leehre die Vorschläge nachdem der Benutzer ein Element angeklickt hat.",
        "type": "Boolen",
        "default": "True"
    },
    "sortSelected": {
        "description": "Sollen die ausgewählten Elemente Alphabetisch sortiert werden. Erlaubte Sortierungs Möglichkeiten: 'asc', 'desc'.",
        "type": "String",
        "default": "undefined"
    },
    "sortSuggestions": {
        "description": "Sollen die anzuzeigenden Elemente Alphabetisch sortiert werden. Erlaubte Sortierungs Möglichkeiten: 'asc', 'desc'.",
        "type": "String",
        "default": "undefined"
    },
    "text": {
        "description": "Der anzuzeigende Text.",
        "type": "String",
        "default": "<empty string>"
    },
    "scrollReference": {
        "description": "Wenn true, dann wird das Root Element des Modules als Referenz genommen ansonsten das HTML document Elment.",
        "type": "Boolean",
        "default": "True"
    },
    "reactRouter": {
        "description": "Wenn true - (dann bewegt sich das Module innerhalb eines Rect Router) wird ein <Link> Tag gerendert, wenn false wird ein <a> Tag gerendert.",
        "type": "Boolean",
        "default": "False"
    },
    "icon": {
        "description": "Benutzerdefiniertes JSX um das Modul zu schließen.",
        "type": "String | JSX",
        "default": ""
    },
    "iconCallback": {
        "description": "Benutzerdefiniertes Callback wenn das 'icon' angeglickt wrid.",
        "type": "Function",
        "default": "undefined"
    },
    "animationTime": {
        "description": "Zeit der Animation in ms.",
        "type": "Number",
        "default": "300"
    },
    "image": {
        "description": "JSX des Images/ Icons.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "moduleMenu": {
        "description": "Das eingebetete 'MenuClickHorizontal' Modul.",
        "type": "JSX",
        "default": "undefined"
    },
    "textLong": {
        "description": "Langer Text als Überschrift neben dem Foto.",
        "type": "String",
        "default": "undefined"
    },
    "textShort": {
        "description": "Kurzer Text unter der Überschrift und auch neben dem Foto.",
        "type": "String",
        "default": "undefined"
    },
    "href": {
        "description": "Wenn href gesetzt ist, dann wird um das Foto und den Text ein <a> gespannt.",
        "type": "String",
        "default": "undefined"
    },
    "hrefProps": {
        "description": "Die HTML Eigenschaften des <a> Tags.",
        "type": "Object",
        "default": "{}"
    },
    "title": {
        "description": "Object - Überschrift der Tabelle",
        "type": "Object",
        "default": "undefined"
    },
    "title.left": {
        "description": "Überschrift der Tabelle auf der linken Seite",
        "type": "String",
        "default": "undefined"
    },
    "title.right": {
        "description": "Überschrift der Tabelle auf der rechten Seite",
        "type": "String",
        "default": "undefined"
    },
    "speed": {
        "description": "Speed of the text writer in ms.",
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
        "description": "",
        "type": "String",
        "default": ""
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
    "timeout": {
        "description": "Start writing text after this time in ms.",
        "type": "Number",
        "default": "0"
    },
    "table.data": {
        "description": "Array aus Objekten.",
        "type": "Array",
        "default": "undefined"
    },
    "table.keysToRead": {
        "description": "Array aus String - welche Keys sollen aus dem Object ausgelesen werden.",
        "type": "Array",
        "default": "undefined"
    },
};

export default DE;

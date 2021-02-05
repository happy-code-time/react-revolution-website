import getAllAvailableModulesNames from '../Functions/getAllAvailableModulesNames';

const len = getAllAvailableModulesNames().length-1;

const DE = {
    vailableComponents: 'Komponenten',
    authorLink: 'Author',
    lastReleaseNotes: 'Letzte Version',
    fastActions: 'Hilfreiche Links',
    releaseNotesKey: 'Betroffene Komponente',
    releaseNotesDescription: 'Beschreibung',
    releaseNotes: 'Versionshinweise',
    back_404: 'Startseite',
    functions: 'Funktionen',
    components: 'Komponenten',
    description_uuid: 'Die Funktion uuid gibt immer eine eindeutige Zeichenfolge zurück, die auf einer Zufallszahl und dem aktuellen Zeitstempel basiert.',
    description_disableHtmlScroll: 'Der HTML Tag bekommt die Attribute: className="overflow-hidden" und style="overflow: hidden;" damit ein Benutzer innerhalb der Webseite nicht scrollen darf.',
    description_enableHtmlScroll: 'Dem HTML Tag wird die Klasse "overflow-hidden" entfernt und der Style: "overflow: hidden;". Der Benutzer hat wieder die Möglichkeit innerhalb der Website zu scrollen.',
    description_scrollTopListener: "Scrollen Sie bei jeder Änderung des Speicherorts (window.location) zum Anfang der aktuellen Seite. Zu Beginn muss die Funktion aufgerufen werden, um den Listener für Standortänderungen zu initialisieren. Diese Funktion benötigt 3 zusätzliche Argumente. Argument 1: Zeit (in Millisekunden), um zum Seitenanfang zu scrollen, Argument 2: Bildlaufverhalten - 'auto','smooth','inherit','initial','unset', Argument 3: Entfernen Sie den Listener (boolean). Um den Listener zu entfernen, übergeben Sie dem Wert 3 den Wert true (standardmäßig wird der Wert auf false gesetzt).",
    description_urlExtract: 'Extrahiert die URL auf einzelen Pfade des window.location, Schlüssel und dessen Werte. Die Funktion erhällt 1 optionales Argument: isHashRouter (boolean) - standardmäßig ist der übergebene Wert undefined. Diese Funktion extrahiert Pfade und Schlüsselwerte für die window.location: "href", "hash" und "path".',
    is: 'ist',
    iconTokenFrom: 'Icon entnommen von',
    openSourceText: 'Ein kostenloses Open Source Projekt',
    changeLanguageTitle: 'Sprache ändern',
    changeTintTitle: 'Layout ändern',
    lightTheme: 'Hell',
    darkTheme: 'Dunkel',
    codeTheme: 'Kod',
    searchForModule: 'Module Suche',
    clickToNavToTheModule: 'Navigieren Sie zu diesem Modul',
    fast: 'Schnell',
    light: 'Leicht',
    interactive: 'Interaktiv',
    "fast.description" : "Minimale Zeit der Generierung und Optimale Source Nutzung des Browsers.",
    "light.description" : `Diese Bibliothek hat eine Anzahl von ${len} Modulen une eine Gesamtgröße von unter 190 KB.`,
    "interactive.description" : "Jedes Modul kann frei gestaltet werden und beinhaltet benutzerdefinierte Callback Funktionen.",
    exampleOfUsage: 'Beispiel Benutzung',
    copyToClipboard: 'Zwischenspeichern',
    installation: 'Installation',
    documentation: 'Dokumenation',
    modules: 'Module',
    getStarted: 'Jetzt Anfangen',
    installation: 'Installation',
    feedback: 'Feedback',
    usefullLinks: 'Nützliche Links',
    rights: 'Rechte',
    rigthsText: 'Alle Rechte vorbehalten',
    author: 'Author',
    exampleTitle: 'Anwendungsbeispiel',
    reactCodeTitle: 'React Code',
    reactFunctionTitle: 'Funktionen Code',
    cssCodeTitle: 'CSS Code',
    jsCodeTitle: 'Javascript Code',
    loading: 'Laden...',
    keyUsageTitle: 'Keys Erläuterungen',
    "table.title.key" : 'Schlüssel',
    "table.title.description" : 'Beschreibung',
    "table.title.type" : 'Typ',
    "table.title.default" : 'Standard',
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
        "default": '<empty string>'
    },
    "addClass": {
        "description": 'Setzte eine zusätzliche Klasse für das Root Element dieses Modules.',
        "type": 'String',
        "default": '<empty string>'
    },
    "inputanimation.callback": {
        "description": "Benutzerdefinierte definierte Funktionen werden jedes Mal aufgerufen, wenn sich die Eingabe geändert hat. Diese Funktion gibt 1 Argument zurück - den aktuellen Wert des Eingabefelds.",
        "type": "Funktion",
        "default": "undefined"
    },
    "accordion.animation": {
        "description": "Eine Animation wärend des aufklappens und zuklappens des Accordions. Animationen die verwendet werden können: 'height', 'scale', 'opacity'.",
        "type": "String",
        "default": "undefined"
    },
    "accordion.animationTimeout": {
        "description": "Wie lange dauert die Animation. Ausgehend von der CSS Animation. Relevant wenn der Wert anders als 300ms sein soll.",
        "type": "Number",
        "default": "300"
    },
    "accordion.data": {
        "description": "Hauptdaten.",
        "type": "[]",
        "default": "[]"
    },
    'accordion.data.href': {
        "description": "Ein <a> - oder <Link> -Tag umgibt die Texteingabe, um den Benutzer in Ihrer App zu navigieren.",
        "type": "String",
        "default": "undefined"
    },
    'accordion.data.icon': {
        "description": "Benutzerdefinierte JSX-Daten auf der linken Seite der Texteingabe.",
        "type": "JSX | String",
        "default": "undefined"
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
        "default": "false"
    },
    'props' : {
        "description": "Die HTML Eigenschaften des HTML Elementes.",
        "type": "{}",
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
    "data": {
        "description": "Hauptdaten - Array von Objekten.",
        "type": "[]",
        "default": "[]"
    },
    "cards.data": {
        "description": "Hauptdaten - Array von Objekten.",
        "type": "[]",
        "default": "[]"
    },
    "cards.data.title": {
        "description": "Benutzerdefinierte Kartenkopfdaten.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "cards.data.content": {
        "description": "Inhaltsdaten für benutzerdefinierte Karten.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "cards.data.footer": {
        "description": "Fußzeilendaten für benutzerdefinierte Karten.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "defaultItems": {
        "description": "Wie viele Elemente sollen direkt beim ersten Laden angezeigt werden.",
        "type": "Number",
        "default": "3"
    },
    "loadonscroll.data": {
        "description": "Benutzerdefinierte Daten, die beim ersten Mal gerendert werden sollen.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "loadonscroll.fireScrollEvent": {
        "description": "Ein Zahl die bewirkt, dass das angesprochene Element (scrollReference) nach unten ge-scrollt wird mit der angegebenen Zahl. Dieses Verhalten wird in 'componentDidMount' (einmaling) aufgerufen.",
        "type": "Number",
        "default": "0"
    },
    "loadonscroll.fireScrollBack": {
        "description": "Soll das Element (scrollReference.scrollTop = 0) ganz nach oben ge-scrollt werden nachdem die Funktion 'fireScrollEvent' aufgerufen wurde.",
        "type": "Boolean",
        "default": "true"
    },
    "loadonscroll.minify": {
        "description": "Callback Funktion schneller aufrufen wärend des Scroll-Events.",
        "type": "Number",
        "default": "0"
    },
    "loadonscroll.scrolledToBottom": {
        "description": "Die Callback Function wird nur ausgeführt wenn er Benutzer komplett am Ende der Website gelangt ist minus minify.",
        "type": "Boolean",
        "default": "false"
    },
    "loadonscroll-description-1": "Beispiel mit Promise.resolve() drei mal.",
    "loadonscroll-description-2": "Beispiel mit Promise.reject() (gibt den undefinierten Standardwert als Wert zurück) die Schlüsselverwendung 'persistReject = {false}' (das Bildlaufereignis nicht entfernen) und 'onReject' (benutzerdefinierte Schaltfläche anzeigen für Rufen Sie die Rückruffunktion erneut auf.).",
    "loadonscroll-description-3": "Beispiel mit Promise.reject() (mit benutzerdefiniertem JSX als Fehlermeldung für den Benutzer) mit der Schlüsselverwendung 'persistReject = {true}' (Entfernen des Bildlaufereignisses!) und 'onReject' ( benutzerdefinierte Schaltfläche anzeigen, um die Rückruffunktion erneut aufzurufen).",
    "loadonscroll-description-4": "Beispiel mit: für die erste Ladezahl = Promise.reject(), für die zweite Ladezahl Promise.reject () (mit benutzerdefiniertem JSX als Fehlermeldung für den Benutzer) mit der Schlüsselverwendung ' persistReject = {true} '(Bildlaufereignis entfernen!) und' onReject '(benutzerdefinierte Schaltfläche anzeigen, um die Rückruffunktion erneut aufzurufen) für die dritte Zählung Promise.resolve ().",
    "minify": {
        "description": "Wenn der Benutzer nach unten scrollt, werden Daten nachgeladen. Das NAchladen der Daten kann beschläunigt werden, in dem man hier einen PIXEL Wert hinzufügt.",
        "type": "Number",
        "default": "0"
    },
    "cards.callback": {
        "description": "Falls das Root Element bis ganz nach unten ge-scrollt wurde, können Daten nachgeladen werden. Falls der Callback 'break' als Antwort liefert, wird der Scroll Event von dem Root Element entfernt. Es werden 2 Argumente an diese Funktion übergeben. Argument 1: Ereignis (scrollen, klicken: für die 'onReject'-Daten), Argument 2: Benutzerdefinierte Daten, die vom Schlüssel 'callbackProps' bereitgestellt werden.",
        "type": "Function",
        "default": "undefined"
    },
    "cards.callback.persistReject": {
        "description": "Wenn true, wird das Scroll-Ereignis entfernt, wenn das Versprechen abgelehnt wurde.",
        "type": "Boolean",
        "default": "false"
    },
    "cards.callback.onReject": {
        "description": "Benutzerdefinierte Daten, die angezeigt werden sollen, nachdem ein Versprechen abgelehnt wurde, und der Benutzer sollte wieder mehr Daten laden können. An diese Daten wird das Klickereignis angehängt.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "cards.loading": {
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
        "type": "[]",
        "default": "undefined"
    },
    "customsuggestion.suggestions.href": {
        "description": "Der Benutzerdefinierte Vorschlag wird mit einem A Tag umfasst, damit der Benutzer direkt einem Vorschlag folgen kann.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.jsx": {
        "description": "Benutzerdefiniertes HTML das der Endanwender sieht. Falls nicht vorhanden wird der Wert von dem key 'text' angezeigt.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.text": {
        "description": "Benutzerdefinierter Text anhand dessen die Filterung stattfindet.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.searchSensitive": {
        "description": "Suche key sensitive.",
        "type": "Boolean",
        "default": "true"
    },
    "customsuggestion.suggestions.props": {
        "description": "Die HTML Eigenschaften des HTML Elementes.",
        "type": "{}",
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
    "clipboard.data": {
        "description": "Custom JSX.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "clipboard.animation": {
        "description": "Eine Animation, wenn ein Klickereignis für die benutzerdefinierten 'Daten' ausgelöst wird. Animationen, die verwendet werden können: 'skalieren', 'springen'.",
        "type": "String",
        "default": "undefined"
    },
    "clipboard.callback": {
        "description": "Benutzerdefinierte Rückruffunktion, die aufgerufen wird, wenn auf die Schaltfläche in der Zwischenablage geklickt wurde. Diese Funktion gibt 2 Argumente zurück. Argument 1: Klickereignis, Argument 2: Benutzerdefinierte callbackProps, Argument 3: Daten in der Zwischenablage.",
        "type": "Funktion",
        "default": "undefined"
    },
    "clipboard.callbackProps": {
        "description": "Benutzerdefinierte Rückrufeigenschaften, die als zweites Argument an die Rückruffunktion übergeben wurden.",
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
    "inputsuggestionobject.loading": {
        "description": "Benutzerdefinierte benutzerdefinierte JSX-Daten zum Anzeigen eines Ladesymbols während der Ausführung der Rückruffunktion. Die übergebene Rückruffunktion muss ein Versprechen sein. Um Vorschläge anzuzeigen, muss das Versprechen aufgelöst oder abgelehnt werden.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "inputPlaceholder": {
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
        "description": "Wenn true, dann hört das Modul nur auf den bergebenen State und die State Änderungen. Wenn False, dann erwartet das Modul Daten aus dem Callback die weiter verarbeitet werden.",
        "type": "Boolean",
        "default": "false"
    },
    "allowOnlyAZ": {
        "description": "Falls true, dann wird folgendes Regex auf den Wert der Input Feldes angewandt: (/[^a-zA-Z ]/gmi).",
        "type": "Boolean",
        "default": "false"
    },
    "display": {
        "description": "Soll das Element angezeigt werden oder nicht.",
        "type": "Boolean",
        "default": "false"
    },
    "lineNumber": {
        "description": "Erlaube das rendern, auf der Linken Seite, jeder Zeilen Nummer.",
        "type": "Boolean",
        "default": "false"
    },
    "iconClose": {
        "description": "Benutzer definiertes HTML mit der Aktion das Module 'zu schließenden'.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "inputActive": {
        "description": "Soll das Input Feld mit angezeigt werden oder nicht.",
        "type": "Boolean",
        "default": "false"
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
    "listarray.callback": {
        "description": "Benutzerdefinierte Rückruffunktionen werden ausgelöst, wenn der Benutzer auf ein Listenelement klickt. Die Funktion gibt 2 Argumente zurück. Argument 1: Klickereignis, Argument 2: geklickter Eintrag.",
        "type": "Funktion",
        "default": "undefined"
    },
    "listarray.data": {
        "description": "Array der anzuzeigenden Zeichenfolgen (Werte).",
        "type": "[]",
        "default": "[]"
    },
    "listobject.data": {
        "description": "Array of Objects.",
        "type": "[]",
        "default": "[]"
    },
    "listobject.data.text": {
        "description": "Hauptzeichenfolge, die angezeigt werden soll.",
        "type": "String",
        "default": "undefined"
    },
    "closeOnCallback": {
        "description": "Falls ein Element aus der List ausgewählt wird, soll das Modul auch geschlossen werden oder soll die Anzeige des Modules beibehaltet werden.",
        "type": "Boolean",
        "default": "false"
    },
    "closeOnDimmedClick": {
        "description": "Bei dem Anklicken des 'dunklen' HTML`s, das ausserum des Content Bereiches sicht befindet, wird das Module icht mehr angezeigt.",
        "type": "Boolean",
        "default": "false"
    },
    "closeOnEsc": {
        "description": "Beim Drücken der 'Escape' Taste, soll das Module weiterhin angezeigt werden oder die Anzeige soll unterbrochen werden.",
        "type": "Boolean",
        "default": "false"
    },
    "inputEmptyOnCallback": {
        "description": "Nachdem ein Element aus der List ausgewählt wurde, soll das Input Feld gelehrt werden oder der Wert des Input Feldes soll unverändert bleiben.",
        "type": "Boolean",
        "default": "false"
    },
    "closeOnClick": {
        "description": "Wenn die verdunkelte HTML Area angeklickt wird, wird das Modul nicht mehr angezeigt.",
        "type": "Boolean",
        "default": "true"
    },
    "fullscreenOverlay.animation": {
        "description": "Eine Animation wärend des renders des Modules. Animationen die verwendet werden können: 'scale','left','top','right', 'bottom'.",
        "type": "String",
        "default": "<empty string>"
    },
    "popupbox.data": {
        "description": "Benutzerdefinierte JSX-Daten in der umgeschalteten Box.",
        "type": "String | JSX",
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
        "default": "false"
    },
    "fullscreenoverlay.data": {
        "description": "Benutzerdefinierte JSX-Daten, die im Overlay angezeigt werden sollen.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "disableScroll": {
        "description": "Während der Anzeige des Modules, soll das HTML Element (Tag) scrollbar sein oder nicht.",
        "type": "Boolean",
        "default": "false"
    },
    "messageKey": {
        "description": "Ein unique string.",
        "type": "String",
        "default": "<empty string>"
    },
    "codeMapping": {
        "description": "Object",
        "type": "{}",
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
        "type": "{}",
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
        "type": "{}",
        "default": "{}"
    },
    "codeMapping.close": {
        "description": "Object - Text um die Mitteilungs Box zu schließen.",
        "type": "{}",
        "default": "undefined"
    },
    "codeMapping.close.text": {
        "description": "Text zur Schließung der angezeigt werden soll. Auf diesem Text ist ein 'click close Event' beigefügt.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.close.props": {
        "description": "Die HTML Eigenschaften des HTML Elementes.",
        "type": "{}",
        "default": "{}"
    },
    "codeMapping.link": {
        "description": "Object - Externer Link.",
        "type": "{}",
        "default": "{}"
    },
    "codeMapping.link.text": {
        "description": "Der anzuzeigender Text.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.link.useTagLink": {
        "description": "Soll der Tag <Link> benutzt werden, falls sich das Modul innerhalb eines Routes beweget oder standartmäßig eine <a> Tag.",
        "type": "Boolean",
        "default": "false"
    },
    "codeMapping.link.href": {
        "description": "Das Attribut 'to' im <Link> Tag oder 'href' im <a> Tag.",
        "type": "{}",
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
        "default": "true"
    },
    "renderItems": {
        "description": "Welche Elemente sollen standardmäßig angezeigt werden.",
        "type": "[]",
        "default": "'Smileys', 'Peoples','Animals', 'Plants', 'Nature', 'Food', 'Activity', 'Travel', 'Objects','Symbols', 'Currency', 'Arrows', 'Html'"
    },
    "translations": {
        "description": "Übersetzungen für die jeweiligen Überschriften der Icons Sets.",
        "type": "{}",
        "default": "undefined"
    },
    "custom": {
        "description": "Benutzer definierte Icons Sets als Array aus Objekten.",
        "type": "[]",
        "default": "undefined"
    },
    "custom.title": {
        "description": "Titel des Icons Set als unique Key.",
        "type": "String",
        "default": "undefined"
    },
    "custom.data": {
        "description": "Array aus Strings mit benutzerdefinierten Icons.",
        "type": "[]",
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
        "description": "Wenn False, dann hört das Modul nur auf den bergebenen State und die State Änderungen. Wenn true, dann erwartet das Modul Daten aus dem Callback die weiter verarbeitet werden.",
        "type": "Boolean",
        "default": "false"
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
        "description": "Benutzerdefinierte Funktion um eine Datei zu verarbeiten. Es werden 2 Argumente übergeben: Argument 1: Die Datei, Argument 2: Der Dateityp.",
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
        "default": "false"
    },
    "isDraggingData": {
        "description": "Wenn ein Benutzer aktuell im Status 'dragging' ist, dann kann eine Benutzerdefiniertes JSX angezeigt werden.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "uploadOnClick": {
        "description": "Erlaube auch das Verarbeiten von Dateien wenn der Benutzer auf den 'Drag & Drop' Bereich ein Klick Event durchführt.",
        "type": "Boolean",
        "default": "false"
    },
    "selected": {
        "description": "Ein Array mit ausgewählten Elementen aus der Liste.",
        "type": "[]",
        "default": "[]"
    },
    "suggestionsToFilter": {
        "description": "Ein Array aus Elementen (Strings) die danach zur Auswahl für den Benutzer erscheinen.",
        "type": "[]",
        "default": "[]"
    },
    "emptySuggestionAfterSelection": {
        "description": "Leehre die Vorschläge nachdem der Benutzer ein Element angeklickt hat.",
        "type": "Boolen",
        "default": "true"
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
        "default": "true"
    },
    "reactRouter": {
        "description": "Wenn true - (dann bewegt sich das Module innerhalb eines Rect Router) wird ein <Link> Tag gerendert, wenn False wird ein <a> Tag gerendert.",
        "type": "Boolean",
        "default": "false"
    },
    "icon": {
        "description": "Benutzerdefiniertes JSX um das Modul zu schließen.",
        "type": "String | JSX",
        "default": "<empty string>"
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
        "description": "Das eingebetete 'Menu' Modul.",
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
        "type": "{}",
        "default": "{}"
    },
    "title": {
        "description": "Array von Strings - Tabellenüberschrift.",
        "type": "[]",
        "default": "undefined"
    },
    "writer.text": {
        "description": "Zu schreibender Text.",
        "type": "String",
        "default": "<empty string>"
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
        "description": "Pipe auf der Site anzeigen: 'left', 'right'",
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
        "description": "Array aus Objekten.",
        "type": "[]",
        "default": "undefined"
    },
    "table.keysToRead": {
        "description": "Array aus Strings - welche Keys sollen aus dem Object ausgelesen werden.",
        "type": "[]",
        "default": "undefined"
    },
    "table.titleOnMinified": {
        "description": "Render der Tabellen Überschriften, wenn das Modul minifiziert wird (ausgelöst vom resize event).",
        "type": "Boolean",
        "default": "true"
    },
    "bread.hashRouter": {
        "description": "Befindet sich die aktuelle React-App in einem ReactRouter oder nicht? Wenn true, wird der Hostname (erste Breadcrumbs) zum Suffix '/ # /'.",
        "type": "Boolean",
        "default": "false"
    },
    "bread.domainName": {
        "description": "Ersetzen Sie den Hostnamen (erster Breadcrumb) durch einen benutzerdefinierten Text",
        "type": "String",
        "default": "undefined"
    },
    "bread.delimiter": {
        "description": "Trennzeichen zwischen den Breadrumbs.",
        "type": "String | JSX",
        "default": ">"
    },
    "bread.overwriteText": {
        "description": "Muss mit dem Schlüssel verwendet werden: 'moduleMenu'. Wenn true, wird anstelle des Breadcrumbs-Pfads der erste untergeordnete Menüschlüssel: 'text' angezeigt. Wenn False, werden die ersten untergeordneten Menüschlüssel: 'text' angezeigt ignoriert. ",
        "type": "Boolean",
        "default": "false"
    },
    "bread.moduleMenu": {
        "description": "Das Modul wurde angehängt: 'Menu' nur für den letzten Breadcrumb verfügbar. Nur ein einziges Kind als übergeordnetes Element zulässig - untergeordnete Verschachtelung ohne Einschränkungen zulässig.",
        "type": "<Menu>",
        "default": "undefined"
    },
    "closeOnClickOutside" : {
        "description": "Wenn true und der Benutzer nicht innerhalb des Elements ein Klick Event durchführt, werden alle aufgeklappten Elemente wieder zugemacht.",
        "type": "Boolean",
        "default": "false"
    },
    /**
     * Descriptions
     */
    "accordion.description.1": "Beispiel mit einzelnen verschachtelten Kindern.",
    "accordion.description.2": "Beispiel mit 4 verschachtelten Kindern.",
    "accordion.description.3": "Beispiel mit einem Klick-Handler (außerhalb des Moduls), der durch den Schlüssel bereitgestellt wird: 'closeOnClickOutside' wurde auf true gesetzt (alle Kinder rekursiv geschlossen).",
    "accordion.description.4": "Beispiel mit der Verwendung eines animierten Icons.",
    "cards.scroll.description": "Das Kartenmodul lädt mehr Elemente, wenn der untere Rand des übergeordneten Div erreicht ist.",
    "cards.scrollCallback.description": "Das Kartenmodul lädt mehr Elemente, wenn der untere Rand des übergeordneten Div erreicht ist. Das Laden weiterer Karten basiert auf der benutzerdefinierten Rückruffunktion. Wenn der Wert 'break' ist, wird der Scroll-Listener entfernt.",
    "cards.scrollCallback.example1" : "Beispielbreite Promise.resolve (), LoadingBoxTop mit der festen Position und 'break' im 4-Scroll-Event.",
    "cards.scrollCallback.example2" : "Beispielbreite Promise.reject () (Standard gibt undefiniert zurück), benutzerdefiniertes Laden von JSX, das vom Schlüssel 'load' übergeben wird, und mit dem Schlüssel 'persistReject = {true}' bedeutet dies, dass der scrollEvent-Listener entfernt und die Rückruffunktion nicht erneut aufgerufen wird auf einem Scroll-Ereignis.",
    "cards.scrollCallback.example3" : "Beispiel width Promise.reject () width benutzerdefiniertes JSX als Fehlermeldung, benutzerdefiniertes Laden von JSX, das vom Schlüssel 'load' übergeben wird, und mit dem Schlüssel 'persistReject = {false}' (standardmäßig ist der Wert false) bedeutet dies, dass es sich um den scrollEvent-Listener handelt Nicht entfernt! Der Benutzer kann nach unten scrollen und die Rückruffunktion wird erneut aufgerufen.",
    "cards.scrollCallback.example4" : "Beispiel width Promise.reject () width benutzerdefiniertes JSX als Fehlermeldung, benutzerdefiniertes Laden von JSX, übergeben vom Schlüssel 'Laden' und mit dem Schlüssel 'persistReject = {true}' bedeutet dies, dass der scrollEvent-Listener entfernt wird! In diesem Beispiel wird der Schlüssel 'onReject' mit einer benutzerdefinierten JSX-Datei versehen. An diesen HTML-Code wird ein Klickereignis angehängt. Dieses Klickereignis ruft die benutzerdefinierte Rückruffunktion auf.",
    "icons.description": "Symbolmodul mit allen Symbolen, KEINEN Übersetzungen und ausgewählten Standardsymbolen: Smileys. Suchen Sie nach dem Klickereignis in der Konsole nach einem Symbol.",
    "icons.description2": "Symbolmodul mit ausgewählten Symbolen: Smileys, Aktivität, Reisen, Völker, Objekte, noch KEINE Übersetzungen und standardmäßig ausgewählte Symbole: Aktivität. Suchen Sie nach dem Klickereignis in der Konsole nach einem Symbol.",
    "icons.description3": "Symbolmodul mit ausgewählten Symbolen: Smileys, Aktivität, Reisen, Völker, Objekte und 2 übersetzte Symboltitel. Suchen Sie nach dem Klickereignis in der Konsole nach einem Symbol.",
    /**
     * 
     */
    globalStyle: {
        "description": "Laden der globalen Style Datei (react-revolution.css) erlauben. Falls diese schon geladen wurde, wird diese das 2 Mal nicht geladen.",
        "type": "Boolean",
        "default": "false"
    },

    moduleStyle: {
        "description": "Allow loading of the style file of the single module. If it has already been loaded, it will not be loaded twice.",
        "type": "Boolean",
        "default": "false"
    },
    styleLoading: "Style die im Modul Verwendung finden",
    "runtime.generator.description": 'Wenn bei Verwendung der Rückruffunktion ein Fehler aufgetreten ist (runtime generator are not defined) in diesem Modul (callback), installieren Sie bitte: npm install --save @ babel / runtime && npm install --save-dev @ babel / plugin -transform-runtime; Fügen Sie dann in der .babelrc Datei die folgende Zeile hinzu: {"presets": ["@ babel / preset-env", "@ babel / preset-react"], "plugins": [["@ babel / transform-runtime"] ]}. ',

    "pagination.data": {
        "description": "Array von benutzerdefinierten Objekten.",
        "type": "[]",
        "default": "[]"
    },
    "pagination.searchOnKeys": {
        "description": "Array von Zeichenfolgen. Array von (bereitgestellten Objekten innerhalb des 'Daten'-Schlüssels) Schlüsselnamen zur Verwendung des Suchfelds (Eingabefelds).",
        "type": "[]",
        "default": "[]"
    },
    "pagination.itemsPerSite": {
        "description": "Wie viele Websites auf jeder Seite gerendert werden sollen.",
        "type" : "Number",
        "default": "10"
    },
    "pagination.keysToRender": {
        "description": "Array von Zeichenfolgen. Array von Schlüsselnamen, die basierend auf dem Array von Objekten angezeigt werden sollen (Schlüssel: 'Daten').",
        "type": "[]",
        "default": "[]"
    },
    "pagination.liCallback": {
        "description": "Benutzerdefinierte Rückruffunktion, wenn der Benutzer auf eine einzelne Zeile klickt. Diese Funktion gibt 2 Argumente zurück. Argument 1: clickEvent, Argument 2: aktuelles geklicktes Element als Objekt.",
        "type": "Funktion",
        "default": "undefined"
    },
    "pagination.inputCallback": {
        "description": "Benutzerdefinierte Rückruffunktion, wenn der Benutzer den Wert des Eingabefelds ändert. Diese Funktion gibt 1 Argumente zurück. Argument 1: Ereignis.",
        "type": "Funktion",
        "default": "undefined"
    },
    "pagination.lineNumber": {
        "description": "Zeigt die aktuelle Zeilennummer an (Schleifenindex +1).",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.resetLineNumber": {
        "description": "Setzen Sie die Nummer jeder Zeile für jede Seite zurück. Jedes Element beginnt mit der Anzahl: 1.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.displayTotal": {
        "description": "Zeigt die Gesamtzahl der bereitgestellten Daten an. Länge.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.totalPrefix": {
        "description": "Zeigt ein Präfix an, bevor die Anzahl der Gesamtdaten angezeigt wird.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.totalSufix": {
        "description": "Zeigt ein Suffix an, nach der Anzahl der Gesamtdaten",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.paginationPages": {
        "description": "Paginierung anzeigen.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.paginationTextPrefix": {
        "description": "Text von 'Page'.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.paginationTextMiddle": {
        "description": "Text von 'of'.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.prevPages": {
        "description": "Wie viele Seiten sollten 'vor' der aktuellen Seite (als vorherige Seiten) angezeigt werden?",
        "type" : "Number",
        "default": "2"
    },
    "pagination.nextPages": {
        "description": "Wie viele Seiten sollten 'nach' der aktuellen Seite (als nächste Seiten) angezeigt werden?",
        "type" : "Number",
        "default": "2"
    },
    "pagination.totalPages": {
        "description": "Gesamtanzahl der verfügbaren Seiten.",
        "type" : "Number",
        "default": "0"
    },
    "pagination.globalCount": {
        "description": "Gesamtanzahl der verfügbaren Elemente.",
        "type" : "Number",
        "default": "0"
    },
    "pagination.alignPagesItems": {
        "description": "Struktur der gerenderten Elemente. Verfügbare Optionen: 1, 2, 3, 4, 5.",
        "type" : "Number",
        "default": "1"
    },
    "pagination.alignPagination": {
        "description": "Gerenderte Paginierungsstruktur. Verfügbare Optionen: 1, 2.",
        "type" : "Number",
        "default": "1"
    },
    "pagination.previousButton": {
        "description": "HTML für die vorherige Schaltfläche.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "pagination.nextButton": {
        "description": "HTML für die nächste Schaltfläche.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "pagination.searchActive": {
        "description": "Rendern Sie das Sucheingabefeld.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.searchPlaceholder": {
        "description": "Platzhalter eingeben.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.searchPlaceholder": {
        "description": "Platzhalter.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.searchIcon": {
        "description": "Der HTML-Code der Suchschaltfläche auf der rechten Seite des Sucheingabefelds. Wenn der Benutzer auf das Suchsymbol klickt, wird eine Suche ausgeführt.",
        "type": "String | JSX",
        "default": "🔍"
    },
    "pagination.searchSensitive": {
        "description": "Führen Sie eine Suche als 'key sensitive search' aus.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.searchValue": {
        "description": "Zum ersten Mal einen benutzerdefinierten Suchwert neu erstellen, um eine Suche ohne Benutzerinteraktion auszuführen.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.searchOnKeyDown": {
        "description": "Führen Sie eine Suche nach den bereitgestellten Daten durch, wenn der Benutzer den Eingabewert ändert.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.searchTitle": {
        "description": "Tag <h1> als Titel für das Suchfeld.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.paginationTitle": {
        "description": "Tag <h1> als Titel für die Tabelle.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.paginationTitle": {
        "description": "Tag <h1> als Titel für die Tabelle.",
        "type": "String",
        "default": "<empty string>"
    },
    "pagination.fallbackLoading": {
        "description": "Verwenden Sie ein Ladesymbol, während der Benutzer Daten filtert.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.fallbackLoadingTime": {
        "description": "Verwenden Sie ein benutzerdefiniertes Zeitlimit, um das Ladesymbol für längere ms (Millisekunden) anzuzeigen.",
        "type" : "Number",
        "default": "0"
    },
    "pagination.fallbackNoData": {
        "description": "Benutzerdefinierte Daten zum Rendern, wenn keine Daten angegeben werden.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "pagination.fallbackNoDataSearch": {
        "description": "Benutzerdefinierte Daten zum Rendern, wenn während der Suche keine Daten gefunden wurden.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "pagination.fallbackMounting": {
        "description": "Verwenden Sie ein Ladesymbol, während das Modul (die Komponente) Daten generiert.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "removeHashFromDomain": {
        "description": "Entfernung der Zeichenkette '/#/' von dem Text der Domände.",
        "type": "Boolean",
        "default": "false"
    },
    "globalMessage.empty": {
        "description": "Wenn true, dann werden alle Nachrichten, bei einer Anderung der Lokation (window.location.href), entfernt.",
        "type": "Boolean",
        "default": "true"
    },
    "breadcrumbs.example3": "Beispiel mit dem letzten Eintrag als Menu Element",
    "pager.dynamic.description" : 'Dies ist ein Beispiel mit einem dynamischen Pager also bei jedem Seiten Wechsel, wird eine Datenbank Abfrage durchgeführt. Diese Funktion mit der DB Abfrage liefert ein Promise zurück. Es muss ein Promise sein, da das Modul intern ein "await" beinhaltet, somit wird der Seiten Wechsel nur dann stattfinden, wenn der Promise auch resolved wird und Daten geliefert werden.',

    "promise": {
        "description": "Generieren Sie jede Codezeile als Promise für eine bessere Leistung, während Sie sehr lange Zeichenfolgen für die Quellcodestruktur generieren. Wenn false, generiert das Modul den Quellcode (jsx-Code) ohne Promise.",
        "type": "Boolean",
        "default": "false"
    },
    "promiseLine": {
        "description": "Funktioniert nur, wenn der Schlüssel \"Versprechen\" auf \"Wahr\" gesetzt ist. Machen Sie in der Zeilennummer x eine \"Pause\" (Zeitüberschreitung zum Auflösen des aktuellen Versprechens), um die kritische CPU-Auslastung zu stoppen, wenn die übergebene Zeichenfolge / der Code länger ist dann 10.000 Codezeilen. ",
        "type": "Number",
        "default": "1000"
    },
    "promiseTime": {
        "description": "Funktioniert nur, wenn der Schlüssel \"Versprechen\" auf \"Wahr\" gesetzt ist. Zeitpunkt des Timeouts zum Auflösen der aktuellen Zeilen Versprechen in Kombination mit dem Schlüssel \"VersprechenLine\".",
        "type": "Number",
        "default": "500"
    },
    "matcher": {
        "description": "Array von Objekten.",
        "type": "[]",
        "default": "[]"
    },
    "matcher.words": {
        "description": "Array von übereinstimmenden Zeichenfolgen / Wörtern.",
        "type": "[]",
        "default": "[]"
    },
    "matcher.className": {
        "description": "Fügen Sie dem übereinstimmenden Wort einen Klassennamen hinzu.",
        "type": "String",
        "default": "undefined"
    },
    "lineNumberNewLine": {
        "description": "Funktioniert nur, wenn der Schlüssel 'lineNumber' auf true gesetzt ist. Rendern Sie die Zeilennummer für leere Zeilen.",
        "type": "String",
        "default": "undefined"
    },
    "sourceCode": {
        "description": "Array von Zeichenfolgen. Welche logischen Funktionen sollten für jede Zeile in der angegebenen Reihenfolge aufgerufen werden, um bestimmten Codes zu entsprechen. Die Schritte für jede Codezeile sind: 1 - Tags: JSX (HTML) -Tags. 2 - Eigenschaften: HTML-Eigenschaften wie className. 3 - Variablen: Wörter, die das gleiche (=) Zeichen enthalten. 4 - objectProperty: einzelne Eigenschaft eines Objekts, wenn das Doppelpunktzeichen angegeben ist. 5 - Funktionen: Übereinstimmung mit einzelnen Funktionen. 6 - Wörter: Übereinstimmung Benutzerdefinierte Wörter. 7 - Anführungszeichen: Übereinstimmende Anführungszeichen ('' ',', '\"'). 8 - Klammern: Übereinstimmende Klammern ('(', '}', ']'). ",
        "type": "[]",
        "default": "['tags', 'properties', 'variables', 'objectProperty', 'functions', 'words', 'quote', 'brackets']"
    },
    "code": {
        "description": "Hauptzeichenfolge zum Generieren des Quellcodes.",
        "type": "String",
        "default": "<empty string>"
    },
    "link.404": {
        "description": "Objekt für die Backlink-Funktionalität.",
        "type": "Objekt",
        "default": "{}"
    },
    "link.404.text": {
        "description": "Links text.",
        "Typ": "JSX | String",
        "default": "undefined"
    },
    "link.404.href": {
        "description": "Links destination.",
        "type": "String",
        "default": "undefined"
    },
    "link.404.props": {
        "description": "Die HTML-Eigenschaften des <a> -Tags.",
        "type": "Objekt",
        "default": "undefined"
    },
    "link.404.callback": {
        "description": "Rückruffunktion beim Klickereignis. Diese Funktion gibt 1 Argument zurück. Argument 1: Klickereignis.",
        "type": "Objekt",
        "default": "undefined"
    },
    "text404": {
        "description": "Fehlercode.",
        "type": "String",
        "default": "404"
    },
    "404.text1": {
        "description": "Benutzerdefinierter (größerer) Text.",
        "type": "String",
        "default": "requested page"
    },
    "404.text2": {
        "description": "Benutzerdefinierter (kleinerer) Text.",
        "type": "String",
        "default": "was not found"
    },
    "404.bad": {
        "description": "Befindet sich das Modul im fehlerhaften Modus?",
        "type": "Boolean",
        "default": "false"
    },
    "404.shipname": {
        "description": "Name des Schiffs.",
        "type": "JSX | String",
        "default": "<empty string>"
    },
    "scroll-to-desc-1": "Beispiel mit einer Navigierung zum Start der Seite innerhalb von 1 Sekunde.",
    "scroll-to-desc-2": "Beispiel mit einer Navigierung zum ersten Beispiel innerhalb von 300 Millisekunden.",
    "navigationTime": {
        "description": "Benutzerdefinierte Zeit der Navigation in Millisekunden.",
        "type": "Number",
        "default": "300"
    },
    "navigationTarget": {
        "description": "Navigieren Sie auf der Seite zu diesem HTML-Element (Selektor). Geben Sie für eine Klasse die erste Position ein. (Punkt) Wenn es sich um eine ID handelt, muss an der ersten Position ein # (Hash) stehen. Wenn der Schlüssel 'html' leer / undefiniert ist und der Wert 'bottom' lautet, gibt das Modul einen vordefinierten HTML-Bildlauf nach unten und eine Bildlauffunktion nach unten zurück. Wenn der Wert 'top' lautet, führt das Modul einen Bildlauf nach oben durch vordefiniertes HTML und scrollen Sie zur obersten Funktionalität.",
        "type": "JSX | String",
        "default": "<empty string>"
    },
    "html": {
        "description": "Benutzerdefiniertes HTML das angezeigt wird, falls der Key 'navigationTarget' keinen . (Punkt) oder # (Hash) an der ersten Stelle stehen hat.",
        "type": "JSX | String",
        "default": "<empty string>"
    },
    "hideAt": {
        "description": "Wenn das document 'resized' wird und der Wert kleiner oder gleich diesem Wert ist, wird die Sidebar komplett minimiert.",
        "type": "Number",
        "default": "520"
    },
    "minifyAt": {
        "description": "Wenn das document 'resized' wird und der Wert kleiner oder gleich diesem Wert ist, wird die Sidebar minimiert.",
        "type": "Number",
        "default": "720"
    },
    "maxifyAt": {
        "description": "Maximieren Sie die zuvor minimierte Seitenleiste auf die Hauptbreite (Basisbreite).",
        "type": "Number",
        "default": "1024"
    },
    "minifySidebarOn": {
        "description": "Wenn der Wert von window.location.href oder window.location.hash mit einem eintrag dieser Liste matched, dann with die Sidebar komplett minimiert angezeigt.",
        "type": "String[]",
        "default": "[]"
    },
    "displayMinifyMaxifyIcon": {
        "description": "Rendern Sie die Seitenleisten, um HTML umzuschalten - die JSX aus dem Schlüssel 'toggleMenuHtml'.",
        "type": "Boolean",
        "default": "undefined"
    },
    "minify": {
        "description": "Ist die Seitenleiste (vollständig) minimiert?",
        "type": "Boolean",
        "default": "undefined"
    },
    "toggleMenuHtml": {
        "description": "Benutzerdefiniertes JSX, das als Umschalt-Symbol für die Seitenleiste verwendet wird. Dieser HTML-Code befindet sich im Inhalt der Kopfzeilen.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "closeMenuHtml": {
        "description": "Benutzerdefiniertes JSX wird als Schließsymbol in der Seitenleiste verwendet, wenn die Dokumentbreite geringer ist als der Wert, der mit dem Schlüssel 'minifyAt' an das Modul übergeben wurde.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "moduleSidebar": {
        "description": "Das Modul 'Menu'.",
        "type": "Modul",
        "default": "undefined"
    },
    "headerData": {
        "description": "Benutzerdefiniertes JSX im Header-Bereich.",
        "type": "Modul",
        "default": "<empty string>"
    },
    "headerProps": {
        "description": "Eigenschaften von Header div.",
        "type": "Objekt",
        "default": "{}"
    },
    "contentData": {
        "description": "Benutzerdefiniertes JSX im Inhaltsbereich.",
        "type": "Modul",
        "default": "<empty string>"
    },
    "contentProps": {
        "description": "Eigenschaften von Content div.",
        "type": "Objekt",
        "default": "{}"
    },
    "footerData": {
        "description": "Benutzerdefiniertes JSX im Fußzeilenbereich.",
        "type": "Modul",
        "default": "<empty string>"
    },
    "footerProps": {
        "description": "Footer div`s Eigenschaften.",
        "type": "Objekt",
        "default": "{}"
    },
    "dashed" : {
        "description": "Generiere auf der linken Seite des aufgeklappten Menü Elementes ein ge-dashen Rand.",
        "type": "Boolean",
        "default": "false"
    },
    "dashed_example": "Ein Beispiel mit dem übergebenen Key 'dashed={true}'.",
    "articles.animation": {
        "description": "Eine Animation beim Umschalten des Artikels. Animationen, die verwendet werden können: 'height', 'scale', 'opacity'. Damit die Animation auch eine Wirkung hat, muss das Element ein inline-block oder block Element sein, dies kann mit CSS gelöst werden in dem man dem toggler die CSS Eigenschaft hinzufügt: display: block, display: inline-block.",
        "type": "String",
        "default": "undefined"
    },
    "articles.animation.images": {
        "description": "Eine Animation beim Umschalten des Artikels. Animationen, die verwendet werden können: 'scale'.",
        "type": "String",
        "default": "undefined"
    },
    "articles.title": {
        "description": "Titel des Artikels.",
        "type": "String",
        "default": "undefined"
    },
    "articles.titleProps": {
        "description": "Die HTML-Tag-Attribute der Titel.",
        "type": "Objekt",
        "default": "{}"
    },
    "articles.text": {
        "description": "Text des Artikels.",
        "type": "String",
        "default": "undefined"
    },
    "articles.textProps": {
        "description": "Die Text-HTML-Tags-Attribute.",
        "type": "Objekt",
        "default": "{}"
    },
    "articles.image": {
        "description": "URL des Bildes.",
        "type": "String",
        "default": "undefined"
    },
    "articles.imageProps": {
        "description": "Die HTML-Tags-Attribute der Bilder.",
        "type": "Objekt",
        "default": "{}"
    },
    "articles.imageData": {
        "description": "Benutzerdefinierte Daten im Bild.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "articles.dataToggle": {
        "description": "Wichtige benutzerdefinierte Daten, die nach dem Klicken auf den Artikel umgeschaltet werden.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "articles.border": {
        "description": "Object.",
        "type": "Objekt",
        "default": "{}"
    },
    "articles.border.site": {
        "description": "Richten Sie den Rand auf der Site aus: 'oben', 'rechts', 'unten', 'links'.",
        "type": "String",
        "default": "undefined"
    },
    "articles.border.width": {
        "description": "Die Rahmenbreite in px.",
        "type": "Number",
        "default": "undefined"
    },
    "articles.border.color": {
        "description": "Die Farbe des Rahmens. Werte, die als Farbe verwendet werden können: Zeichenfolge, rgb / rgba und HEX.",
        "type": "String",
        "default": "undefined"
    },
    "articles.toggleOn": {
        "description": "Umschaltung passiert nach dem Klick auf das Element. Verfügbare Optionen: 'title', 'text'. Standard mäßig wird nur ein Klick auf die ganze 'box' (Artikel Box) akzeptiert und bewirkt ein toggle Effeckt.",
        "type": "String",
        "default": "undefined"
    },
    "articles.itemsPerLine": {
        "description": "Anzahl der Elemente die in einer 'Zeile' generiert werden sollen.",
        "type": "Number",
        "default": "3"
    },
    "articles.persist": {
        "description": "Die angezeigten Daten (die aufgeklappt wurden) sollen bestehend bleiben.",
        "type": "Boolean",
        "default": "false"
    },
    "articles.toggleForwards": {
        "description": "Benutzerdefiniertes JSX um den Text/Daten einzublenden. Wenn definiert, dann wird der Schlüssel 'toggleOn' ignoriert.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "articles.toggleBackwards": {
        "description": "Benutzerdefiniertes JSX um den Text/Daten auszublenden.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "articles.description.1": "Beispiel mit der Verwendung des Schlüssels 'border'.",
    "articles.description.2": "Beispiel mit der Schlüsselverwendung closeOnClickOutside={true}. Dies bedeutet, dass alle umgeschalteten Artikel geschlossen werden, wenn der Benutzer außerhalb des Moduls klickt.",
    "articles.description.3": "Beispiel mit der Schlüsselverwendung persist={true}.",
    "articles.description.4": "Beispiel mit der Schlüsselverwendung 'toggleForwards' und 'toggleBackwards'.",
    "readmore.animation": {
        "description": "Eine Animation wärend der Umschaltung des zu Lesenden Textes. Animationen, die verwendet werden können: 'height', 'scale', 'opacity'. Damit die Animation auch eine Wirkung hat, muss das Element ein inline-block oder block Element sein, dies kann mit CSS gelöst werden in dem man dem toggler die CSS Eigenschaft hinzufügt: display: block, display: inline-block.",
        "type": "String",
        "default": "undefined"
    },
    "readmore.toggleForwards": {
        "description": "Eigen definierter Text oder HTML um den Text einblenden. Hier ist der Event 'mehr lesen' hinzugefügt.",
        "type": "String | JSX",
        "default": "..."
    },
    "readmore.toggleBackwards": {
        "description": "Eigen definierter Text oder HTML um den Text ausblenden. Hier ist der Event 'weniger lesen' hinzugefügt.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "readmore.data": {
        "description": "Der Haupttext.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "readmore.dataToggle": {
        "description": "Der Text der eingeblendet werden soll.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "readmore.callback.toggleOnReject": {
        "description": "Ermöglichen Sie die erneute Anzeige der Schaltfläche über die Taste 'Ablehnung ablehnen', um die Abfrage zu wiederholen (Rückruf).",
        "type": "Boolean",
        "default": "false"
    },
    "readmore.callback.toggleReject": {
        "description": "Zeigen Sie selbst definierten Text oder HTML-Code an, um die Abfrage erneut auszuführen.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "readmore.callback.callback": {
        "description": "Rückruffunktion zum Laden von Daten. Diese Funktion gibt 2 Argumente zurück. Argument 1: Klicken Sie auf Ereignis, Argument 2: Benutzerdefinierte Daten, die vom Schlüssel 'callbackProps' übergeben werden.",
        "type": "Boolean",
        "default": "false"
    },
    "readmore.callback.callbackProps": {
        "description": "Benutzerdefinierte Daten werden als zweites Argument an die Rückruffunktion übergeben für den Schlüssel 'callback'.",
        "type": "Boolean",
        "default": "false"
    },
    "readmore.callback.loading": {
        "description": "Zeigen Sie selbst definierten Text oder HTML-Code an, während Sie Daten im Status 'Ausstehender Versprechen' abrufen.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "readmore-description-1" : "Beispiel mit einem 'mehr lesen' Button.",
    "readmore-description-2" : "Beispiel mit einem 'mehr lesen' und 'weniger lesen' Button.",
    "readmore-callback-description-1": "Beispiel für die Verwendung der Schaltfläche 'Mehr lesen' mit einer Rückrufmethode, die 2000 ms dauert. Während dieser Zeit wird der HTML-Code des Schlüssels 'loading' angezeigt. In diesem Fall wird ein eigenes GIF-Bild angezeigt. Die interne Funktion des Moduls wartet ( warten), um das 'Versprechen' (Versprechen -> Auflösen) zu lösen, damit die Daten angezeigt werden. Wenn die Daten einmal geladen wurden, werden sie kein zweites Mal geladen! Wenn das Versprechen fehlgeschlagen ist (Versprechen -> Ablehnen), können Sie die Daten auch an übergeben Wenn 'Promise.reject ()' vorhanden ist und keine Daten vorhanden sind, geschieht 'nichts' und die Taste 'toggleForwards' wird erneut angezeigt. ",
    "readmore-callback-description-2": "Beispiel für die Verwendung der Schaltfläche 'Mehr lesen' und 'Weniger lesen' mit einer Rückrufmethode, die 2000 ms dauert. Während dieser Zeit wird der HTML-Code des Schlüssels 'loading' angezeigt, in diesem Fall Ihr eigenes GIF-Bild. Die innere Funktion des Moduls wartet (wartet) auf ein Versprechen -> beschließt, dass die Daten angezeigt werden. Wenn die Daten einmal geladen wurden, werden sie kein zweites Mal geladen! Wenn das Versprechen fehlgeschlagen ist (Versprechen -> ablehnen), dann Sie können auch Daten an das Modul übergeben. Wenn 'Promise.reject ()' Platz hat und keine Daten vorhanden sind, passiert 'nichts' und der Schlüssel 'toggleForwards' erscheint wieder. ",
    "readmore-callback-description-3": "Beispiel mit Promise.reject() und einem eigen definiertem JSX (Fehlermeldung) mit dem key 'toggleOnReject={true}' und 'toggleReject' (eigenem Button - versuchen Sie es nochmals).",
    "readmore-callback-description-4": "Beispiel mit Promise.reject().",
    "readmore-callback-description-5": "Beispiel mit einem eigen definiertem JSX (Fehlermeldung), nach 2 Klicks mit einem Promise.reject() und bei dem 3 Klick Promise.resolve().",
    "modal.callback": {
        "description": "Zwingend erforderliche Callback Function um den aktuellen anzeige Status ändert. Der einzige übergebene Parameter ist der Event (keydown | touch | click).",
        "type": "Function",
        "default": "undefined"
    },
    "modal.data": {
        "description": "Eigen definiertes HTML order String der angezeigt werden soll.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "modal.close": {
        "description": "Eigen definiertes HTML order String. Zu diesem HTML wird die 'callback' Funktion hinzugefügt.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    "modal.closeOnKeyDown": {
        "description": "Füge den 'keydown' und 'touch' Event zu dem DOM Element hinzu um die 'callback' Funktion aufzurufen.",
        "type": "Boolean",
        "default": "true"
    },
    "modal.closeOnClickDimmed": {
        "description": "Füge den 'click' Event zu dem 'holder' des Modules hinzu um die 'callback' Funktion aufzurufen.",
        "type": "Boolean",
        "default": "true"
    },
    "timeline.lineMiddle": {
        "description": "Male eine Linie in der Mitte der Timeline.",
        "type": "Boolean",
        "default": "false"
    },
    "timeline.lineTitle": {
        "description": "Male eine Linie vom dem Betreff zur Mitte der Timeline.",
        "type": "Boolean",
        "default": "false"
    },
    "timeline.lineEntry": {
        "description": "Male eine Linie vom dem Kontent zur Mitte der Timeline.",
        "type": "Boolean",
        "default": "false"
    },
    "timeline.colorLineMiddle": {
        "description": "Die Farbe der mittleren Linie.",
        "type": "String",
        "default": "#dadce0"
    },
    "timeline.colorLineEntry": {
        "description": "Farbe der Linie der Schlüssel: 'lineTitle' und 'lineEntry'.",
        "type": "String",
        "default": "#dadce0"
    },
    "timeline.colorBorderEntry": {
        "description": "Die Umrandungsfarbe jedes einzelnene Timline Eintrages.",
        "type": "String",
        "default": "#dadce0"
    },
    "timeline.borderStyle": {
        "description": "Border Style. Verfügbare Optionen: 'solid', 'dashed', 'mixed' and '!mixed'.",
        "type": "String",
        "default": "solid"
    },
    "timeline.dashedSize": {
        "description": "Die Größe des 'borderStyle'. Funktioniert nur beim 'borderStyle' mit dem Wert 'dashed'. Verfügbare Optionen: 'small' and 'large'.",
        "type": "String",
        "default": "small"
    },
    "timeline.data": {
        "description": "Timelines Daten in Form eines Arrays aus Objekten.",
        "type": "[]",
        "default": "[]"
    },
    "timeline.data.title": {
        "description": "Benutzerdefinierts HTML für den Titel.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "timeline.data.align": {
        "description": "Seite des zu generierenden Eintrages.",
        "type": "String",
        "default": "center"
    },
    "timeline.data.content": {
        "description": "Benutzerdefinierts HTML für den Kontent.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "description.dragDrop.1": "Beispiel mit einer Standard-Drag & Drop-Funktion basierend auf einem Rückruf zum Anwenden der Statusänderungen.",
    "description.dragDrop.2": "Beispiel mit einer benutzerdefinierten Funktion callbackAllowDrop (Versprechen - Sie müssen mit dem Wert true oder false auflösen oder ablehnen), um true / false zurückzugeben, um Statusänderungen anzuwenden oder zu verwerfen.",
    "description.dragDrop.3": "Beispiel mit einer benutzerdefinierten Funktion callbackAllowDrop (Versprechen - Sie müssen mit dem Wert true oder false auflösen oder ablehnen), um true / false zurückzugeben, um Statusänderungen und das benutzerdefinierte Ladesymbol anzuwenden oder zu verwerfen, während Sie auf das warten Antwort der Funktion 'callbackAllowDrop'. ",
    "description.dragDrop.4": "Beispiel mit dem Bereich 'Obst' - nur Ablegen erlaubt und 'Gemüse' - nur Ziehen erlaubt.",
    "drag.drop.data": {
        "description": "Object.",
        "type": "Objekt",
        "default": "{}"
    },
    "drag.drop.data.data": {
        "description": "Array von Objekten mit einzelnen Elementen.",
        "type": "[]",
        "default": "undefined"
    },
    "drag.drop.data.data.text": {
        "description": "Haupttext für einzelne Elemente, der angezeigt werden soll.",
        "type": "String",
        "default": "undefined"
    },
    "drag.drop.data.data.props": {
        "description": "Eigenschaften einzelner Elemente (li).",
        "type": "String",
        "default": "undefined"
    },
    "drag.drop.data.name": {
        "description": "Bereichsname (Titel).",
        "type": "String",
        "default": "Objektschlüssel"
    },
    "drag.drop.data.areaProps": {
        "description": "Areas (ul) properties.",
        "type": "Objekt",
        "default": "{}"
    },
    "drag.drop.data.titleProps": {
        "description": "Titles properties.",
        "type": "String",
        "default": "Objektschlüssel"
    },
    "drag.drop.data.allowDrop": {
        "description": "Erlaube das Löschen von Elementen in diesem Bereich.",
        "type": "Boolean",
        "default": "true"
    },
    "drag.drop.data.allowDrag": {
        "description": "Erlaube das Ziehen von Elementen aus diesem Bereich.",
        "type": "Boolean",
        "default": "true"
    },
    "drag.drop.data.dropLoading": {
        "description": "Kann nur in Kombination mit dem Schlüssel 'callbackAllowDrop' verwendet werden. Benutzerdefinierte Ladedaten.",
        "type": "Boolean",
        "default": "true"
    },
    "drag.drop.itemsPerLine": {
        "description": "Wie viele Felder in einer Zeile.",
        "type": "Number",
        "default": "2"
    },
    "drag.drop.mediaBreak": {
        "description": "Standardmäßig wird der Hauptboxhalter (für jede Zeile 'itemsPerLine') zum Klassenflex, die Flex-Zeile bei Medienunterbrechung zum Klassenflex und zur Flex-Spalte.",
        "type": "Number",
        "default": "undefined"
    },
    "drag.drop.callback": {
        "description": "Benutzerdefinierter Benutzerrückruf mit den neu anzuwendenden Änderungen. Diese Funktion gibt 4 Argumente zurück. Argument 1: Vorheriger Status der aktuellen Daten, Argument 2: Nex-Status der aktuellen Daten, Argument 3: Änderungen, die vorgenommen werden, Argument 4: Benutzerdefinierte Daten stammen aus dem Schlüssel 'callbackProps'. ",
        "type": "Funktion",
        "default": "undefined"
    },
    "drag.drop.callbackProps": {
        "description": "Benutzerdefinierte Benutzerdaten.",
        "type": "Any",
        "default": "undefined"
    },
    "drag.drop.callbackAllowDrop": {
        "description": "Benutzerdefinierte Benutzer-Rückruffunktion mit den Änderungen vor dem Anwenden (Nachdem der Benutzer einen Löschvorgang ausgeführt hat, die Änderungen jedoch nicht in den neuen Status zurückgesetzt werden). Diese Funktion gibt 4 Argumente zurück. Argument 1: Vorheriger Status des aktuellen Status Daten, Argument 2: Nex-Status der aktuellen Daten, Argument 3: Änderungen, Argument 4: Benutzerdefinierte Daten stammen aus dem Schlüssel 'callbackAllowDropProps'. ",
        "type": "Funktion",
        "default": "undefined"
    },
    "drag.drop.callbackAllowDropProps": {
        "description": "Benutzerdefinierte Benutzerdaten.",
        "type": "Any",
        "default": "undefined"
    },
    "drag.drop.lineNumber": {
        "description": "Zeigt die Zeilennummer auf der linken Seite des Textes an.",
        "type": "Boolean",
        "default": "false"
    },
    "drag.drop.lineNumberChar": {
        "description": "kann nur verwendet werden, wenn der Schlüssel 'lineNumber' wahr ist. Zeigen Sie ein benutzerdefiniertes Zeichen nach der Zeilennummer an.",
        "type": "String",
        "default": "<empty string>"
    },
    "description.dragDropList.1": "Beispiel mit einer Standard-Drag & Drop-Funktion basierend auf einem Rückruf zum Anwenden der Statusänderungen.",
    "description.dragDropList.2": "Beispiel mit einer benutzerdefinierten Funktion callbackAllowDrop (Versprechen - Sie müssen mit dem Wert true oder false auflösen oder ablehnen), um true / false zurückzugeben, um Statusänderungen anzuwenden oder zu verwerfen.",
    "drag.drop.list.placeholder": {
        "description": "Benutzerdefinierte JSX-Daten, die im Platzhalter gerendert werden sollen.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "drag.drop.list.placeholderPosition": {
        "description": "Wenn der Benutzer mit dem Ziehen eines Elements beginnt und sich über der Ablageposition befindet, generieren Sie den PLACEHOLDER an der Stelle des schwebenden Elements. Verfügbare Optionen: 'top' (Platzhalter befinden sich immer oben auf einem schwebenden Element), ' bottom '(Platzhalter befinden sich immer am unteren Rand eines schwebenden Elements) und' auto '(Platzhalter werden automatisch erkannt). ",
        "type": "String",
        "default": "auto"
    },
    "drag.drop.list.areaProps": {
        "description": "Benutzerdefinierte ul Eigenschaften.",
        "type": "Objekt",
        "default": "{}"
    },
    "drag.drop.list.data": {
        "description": "Array von Objekten.",
        "type": "[]",
        "default": "[]"
    },
    "drag.drop.list.text": {
        "description": "Haupttext, der angezeigt werden soll.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "drag.drop.list.props": {
        "description": "Benutzerdefinierte li Eigenschaften.",
        "type": "Objekt",
        "default": "{}"
    },
    "stars.description.1": "Beispiel mit Sternen im schreibgeschützten Modus und ohne gefüllte Sterne und in der Standardfarbe Schwarz.",
    "stars.description.2": "Beispiel mit schreibgeschützten Sternen und 2 gefüllten 5er-Sternen und mit der gefüllten Farbe 'orange-yellow'.",
    "stars.description.3": "Beispiel mit Sternen im Rückrufmodus und 0 gefüllten 5er-Sternen und mit der benutzerdefinierten Rückruffunktion zum erneuten Rendern gefüllter Elemente nach dem Klicken auf den Stern.",
    "stars.description.4": "Beispiel mit benutzerdefinierten Eigenschaften, die an jeden Stern übergeben werden.",
    "stars.count": {
        "description": "Wie viele Sterne sollen erzeugt werden?",
        "type": "Number",
        "default": "0"
    },
    "stars.filled": {
        "description": "Wie viele Sterne sollen als gefüllt angezeigt werden.",
        "type": "Number",
        "default": "0"
    },
    "stars.fillHover": {
        "description": "Fülle einen ungefüllten Stern.",
        "type": "Boolean",
        "default": "false"
    },
    "stars.callback": {
        "description": "Benutzerdefinierte Rückruffunktion, wenn auf einen Stern geklickt wird. Diese Funktion gibt 3 Argumente zurück: Argument 1: das Klickereignis, Argument 2: der aktuell angeklickte Stern, Argument 3: callbackProps.",
        "type": "Funktion",
        "default": "undefined"
    },
    "stars.callbackProps": {
        "description": "Benutzerdefinierte definierte Daten, die als letztes Argument an die Rückruffunktion übergeben wurden.",
        "type": "Beliebig",
        "default": "undefined"
    },
    "stars.color": {
        "description": "Farbe der gefüllten und ungefüllten Sterne. Standardmäßig sind 3 Farben verfügbar: 'orange', 'orange-yellow' und 'yellow'.",
        "type": "String",
        "default": "<empty string>"
    },
    "stars.starsData": {
        "description": "Array von Objekten.",
        "type": "[]",
        "default": "[]"
    },
    "stars.starsData.props": {
        "description": "Objekt mit benutzerdefinierten Eigenschaften.",
        "type": "Objekt",
        "default": "{}"
    },
    "stars.starsData.data": {
        "description": "Benutzerdefinierte JSX-Daten, die im HTML-Code der Sterne angehängt sind.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "InputSuggestionObject.description.1": "Beispiel mit einer vorinstallierten Liste zum Filtern und eine key-sensitive Suche. Die Filterfunktion (key-sensitive / key-NOT-sensitive) wird intern ausgeführt und basiert auf dem untergeordneten (Objekt-) Schlüssel 'text'. Sie können Rendern / Anzeigen des Werts des Schlüssels 'Text' oder eines anderen Werts (JSX) durch Übergeben des Schlüssels 'jsx' an die Kinder (Objekt). ",
    "InputSuggestionObject.description.2": "Beispiel mit einer eine key-not-sensitive Suche und dem Schlüssel 'Laden' basierend auf der Rückruffunktion und dem übergebenen Rückruf muss ein Versprechen sein (in Kombination mit dem Schlüssel 'Laden'!). Für diese (Warte-) Zeit das Laden Es werden Symbole angezeigt. Wenn Sie das Versprechen auflösen oder ablehnen, werden die Ladesymbole / -daten ausgeblendet. ",
    "InputSuggestionArray.description.1": "Beispiel mit einer vorinstallierten Liste zum Filtern mit einer schlüsselsensitiven Suche. Die Filterfunktion (schlüsselsensitiv / schlüsselsensitiv) wird intern ausgeführt und basiert auf dem untergeordneten Text (Arrays) Eintrag.",
    "InputSuggestionArray.description.2": "Beispiel mit einer schlüsselunabhängigen Suche und mit dem Schlüssel 'Laden' basierend auf der Rückruffunktion und dem übergebenen Rückruf muss ein Versprechen sein (in Kombination mit dem Schlüssel 'Laden'!) Für diese (Warte-) Zeit wird das Ladesymbol angezeigt. Wenn Sie das Versprechen auflösen oder ablehnen, verschwinden das Ladesymbol / die Ladedaten. ",
    "CustomSuggestion.description.1": "Beispiel mit Vorschlägen mit einer href, um den Benutzer nach dem Klickereignis umzuleiten, und dem Schlüssel 'callbackRerender = {true}' (erforderlich, um den neuen internen Status zu akzeptieren) und mit einer Liste mit Vorab-Vorschlägen." ,
    "CustomSuggestion.description.2": "Beispiel mit Vorschlägen mit einem href, um den Benutzer nach dem Klickereignis umzuleiten, und dem Schlüssel 'callbackRerender = {false}' - seine mittlere Annahme, dass der Vorschlag von außerhalb stammt.",
    "CustomSuggestion.description.3": "Beispiel mit Vorschlägen mit einer href, um den Benutzer nach dem Klickereignis umzuleiten, und dem Schlüssel 'callbackRerender = {true}' (erforderlich, um den neuen Status = die eingehenden Vorschläge aus dem Versprechen zu akzeptieren) und a Die Suche ohne Schlüssel und mit dem Schlüssel 'Laden' basierend auf der Rückruffunktion und dem übergebenen Rückruf muss ein Versprechen sein (in Kombination mit dem Schlüssel 'Laden'!). Für diese (Warte-) Zeit wird das Ladesymbol angezeigt Wenn Sie das Versprechen auflösen oder ablehnen, verschwinden die Ladesymbole / Daten. ",
    "GlobalMessages.description.1": "Beispiel mit einer einzelnen Nachricht. Diese Nachricht verschwindet nur, wenn der Benutzer den aktuellen Speicherort ändert.",
    "GlobalMessages.description.2": "Beispiel mit einer einzelnen Nachricht. Diese Nachricht verschwindet nach zwei Sekunden.",
    "menu.headData": {
        "description": "Benutzerdefinierte JSX-Daten ganz oben im Menu.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "menu.activeClassName": {
        "description": "Wenn ein Element angeklickt wurde, bekommt es diesen Klassen Name.",
        "type": "String",
        "default": "is-active"
    },
    "menu.toggledClassName": {
        "description": "Wenn ein Element ge-toggled wurde, bekommt es diesen Klassen Name.",
        "type": "String",
        "default": "is-toggled"
    },
    "menu.isActiveTree": {
        "description": "Wie viele Element - ausgehen von dem Root Knoten - sollen als ACTIVE ('activeClassName') markiert werden. Der Wert -1 bedautet ohne Einschrenkungen.",
        "type": "Number",
        "default": "-1"
    },
    "menu.forceClose": {
        "description": "Erzwingung der Schließung aller anderen ROOT Elemente die nicht ge-toggled wurden.",
        "type": "Boolean",
        "default": "false"
    },
    "menu.forceCloseAll": {
        "description": "Erzwingung der Schließung ALLER anderen Elemente die nicht ge-toggled wurden.",
        "type": "Boolean",
        "default": "false"
    },
    "menu.align": {
        "description": "In welcher Richtung sollten die Menu Element erstellt werden. Ausgehent von links oder rechts.",
        "type": "String",
        "default": "left"
    },
    "menu.alignIcon": {
        "description": "Falls der key 'icon' mitgeliefert wurde, soll das Icon sich auf der rechten oder linke Seite befinden.",
        "type": "String",
        "default": "left"
    },
    "menuHeight.singleItemsHeight": {
        "description": "Einzelne Höhe jedes einzelnen Menu Eintrages. Nur relevant wärend der Daur einer Animation.",
        "type": "Number",
        "default": "35"
    },
    "menuHeight.animationTime": {
        "description": "Animationszeit um das interne Handling von Klassen zeitlich zu steuern. Um eine Animation mit CSS bündig hinzubekommen, wenn der Wert anders als 300 ist, muss man in der Datei 'rr-menu-height.scss' den Abschnitt 'animation: menuHeightAnimateStart <timout>ms ease-in forwards;' und 'animation: menuHeightAnimateStop <timout>ms ease-in forwards;' individuell anpassen.",
        "type": "Number",
        "default": "300"
    },
    "headerDataRight": {
        "description": "Die JSX Daten von dem Schlüssel 'headerData' sollen rechts angezeigt generiert werden und die JSX Daten von dem Schlüssel 'toggleMenuHtml' sollen links angezeigt werden. Falls false dann werden die JSX Daten von dem Schlüssel 'headerData' links angezeigt und die JSX Daten von dem Schlüssel 'toggleMenuHtml' werden rechts angezeigt.",
        "type": "Boolean",
        "default": "false"
    },
    "404.imagePath": {
        "description": "Source des Bildes.",
        "type": "String",
        "default": "<empty string>"
    },
    'slider.staticData' : {
        "description": "Statische Daten innerhalb des Sliders.",
        "type": "JSX | String",
        "default": "<empty string>"
    },
    'slider.onSlideTime' : {
        "description": "Sliders Tranformationszeit wärend eines AKTIVEN Mauß/Touch slides. Mögliche Werte sind '0' und von: '01' bis '30' (01 = 100ms, 20 = 2000ms, 30 = 3000ms).",
        "type": "String",
        "default": "0"
    },
    'slider.data' : {
        "description": "Ein Array aus Objekten.",
        "type": "{}[]",
        "default": "[]"
    },
    'slider.data.data': {
        "description": "Benutzerdefinierter Jsx-Code",
        "type": "String|Jsx",
        "default": "undefined"
    },
    'slider.data.image': {
        "description": "Source des Bildes.",
        "type": "String",
        "default": "undefined"
    },
    'slider.data.callback': {
        "description": "Bentuzerdefinierte Funktion die aufgerufen wird, wenn das Bild/ das Slide aufgerufen wird. Rückgabe Argumente sind: Argument 1: der Index des Slides, Argument 2: der Werte des Schlüssels 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'slider.data.callbackProps': {
        "description": "Bentuzerdefinierte Daten die als 2 Argument zu der Callback Funktion übergeben wird.",
        "type": "Any",
        "default": "undefined"
    },
    'slider.data.dot': {
        "description": "Bentuzerdefinierte Daten für den 'Inhalt' eines einzelenen navigierungs Punkt. Der Schlüssel displayDotsIndex muss false sein (displayDotsIndex={false}).",
        "type": "Any",
        "default": "undefined"
    },
    'slider.displayDots': {
        "description": "Erlauben von dem Rendern der Navigierungspunkte innerhalb des Paginators.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.callbackMount': {
        "description": "Bentuzerdefinierte Funktion die aufgerufen wird nachdem die Slider Componente initialisiert wurde. diese function liefert 1 Argument zurück, den Wert von dem Schlüssel: 'callbackMountProps'. Es wird ein Promise erwartet der als Rückgabe Wert eine Nummer erwartet. Diese Nummer erändert die Slide-Nummer. Der Wert darf nicht negativ sein (x >= 0) und nicht größer als die daten Länge (x < data.length).",
        "type": "Function",
        "default": "undefined"
    },
    'slider.callbackMountProps': {
        "description": "Bentuzerdefinierte Daten die als 1 Argument zu der 'callbackMount' Funktion übergeben wird.",
        "type": "Boolean",
        "default": "false"
    },
    'slider.imageAsBackground': {
        "description": "Fügen Sie das Bild nicht in ein <img /> -Tag ein, sondern als Hintergrundbild und rendern Sie benutzerdefinierte Daten innerhalb des Bildes / der Folie.",
        "type": "Boolean",
        "default": "false"
    },
    'slider.displayPagination' : {
        "description": "Rendern des Paginators erlauben - Der Button 'weiter' und der Button 'vorher'.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.paginationInside' : {
        "description": "Der Button 'weiter' und der Button 'vorher' sollen innerhalb des Sliders generiert werden (standard Einstellung). Wenn false, dann werden die Buttons außerhalb des Sliders generiert.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.dotsInside' : {
        "description": "Die Navigierungspunkte sollen innerhalb des Sliders generiert werden (standard Einstellung). Wenn false, dann werden die Punkte außerhalb des Sliders generiert.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.slideAfterMove' : {
        "description": "Autoslide nur nachdem der Wert größer oder gleich x (>=) als der hier angegebener Wert ist.",
        "type": "Number",
        "default": "50"
    },
    'slider.displayDotsIndex' : {
        "description": "Rendern des einzelnen Paginators Index erlauben.",
        "type": "Boolean",
        "default": "false"
    },
    'slider.buttonsAlwaysVisible' : {
        "description": "Navigations Buttons immer einblenden.",
        "type": "Boolean",
        "default": "false"
    },
    'slider.next' : {
        "description": "Bentuzerdefiniertes Jsx innerhalb des Buttons: weiter.",
        "type": "String | JSX",
        "default": ">"
    },
    'slider.previous' : {
        "description": "Bentuzerdefiniertes Jsx innerhalb des Buttons: früher.",
        "type": "String | JSX",
        "default": "<"
    },
    'slider.items.data' : {
        "description": "Array aus Objekten.",
        "type": "{}[]",
        "default": "[]"
    },
    'slider.items.data.data' : {
        "description": "Benutzerdefiniertes Jsx.",
        "type": "String|Jsx",
        "default": "undefined"
    },
    'slider.example1' : 'Slider mit der Verwendung des Keys buttonsAlwaysVisible={false} (standard Einstellung).',
    'slider.example2' : 'Slider mit der Verwendung des Keys buttonsAlwaysVisible={true}.',
    'slider.example3' : 'Slider mit der Verwendung des Keys displayPagination={false} um den Paginator auszublenden.',
    'slider.example4' : 'Slider mit der Verwendung des Keys displayDotsIndex={false}.',
    'slider.example5' : 'Slider mit der Verwendung des Keys dotsInside={false}.',
    'slider.example6' : 'Slider mit dem Beispiel der Elementen Generierung je nach Bildschirmbreite mit Verwendung der Schlüssel: resizeS, resizeL, resizeXL, resizeS, resizeL und resizeXL.',
    'steps.next' : {
        "description": "Bentuzerdefiniertes Jsx innerhalb des Buttons: weiter.",
        "type": "String | JSX",
        "default": "Next"
    },
    'steps.previous' : {
        "description": "Bentuzerdefiniertes Jsx innerhalb des Buttons: früher.",
        "type": "String | JSX",
        "default": "Previous"
    },
    'steps.submit' : {
        "description": "Bentuzerdefiniertes Jsx innerhalb des Buttons: Speichern.",
        "type": "String | JSX",
        "default": "Submit"
    },
    'steps.callback' : {
        "description": "Bentuzerdefinierte Funktion die aufgerufen wird, wenn der Button 'Speichern' gedrückt wird. Rückgabe Argumente sind: Argument 1: der Click Event, Argument 2: der Werte des Schlüssels 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'steps.callbackProps' : {
        "description": "Bentuzerdefinierte Daten die als 2 Argument zu der Callback Funktion übergeben wird.",
        "type": "Any",
        "default": "undefined"
    },
    'steps.progressBar' : {
        "description": "Anzeigesteuerung der animierten ProgressBar.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.iconStep' : {
        "description": "Navigiere zu dem nächsten Punkt der angeklickt wurde.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.callbackCheck' : {
        "description": "Falls true dann wird von der 'callback' Funktion ein Promise erwartet der true oder false zurückliefert. Falls true dann wird es erlaubt dem Benutzer weiter zu navigieren.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.callbackCheckNavigate' : {
        "description": "In Kombination mit 'callbackCheck={true}' wird geprüft ob der Promise des jeweiligen Steps false ist (wenn der Benutzer z.B.: von dem Step 1 zum Step 3 navigiert, müssen die Steps 1 udn 2 geprüft werden). Der Benutzer wir zu dem Step navigiert, wo der Promise den Wert false zurückliefert.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.liveGeneration' : {
        "description": "Schaltet eine spezielle Funktion frei um die Daten des Contents (eines einzelnen Steps) in echtzeit zu generieren. Funktioniert nur dann, wenn auch das Kindelement der Daten eine Callback Funktion 'liveGeneration' beinhaltet.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.data' : {
        "description": "Array aus Objekten.",
        "type": "{}[]",
        "default": "[]"
    },
    'steps.data.text' : {
        "description": "Der Text im einzelnen Step.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'steps.data.icon' : {
        "description": "Das Icon eines einzelnen Steps.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'steps.data.data' : {
        "description": "Der Content einses einzelnen Steps.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'steps.data.callback' : {
        "description": "Wenn der Benutzer den Button 'weiter' oder 'vorher' anklickt, wird diese Funktion aufgerufen. Diese liefert ein Argument zurück 'callbackProps'. Diese Funktion muss ein Promise zurück liefern. Wenn der Wert (resolve) true ist, wird dem Benutzer erlaubt weiter zu navigieren, ansonsten nicht.",
        "type": "Function",
        "default": "undefined"
    },
    'steps.data.callbackProps' : {
        "description": "Benutzerdefinierte Daten für die 'callback' Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'steps.data.onError' : {
        "description": "Benutzerdefinierte Funktion die aufgerufen wird, wenn die Funktion 'callback' false (Promise.resolve(false)) zurückliefert. Diese Funktion muss ein Promise zurückliefern. Das Ergebnis dieses Promises wird als Fehlermeldung interpretiert und dem Benutzer angezeigt. Diese Funktion liefert ein Argument zurück 'onErrorProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'steps.data.onErrorProps' : {
        "description": "Benutzerdefinierte Daten für die 'onError' Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'steps.data.liveGeneration' : {
        "description": "Benutzerdefinierte Funktion um die Daten des Contents (eines einzelnen Steps) in echtzeit zu generieren. Diese Funktion muss ein Promise zurückliefern. Das Ergebis von Promise.resolve(...) ist dann der Content (JSX) was der Benutzer sieht. Funktioniert nur wenn der übergeordnete Schlüssel 'liveGeneration={true}' ist. Diese Funktion liefert ein Argument zurück 'liveGenerationProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'steps.data.liveGenerationProps' : {
        "description": "Benutzerdefinierte Daten für die Funktion 'liveGeneration'.",
        "type": "Any",
        "default": "undefined"
    },
    'steps.errorDataInside': {
        "description": "Der Wert der Rückmeldung 'liveGeneration' (Fehlermeldung) soll auserhalb des Content Bereiches angezeigt werden. Falls true, wird die Meldung innerhalb des Content Bereiches angezeigt.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.errorAlignTop': {
        "description": "Der Wert der Rückmeldung 'liveGeneration' (Fehlermeldung) soll unterhalb des Content Bereiches angezeigt werden. Falls true, wird die Meldung überhalb des Content Bereiches angezeigt.",
        "type": "Boolean",
        "default": "false"
    },
    'steps.iconBg': {
        "description": "Icons Hintergrundfarbe.",
        "type": "String",
        "default": "rgb(71, 180, 118)"
    },
    'steps.progressBgBlank': {
        "description": "Erster Teil der animierten Progressbar.",
        "type": "String",
        "default": "rgba(71, 180, 118, 0.9)"
    },
    'steps.progressBgStripe': {
        "description": "Zweiter Teil der animierten Progressbar.",
        "type": "String",
        "default": "rgb(71, 180, 118)"
    },
    'steps.progressBgSize': {
        "description": "Linien Breite (in px) der animierten Progressbar.",
        "type": "Number",
        "default": "30"
    },
    'steps.buttonsBg': {
        "description": "Buttons Hintergrundfarbe (weiter, vorher, submit).",
        "type": "String",
        "default": "rgb(71, 180, 118)"
    },
    'steps.example1' : 'Steps mit den Standard Einstellungen.',
    'steps.example2' : 'Steps mit der Verwendung des Schlüssels progressBar={true}.',
    'steps.example3' : 'Steps mit der Verwendung des Schlüssels iconStep={true}.',
    'steps.example3a': 'Steps mit iner Benutzerdefinierten Farbenbestimmung.',
    'steps.example4' : 'Steps mit callbackCheck={true} und iconStep={true}.',
    'steps.example5' : 'Steps mit eine Benutzerdefinierten "onError" Funktion und Benutzerdefinierten Daten für diese Funktion "onErrorProps".',
    'steps.example6' : 'Steps mit eine Benutzerdefinierten "onError" Funktion, Benutzerdefinierten Daten für diese Funktion "onErrorProps" und Live Code (JSX) Code Generation mittels der Funktion "liveGeneration".',
    'menu.data.callback': {
        "description": "Benutzerdefiniert Funktion die ausgeführt wird, wenn ein Menu Element angeklickt wurde und dieses Element keine Kind-Element besistz. Die Funktion hat nur ein Rückgabe Argument, den Wert des Schlüssels 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'menu.data.callbackProps': {
        "description": "Benutzerdefiniertes Argument für die Callback Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'menu.data.externalLink': {
        "description": "Wenn der Wert true ist, wird der Tag <a> generiert mit dem Attribute target='_blank'.",
        "type": "Boolean",
        "default": "false"
    },
    'suggestion.applySelected': {
        "description": "Wenn der Wert false ist, dann wird der ausgewählte Wert (aus den DropDown Vorschlägen) nicht übernommen, dies hat den Zweck nur die Callback Funktion aufzurufen ohne die ausgewählte 'Suggestion' beizubehalten.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.cards.slideItemsXS':{
        "description": "Anzahl der zu bewegenden Elementen (einzelne Karten) wenn die Breite des Documents kleiner ist als (der Wert von) 'resizeS'.",
        "type": "Number",
        "default": "1"
    },
    'slider.cards.slideItemsS':{
        "description": "Anzahl der zu bewegenden Elementen (einzelne Karten) wenn die Breite des Documents kleiner ist als (der Wert von) 'resizeL' aber größer ist als (der Wert von) 'resizeS'.",
        "type": "Number",
        "default": "2"
    },
    'slider.cards.slideItemsL':{
        "description": "Anzahl der zu bewegenden Elementen (einzelne Karten) wenn die Breite des Documents kleiner ist als (der Wert von) 'resizeXL' aber größer ist als (der Wert von) 'resizeL'.",
        "type": "Number",
        "default": "3"
    },
    'slider.cards.slideItemsXL':{
        "description": "Anzahl der zu bewegenden Elementen (einzelne Karten) wenn die Breite des Documents größer ist als (der Wert von) 'resizeXL'.",
        "type": "Number",
        "default": "4"
    },
    'slider.items.itemsXS' : {
        "description": "Wie viele Objekte aus dem Übergebenen Schlüssel 'data' (Array) sollen in dem einzelnen Slide angezeigt werden wenn die Breite des Documents kleiner ist als (der Wert von) 'resizeS'.",
        "type": "Number",
        "default": "1"
    },
    'slider.items.itemsS' : {
        "description": "Wie viele Objekte aus dem Übergebenen Schlüssel 'data' (Array) sollen in dem einzelnen Slide angezeigt werden wenn die Breite des Documents kleiner ist als (der Wert von) 'resizeL' aber größer ist als (der Wert von) 'resizeS'.",
        "type": "Number",
        "default": "2"
    },
    'slider.items.itemsL' : {
        "description": "Wie viele Objekte aus dem Übergebenen Schlüssel 'data' (Array) sollen in dem einzelnen Slide angezeigt werden wenn die Breite des Documents kleiner ist als (der Wert von) 'resizeXL' aber größer ist als (der Wert von) 'resizeL'.",
        "type": "Number",
        "default": "3"
    },
    'slider.items.itemsXL' : {
        "description": "Wie viele Objekte aus dem Übergebenen Schlüssel 'data' (Array) sollen in dem einzelnen Slide angezeigt werden wenn die Bildschirmbreite größer (oder gleich) ist als der übergebene Wert im Schlüssel 'resizeXL'.",
        "type": "Number",
        "default": "4"
    },
    'slider.items.resizeS' : {
        "description": "Wenn die Breite des Documents kleiner als dieser Wert ist, dann ist die anzahl der Generierten Element 'itemsXS'. Wenn die Breite des Documents größer ist als dieser Wert und kleiner als 'itemsL', dann soll die Anzahl der generierten Elemente 'itemsS' entsprechen.",
        "type": "Number",
        "default": "768"
    },
    'slider.items.resizeL' : {
        "description": "Wenn die Breite des Documents größer ist als dieser Wert und kleiner als 'itemsXL', dann soll die Anzahl der generierten Elemente 'itemsL' entsprechen.",
        "type": "Number",
        "default": "1024"
    },
    'slider.items.resizeXL' : {
        "description": "Wenn die Breite des Documents größer ist als dieser Wert, dann soll die Anzahl der generierten Elemente 'itemsXL' entsprechen.",
        "type": "Number",
        "default": "1260"
    },
    'slider.paginationType' : {
        "description": "Paginator Typ. Mögliche Typen: 1 und 2.",
        "type": "Number",
        "default": "1"
    },
    'slider.autoplay' : {
        "description": "Soll der Slide sich automatisch wechseln.",
        "type": "Boolean",
        "default": "false"
    },
    'slider.autoplayTime' : {
        "description": "Zeitverzögerung (Timeout) für jeden nächsten slide nach dem vorherigen oder nachdem die Komponente ge-mounted wurde.",
        "type": "Number",
        "default": "5000"
    },
    'slider.autoplayNext' : {
        "description": "Wenn true dann ist die Slide Richtung rechts, falls false dann links.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.animationTime' : {
        "description": "Sliders Tranformationszeit beim autoplay und beim Mouse/Touch move. Mögliche Werte von: '01' bis '30' (01 = 100ms, 20 = 2000ms, 30 = 3000ms).",
        "type": "String",
        "default": "06"
    },
    'slider.allowMouseTouch' : {
        "description": "Dem Benutzer erlauben den Slider mit der Maus oder dem Finger (TouchScreen) zu ändern.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.wrapDirection' : {
        "description": "Wenn true und der Benutzer im ersten Slide ist, und den Button vorher drückt wird zum letzten Slide navigiert und umgegehrt. Wenn der Benutzer im letzten Slide ist und den Button weiter drückt, wird der erste Slide angezeigt.",
        "type": "Boolean",
        "default": "true"
    },
    'slider.inlineStyle' : {
        "description": "Wenn der Slider mit der Maus bewegt wird ein inline-style verwendet. Wenn false dann setState.",
        "type": "Boolean",
        "default": "false"
    },
    'slider.example7': 'Beispiel mit der Verwendung des Schlüssels paginationType={2}.',
    'slider.example8': 'Beispiel mit der Verwendung des Schlüssels autoplay={true} und autoplayTime={5000}.',
    'slider.example9': 'Beispiel mit der Verwendung des Schlüssels animationTime="10" um alle Animationen zu beschrencken auf 1000ms.',
    'slider.useLayerX' : {
        "description": "Wenn der Slider (in der Desktop Variante) bewegt wird, wird zum bewegen des Sliders der Wert von event.layerX genommen. Wenn der Wert dieses Schlüssels false ist, wird der Wert von event.clientX genommen.",
        "type": "Boolean",
        "default": "false"
    },
    'overlay.display' : {
        "description": "Anzeigesteuerung des Overlays.",
        "type": "Boolean",
        "default": "false"
    },
    'overlay.callback' : {
        "description": "Benutzerdefinierte Funktion die aufgerufen wird wenn, der 'Escape' Key gedrückt wird oder der dunkle Rand angeklickt wird. Diese Funktion liefert ein Argument zurück 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'overlay.callbackProps' : {
        "description": "Benutzerdefinierte Daten die als Argument für die 'callback' Funktion übergeben werden.",
        "type": "Any",
        "default": "undefined"
    },
    'overlay.data' : {
        "description": "Benutzerdefinierte Daten innerhalb des Overlays.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'popupData.direction' : {
        "description": "Richtung des Popup Fensters relativ zu dem 'Holder' Mögliche Richtungen: 'left', 'right' oder 'center'.",
        "type": "String",
        "default": "left"
    },
    'popupData.holderData' : {
        "description": "Benutzerdefinierte Daten die er Auslöser sind, damit das Popup Fenster erscheint. Es gibt voreingetragene Platzhalter: dots, square, hamburger und hamburger-left. Diese Namen sind auch reserviert und können nicht geändert werden.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'popupData.animationTimeout' : {
        "description": "Falls der Entwickler in seinem CSS eine andere transition-duration Zeit angegeben hat als 300, dann benötigt das Modul (um 100% kompatibel zu sein) diesen Wert hier. Dies ist nur relevant wenn man sich für einen vordefinierten Platzhalter entscheided: dots, square, hamburger oder hamburger-left.",
        "type": "Number",
        "default": "300"
    },
    'popupData.animation' : {
        "description": "Falls der Entwickler sich für einen vordefinierten Platzhalter entscheided: dots, square, hamburger oder hamburger-left wird automatisch eine Animation ausgelöst. Falls man diese ausschalten möchte muss der Wert 'false' sein (animation={false}). Wenn animtion={true} und das Menu angezeigt werden soll, dann bekommt der Root <div> die Klasse 'data-active', wenn das Menu wieder geschlossen wird, bekommt der Root <div> die Klasse 'data-inactive'.",
        "type": "Boolean",
        "default": "true"
    },
    'popupData.contentData' : {
        "description": "Benutzerdefiniertes JSX oder ein Array aus Objekten.",
        "type": "{}[] | JSX",
        "default": "[]"
    },
    'popupData.contentData.data' : {
        "description": "Benutzerdefiniertes JSX falls man sich bei dem Schlüssel 'contentData' für ein Array aus Objekten entscheided. Jedes einzelnes Feld 'data' wird ein <li> gepackt.",
        "type": "JSX|String",
        "default": "undefined"
    },
    'popupData.example1' : 'Beispiel mit einem benutzerdefiniertem Platzhalter, OUTSIDE - LEFT (der Platzhalter befindet sich auserhalb der Daten), benutzerdefiniertem Platzhalter und Daten in Form eines Arrays aus Objekten.',
    'popupData.example1a' : 'Beispiel mit einem benutzerdefiniertem Platzhalter, OUTSIDE - LEFT (der Platzhalter befindet sich auserhalb der Daten), benutzerdefiniertem Platzhalter und Daten in Form on JSX.',
    'popupData.example2' : 'Beispiel mit einem benutzerdefiniertem Platzhalter, OUTSIDE - RIGHT (der Platzhalter befindet sich auserhalb der Daten), benutzerdefiniertem Platzhalter und Daten in Form eines Arrays aus Objekten.',
    'popupData.example3' : 'Beispiel mit einem benutzerdefiniertem Platzhalter, OUTSIDE - CENTER (der Platzhalter befindet sich auserhalb der Daten), benutzerdefiniertem Platzhalter und Daten in Form eines Arrays aus Objekten.',
    'popupData.example4' : 'Beispiel mit einem benutzerdefiniertem Platzhalter, INSIDE - LEFT (der Platzhalter befindet sich innerhalb der Daten), benutzerdefiniertem Platzhalter und Daten in Form eines Arrays aus Objekten.',
    'popupData.example5' : 'Beispiel mit einem benutzerdefiniertem Platzhalter, INSIDE - RIGHT (der Platzhalter befindet sich innerhalb der Daten), benutzerdefiniertem Platzhalter und Daten in Form eines Arrays aus Objekten.',
    'popupData.example6' : 'Beispiel mit einem benutzerdefiniertem Platzhalter, INSIDE - CENTER (der Platzhalter befindet sich innerhalb der Daten), benutzerdefiniertem Platzhalter und Daten in Form eines Arrays aus Objekten.',
    'popupData.example7' : 'Beispiel mit der Verwendung eines vordefiniertem Platzhalters: DOTS. Um die Animation auszuschalten (wenn das Element angeklickt wurde) muss man der Komponente den Schlüssel animation={false} übergeben.',
    'popupData.example8' : 'Beispiel mit der Verwendung eines vordefiniertem Platzhalters: SQUARE. Um die Animation auszuschalten (wenn das Element angeklickt wurde) muss man der Komponente den Schlüssel animation={false} übergeben.',
    'popupData.example9' : 'Beispiel mit der Verwendung eines vordefiniertem Platzhalters: HAMBURGER. Um die Animation auszuschalten (wenn das Element angeklickt wurde) muss man der Komponente den Schlüssel animation={false} übergeben.',
    'popupData.example10' : 'Beispiel mit der Verwendung eines vordefiniertem Platzhalters: HAMBURGER-RIGHT. Um die Animation auszuschalten (wenn das Element angeklickt wurde) muss man der Komponente den Schlüssel animation={false} übergeben.',
    'menuXY.direction' : {
        "description": "Richtung der anzuzeigenden Kindelemente. Mögliche Richtungen: 'right' und 'left'.",
        "type": "String",
        "default": "right"
    },
    'menuXY.data' : {
        "description": "Array aus Objekten.",
        "type": "{}[]",
        "default": "[]"
    },
    'menuXY.data.callback' : {
        "description": "Benutzerdefinierte Funktion die aufgerufen wird sobald ein Kind Element angeklickt wird. Diese Funktion liefert ein Argument zurück 'callbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'menuXY.data.callbackProps' : {
        "description": "Benutzerdefinierte Daten für die 'callback' Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'menuXY.data.data' : {
        "description": "Weitere verschachtelte Kindelemente.",
        "type": "{}[]",
        "default": "undefined"
    },
    'menuXY.example1': "Beispiel mit der Richgtung der Kindelemente: 'right'.",
    'menuXY.example2': "Beispiel mit der Richgtung der Kindelemente: 'left'.",
    'menuXY.example1a': "Beispiel mit der Richgtung der Kindelemente: 'right'.",
    'menuXY.example2a': "Beispiel mit der Richgtung der Kindelemente: 'left'.",
    'menuDropDown.placeholder' : {
        "description": "Platzhalter damit das Menu angezeigt werden kann.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'menuDropDown.holderLoading' : {
        "description": "Wenn die Daten 'geholt' werden, wird in dieser Zeit ein Lade-Platzhalter angezeigt.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'menuDropDown.callback' : {
        "description": "Wenn der Platzhalter angeklickt wird, wird diese Funktion aufgerufen um die Benutzerdefinierten Daten zu laden. Diese callback Funktion muss ein Promise zurückliefern. Diese Funktion gibt ein Argument zurück: 'callbackProps'.",
        "type": "Funktion",
        "default": "undefined"
    },
    'menuDropDown.callbackProps' : {
        "description": "Einziges Argument für die 'callback' Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'menuDropDown.closeOnEsc' : {
        "description": "Wenn der Endanwender die Taste 'Esc' drückt, wird das Menü geschlossen. Falls man dieses Feature abschalten möchte, soll der Wert dieses Schlüssels auf 'false' gesetzt werden.",
        "type": "Boolean",
        "default": "true"
    },
    'menuDropDown.closeOnOutsideClick' : {
        "description": "Wenn der Endanwender einen Mausklick außerhalb des Menüs tätigt, wird das Menü geschlossen. Falls man dieses Feature abschalten möchte, soll der Wert dieses Schlüssels auf 'false' gesetzt werden.",
        "type": "Boolean",
        "default": "true"
    },
    'menuDropDown.example1' : 'Beispiel mit einer sofortiger Anzeigen von Daten.',
    'menuDropDown.example2' : 'Beispiel mit einem Lade Platzhalter in der Zeit wo die Daten geladen werden.',
    'listSwitch.data' : {
        "description": "Vordefinierte Daten die schon bereit stehen wenn die Komponente geladen wird.",
        "type": "String|Jsx",
        "default": "<empty string>"
    },
    'listSwitch.data' : {
        "description": "Vordefinierte Daten die schon bereit stehen wenn die Komponente geladen wird. Dies gilt nur wenn der Schlüssel 'callback' undefined ist!",
        "type": "String|Jsx",
        "default": "<empty string>"
    },
    'listSwitch.data.text' : {
        "description": "Anzuzeigendes JSX",
        "type": "String|Jsx",
        "default": "undefined"
    },
    'listSwitch.data.next' : {
        "description": "Falls dieses Mutter-Element Kindelement beinhaltet (data:[]), wird dieses JSX als der Button 'weiter' dargestellt.",
        "type": "String|Jsx",
        "default": "<"
    },
    'listSwitch.data.previous' : {
        "description": "Das anzuzeigende JSX, der 'zurück' Button, innerhalb von Kind-Elementen.",
        "type": "String|Jsx",
        "default": ">"
    },
    'listSwitch.data.callback' : {
        "description": "Falls der Endanwender ein Element anklickt, wird diese Funktion aufgerufen. Diese Funktion liefer den Wert von 'callbackProps' zurück.",
        "type": "Funktion",
        "default": "undefined"
    },
    'listSwitch.data.callbackProps' : {
        "description": "Einziges Argument der 'callback' Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'listSwitch.previous' : {
        "description": "Wenn der Benutzer ein verschachteltes Element anklickt, werden die Daten dieses Schlüssels als 'zurück' Button bereitgestellt. Der zurück Button, kann (falls vorhanden) von den Kindelementen überschrieben werden!",
        "type": "String|Jsx",
        "default": "<"
    },
    'listSwitch.next' : {
        "description": "Wenn in Element verschachtelte Kindelement beinhaltet, werden die Daten dieses Schlüssels als 'weiter' Button bereitgestellt. Der weiter Button, kann (falls vorhanden) von den Kindelementen überschrieben werden!",
        "type": "String|Jsx",
        "default": ">"
    },
    'listSwitch.title' : {
        "description": "Erster Titel der Daten. Alle weiteren Titels werden aus dem jeweiligen angeklickten Element dargestellt (Der Schlüssel 'text' des angeklickten Kindelementes).",
        "type": "String|Jsx",
        "default": "<empty string>"
    },
    'listSwitch.arrowNextClick' : {
        "description": "Soll der Klick Event auf den 'next' Button angelagert werden oder global auf das ganze Element. Gilt nur für den 'weiter' Button.",
        "type": "Boolean",
        "default": "false"
    },
    'listSwitch.arrowNextClick' : {
        "description": "Soll der Klick Event auf den 'next' Button angelagert werden oder global auf das ganze Element. Gilt nur für den 'weiter' Button.",
        "type": "Boolean",
        "default": "false"
    },
    'listSwitch.animation' : {
        "description": "Das Bewegen innerhalb der Mutter-Kind-Element soll animiert werden.",
        "type": "Boolean",
        "default": "true"
    },
    'listSwitch.animationTimeout' : {
        "description": "Das Bewegen innerhalb der Mutter-Kind-Element soll wiederhergestellt werden (Endeder Animation) nach dieser Zeit (ms). Muss kompatibel mit der (react-revolution) CSS Datei sein ($default-transition: 300ms).",
        "type": "Number",
        "default": "350"
    },
    'listSwitch.animationTimeout' : {
        "description": "Das Bewegen innerhalb der Mutter-Kind-Element soll wiederhergestellt werden (Endeder Animation) nach dieser Zeit (ms). Muss kompatibel mit der (react-revolution) CSS Datei sein ($default-transition: 300ms).",
        "type": "Number",
        "default": "350"
    },
    'listSwitch.closeAfterCallback' : {
        "description": "Wenn ein (verschacheltes) Element eine 'callback' Funktion beinhaltet (es handelt sich hier nicht um die root 'callback' Funktion), wird nach dem Aufruf dieser Funktion, die angezeigten Daten geschloßen.",
        "type": "Boolean",
        "default": "false"
    },
    'listSwitch.resetSlides' : {
        "description": "Wenn die angezeigten Daten wieder geschloßen werden, wird der Inhalt der geswitchten Daten wieder auf den Anfang zurück gestellt.",
        "type": "Boolean",
        "default": "false"
    },
    'listSwitch.resetData' : {
        "description": "Wenn die angezeigten Daten wieder geschloßen werden, werden die Daten die von der Komponente erhalten wurde gelöscht, somit ist die 'callback' Funktion wieder aktiviert um (eventuell neue) Daten wieder nachzuladen, wenn der Benutzer nochmals die Daten anzeigen lässt.",
        "type": "Boolean",
        "default": "false"
    },
    'listSwitch.example1': 'Beispiel mit einer Bereitstellung von Daten direkt bei dem Laden der Komponente.',
    'listSwitch.example2': 'Beispiel mit einer Bereitstellung von Daten, erst nachdem der Benutzer den Platzhalter angeklickt hat. Falls der Wert des Schlüssels "resetData" nicht true ist, dann werden die Daten nur einmal geladen, danach sind die Daten immer verfügbar, ohne das Laden der Daten nochmals anzustoßen.',
    'stepGen.maxSteps': {
        "description": "Das Maximum an Schritten.",
        "type" : "Number",
        "default": "undefined"
    },
    'stepGen.stepsData': {
        "description": "Array von Objekten. Jeder einzelne Index dieses Arrays ist der Index, wenn der Schritt.",
        "type": "{}",
        "default": "[]"
    },
    'stepGen.stepsData.data': {
        "description": "Benutzerdefinierte Daten des Schritts.",
        "type": "Boolean",
        "default": "false"
    },
    'stepGen.stepsData.top': {
        "description": "Benutzerdefinierte Daten oben im Schritt anzeigen.",
        "type": "Boolean",
        "default": "false"
    },
    'stepGen.stepsData.bottom': {
        "description": "Benutzerdefinierte Daten am Ende des Schritts anzeigen.",
        "type": "Boolean",
        "default": "false"
    },
    'stepGen.newStepData': {
        "description": "Funktion zum Bereitstellen benutzerdefinierter Daten für jeden neu generierten Schritt. Die minimale Struktur des Rückgabewerts muss {data: any = undefined ,? top: boolean = false ,? bottom: boolean = false} sein.",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.mountCallback': {
        "description": "Rückruffunktion nach componentDidMount (nur einmal aufgerufen) zum Speichern der generierten UUIDs für jeden einzelnen Schritt. Die Generierung der UUIDs wird von der Komponente bereitgestellt. Der Rückgabewert ist 'stepData' mit dem neuen ' uuid '. ",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.stepRemovedCallback': {
        "description": "Rückruffunktion, wenn ein Schritt entfernt wurde, um Ihre bereitgestellten 'stepData' zu aktualisieren.",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.callback': {
        "description": "Benutzerdefiniert Funktion die immer aufgerufen wird, sobal eine Änderung im eines der Input/Textare Felder gemacht wird. Diese Funktion liefert 2 Argumnte zurück. Argument 1: callbackProps, Argument 2: die jetztigen Werte (Array aus Objekten) der Input/Textare Felder.",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.callbackProps': {
        "description": "Der Wert des ersten Arguemnts der 'callback' Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'stepGen.defaultSteps': {
        "description": "Anzahl der zu generierender Felder.",
        "type": "Number",
        "default": "3"
    },
    'stepGen.addNewStepOn': {
        "description": "Wenn der Benutzer im Feld x ist, wird geprüft wie viele Felder noch übrig sind. Wenn die Anzahl der Übrigen Felder kleiner oder gleich diesem Wert ist, wird ein zusätzliches Feld automatisch hinzugefügt. Wenn der Wert dieses Schlüssel 0 ist, wird die Autogenerierung ignoriert.",
        "type": "Number",
        "default": "0"
    },
    'stepGen.addStep': {
        "description": "Benutzerdefiniertes JSX für den Benutzer, damit ein weiteres Feld manuell hinzugefügt werden kann.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'stepGen.removeStep': {
        "description": "Benutzerdefiniertes JSX für den Benutzer, damit ein einzelnes Feld wieder gelöscht werden kann.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'stepGen.stepPrefix': {
        "description": "Prefix für den Benutzer des jeweiligen Schrittes.",
        "type": "String | JSX",
        "default": "Step"
    },
    'stepGen.displayStepCount': {
        "description": "Der Count des jeweiligen Schrittes. Wird hinter dem Prefix dargestellt.",
        "type": "Boolean",
        "default": "false"
    },
    'stepGen.useInput': {
        "description": "Anstatt eines Textare Feldes, wird ein Input Feld generiert, wenn der Wert dieses Schlüssels 'true' ist.",
        "type": "Boolean",
        "default": "false"
    },
    'stepGen.onEnter': {
        "description": "Wenn der Benutzer 'Enter' drückt (innerhalb eines Input/Textarea Feldes), wird diese Funktion mit dem Argument 'onEnterProps' aufgerfuen.",
        "type": "Funktion",
        "default": "undefined"
    },
    'stepGen.onEnterProps': {
        "description": "Das einzige Argument für die 'onEnter' Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'stepGen.onEsc': {
        "description": "Wenn der Benutzer 'Esc' drückt (innerhalb eines Input/Textarea Feldes), wird diese Funktion mit dem Argument 'onEscProps' aufgerfuen.",
        "type": "Funktion",
        "default": "undefined"
    },
    'stepGen.onEscProps': {
        "description": "Das einzige Argument für die 'onEsc' Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'stepGen.removeStepAlignTop': {
        "description": "Das JSX zum löschen eines Schrittes wird überhalb des einzelnen Schrittes angezeigt. Falls der Wert 'false' ist, wird der Löschbutton unterhalb angezeigt.",
        "type": "Boolean",
        "default": "true"
    },
    'stepGen.submit': {
        "description": "Ein 'submit' Button der Unterhalb der Schritte generiert wird.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'stepGen.submitCallback': {
        "description": "Benutzerdefiniert Funktion die aufgerfuen wird nachdem der Benutzer den 'submit' Button angeklickt hat. Diese Funktion liefert ein Argument zurück 'submitCallbackProps'.",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.submitCallbackProps': {
        "description": "Das einzige Argument für die 'submitCallback' Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'stepGen.resetOnSubmit': {
        "description": "Nachdem der Benutzer den 'submit' Button angeklickt hat, wird die ganze Komponente auf den ursprünglichen Zustand wiederhergestellt.",
        "type": "Boolean",
        "default": "false"
    },
    'stepGen.example1': 'Beispiel mit der Generierung von 3 Feldern (zum Start), eine Lösch- und Submit Button. Öffne deine Entwickler Konsole umd die Änderungen zu beobachten.',
    'stepGen.example2' : 'Beispiel mit Benutzerdefinierten Daten für jeden Step auser dem zweiten.',
    'stepGenDragDrop.placeholderPosition' : {
        "description": "Wenn der Benutzer mit dem Ziehen eines Elements beginnt und sich über der Ablageposition befindet, generieren Sie den PLACEHOLDER an der Stelle des schwebenden Elements. Verfügbare Optionen: 'top' (Platzhalter befinden sich immer oben auf einem schwebenden Element), ' bottom '(Platzhalter befinden sich immer am unteren Rand eines schwebenden Elements) und' auto '(Platzhalter werden automatisch erkannt). ",
        "type": "String",
        "default": "auto"
    },
    'stepGenDragDrop.placeholder' : {
        "description": "Anzuzeigender Platzhalter wärend einer Drag Phase.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'stepGenDragDrop.stepReorderCallback': {
        "description": "Nachdem der Benutzer Drag & Drop getätig hat, werden die Benutzerdefinierten daten 'stepsData' neu geordnet.",
        "type": "Function",
        "default": "undefined"
    },
    'stepGen.data': {
        "description": "Array aus Objekten um vordefinierte Daten zu verwenden. Falls data vorhanden, wird der Wert des Schlüssels 'defaultSteps' ignoriert.",
        "type": "{}[]",
        "default": "[]"
    },
    'stepGen.data.value': {
        "description": "Der Wert eines einzelnen Feldes.",
        "type": "String|Number",
        "default": "undefined"
    },
    'stepGenDragDrop.example1': 'Beispiel mit der Generierung von 3 Feldern (zum Start), eine Lösch- und Submit Button, eines selbst definiertem Platzhalter und der Platzhalter Richtung "auto". Öffne deine Entwickler Konsole umd die Änderungen zu beobachten.',
    'timelineList.direction': {
        "description": "Richtung der Timeline. Mögliche Richtungen: 'right' und 'left'.",
        "type": "String",
        "default": "left"
    },
    'timelineList.data': {
        "description": "Objekt aus Objekten.",
        "type": "{}",
        "default": "undefined"
    },
    'timelineList.data.props': {
        "description": "HTML Argumente für den Schlüssel des Objektes (Zeit - Title des jeweiligen Timline Eintrages).",
        "type": "{}",
        "default": "undefined"
    },
    'timelineList.data.data': {
        "description": "Objekt.",
        "type": "{}",
        "default": "undefined"
    },
    'timelineList.data.icon': {
        "description": "Anzuzeigendes JSX anstelle des Icons.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'timelineList.data.iconProps': {
        "description": "HTML Argumente für das Icon HTML Element.",
        "type": "{}",
        "default": "undefined"
    },
    'timelineList.data.dataProps': {
        "description": "HTML Argumente für das data HTML Element.",
        "type": "{}",
        "default": "undefined"
    },
    'timelineList.data.callback': {
        "description": "Callback Funktion nachdem ein Benutzer das 'Icon' anklickt. Diese Funktion liefert ein einzelnes Argument: 'callbackProps' zurück.",
        "type": "Funktion",
        "default": "undefined"
    },
    'timelineList.data.callbackProps': {
        "description": "Einzelnes Argument der 'callback' Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'timelineList.data.data.data': {
        "description": "Benutzerdefinierte JSX Daten des einzelnen Timeline Eintrages.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'timelineList.timelineStart': {
        "description": "Benutzerdefinierte JSX Daten die am Anfang der Timeline (Anfang des Striches ganz oben) angezeigt werden.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'timelineList.timelineEnd': {
        "description": "Benutzerdefinierte JSX Daten die am End der Timeline (Ende des Striches ganz unten) angezeigt werden.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'timelineList.example1' : 'Beispiel mit der Timeline auf der linken Seite und der Verwendung der Schlüssel: "timelineStart" und "timelineEnd". Öffne deine Entwickler Konsole um die Logs beim anklicken der Icons zu beobachten.',
    'timelineList.example2' : 'Beispiel mit der Timeline auf der linken Seite und ohne der Verwendung der Schlüssel: "timelineStart" und "timelineEnd". Öffne deine Entwickler Konsole um die Logs beim anklicken der Icons zu beobachten.',
    'timelineList.example3' : 'Beispiel mit der Verwendung von props.',
    'fss.fsDisplayPagination' : {
        "description": "Rendern des Paginators erlauben - Der Button 'weiter' und der Button 'vorher'.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsSlideAfterMove' : {
        "description": "Autoslide nur nachdem der Wert größer oder gleich x (>=) als der hier angegebener Wert ist.",
        "type": "Number",
        "default": "50"
    },
    'fss.fsDisplayPreview' : {
        "description": "Erlauben vom rendern der Vorschaubilder unterhalb des Fullscreen Sliders.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsPreviewWidth' : {
        "description": "Die Weite (px) eines einzelnen Vorschaubildes unterhalb des Fullscreen Sliders.",
        "type": "Number",
        "default": "80"
    },
    'fss.fsPreviewHeight' : {
        "description": "Die Höhe (px) eines einzelnen Vorschaubildes unterhalb des Fullscreen Sliders.",
        "type": "Number",
        "default": "80"
    },
    'fss.fsPreviewMarginX' : {
        "description": "Die CSS Eigenschaft margin-left/right (px) eines einzelnen Vorschaubildes unterhalb des Fullscreen Sliders.",
        "type": "Number",
        "default": "10"
    },
    'fss.fsPreviewMarginY' : {
        "description": "Die CSS Eigenschaft margin-top/bottom (px) eines einzelnen Vorschaubildes unterhalb des Fullscreen Sliders.",
        "type": "Number",
        "default": "10"
    },
    'fss.fsWrapDirection' : {
        "description": "Wenn true und der Benutzer im ersten Slide ist, und den Button vorher drückt wird zum letzten Slide navigiert und umgegehrt. Wenn der Benutzer im letzten Slide ist und den Button weiter drückt, wird der erste Slide angezeigt.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsPreviewToggle' : {
        "description": "Benutzerdefiniertes JSX innerhalb des Buttons um den unteren Vorschauslider zu verschtecken oder wieder anzuzeigen.",
        "type": "String | JSX",
        "default": "⇩"
    },
    'fss.fsToggleDirection' : {
        "description": "Anzuzeigende Seite des Buttons um den unteren Vorschauslider zu verschtecken oder wieder anzuzeigen. Mögliche Werte: 'left' oder 'right'.",
        "type": "String | JSX",
        "default": "right"
    },
    'fss.fsImageAsBackground' : {
        "description": "Fügen Sie das Bild nicht in ein <img /> -Tag ein, sondern als Hintergrundbild und rendern Sie benutzerdefinierte Daten innerhalb des Bildes / der Folie.",
        "type": "Boolean",
        "default": "false"
    },
    'fss.fsAutoplayIcon' : {
        "description": "Benutzerdefiniertes JSX um eine Slideshow zu starten.",
        "type": "String | JSX",
        "default": "🎞"  
    },
    'fss.fsCloseIcon' : {
        "description": "Benutzerdefiniertes JSX um den Slider zu schließn.",
        "type": "String | JSX",
        "default": "x" 
    },
    'fss.fsUseLayerX' : {
        "description": "Wenn der Slider (in der Desktop Variante) bewegt wird, wird zum bewegen des Sliders der Wert von event.layerX genommen. Wenn der Wert dieses Schlüssels false ist, wird der Wert von event.clientX genommen.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsAutoplayTime' : {
        "description": "Zeitverzögerung (Timeout) für jeden nächsten slide nach dem vorherigen oder nachdem die Komponente ge-mounted wurde.",
        "type": "Number",
        "default": "5000"
    },
    'fss.fsAutoplayNext' : {
        "description": "Wenn true dann ist die Slide Richtung rechts, falls false dann links.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsAnimationTime' : {
        "description": "Sliders Tranformationszeit beim autoplay und beim Mouse/Touch move. Mögliche Werte von: '01' bis '30' (01 = 100ms, 20 = 2000ms, 30 = 3000ms).",
        "type": "String",
        "default": "05"        
    },
    'fss.fsNext' : {
        "description": "Bentuzerdefiniertes Jsx innerhalb des Buttons: weiter.",
        "type": "String | JSX",
        "default": ">"  
    },
    'fss.fsPrevious' : {
        "description": "Bentuzerdefiniertes Jsx innerhalb des Buttons: früher.",
        "type": "String | JSX",
        "default": "<"
    },
    'fss.fsAutoplayStopIcon' : {
        "description": "Benutzerdefiniertes JSX um eine Slideshow zu beenden.",
        "type": "String | JSX",
        "default": "🛑"  
    },
    'fss.fsDisplayDots' : {
        "description": "Erlauben von dem Rendern der Navigierungspunkte innerhalb des Paginators.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsAutoplayStopOnLast' : {
        "description": "Wenn der Slider am Ende/Anfang (je nach dem Wert des Schlüssels 'fsAutoplayNext') ist, wird die Slideshow beended.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsDisplayDotsIndex' : {
        "description": "Rendern des einzelnen Paginators Index erlauben.",
        "type": "Boolean",
        "default": "false"  
    },
    'fss.fsCloseOnEsc': {
        "description": "Beim Drücken der 'Escape' Taste, soll der Fullscreen Slider weiterhin angezeigt werden oder die Anzeige soll unterbrochen werden.",
        "type": "Boolean",
        "default": "true"
    },
    'fss.fsActive': {
        "description": "Beim anklicken eines Bildes wird ein Fullscreen Slider geöffnet.",
        "type": "Boolean",
        "default": "false"
    },
    'fss.example1': 'Slider Beispiel mit einem Fullscreen support. Der Fullscreen wird aktiviert, sobald man ein Foto anklickt. Der Slider kann mit der ESC Taste oder dem X Button geschlossen werden.',
    'fss.example2': 'Der Slider kann mit der ESC Taste oder dem X Button geschlossen werden.',
    'ribbon.directionX' : {
        "description": "Seite des ribbons auf der X-Achse. Mögliche X-Ausrichtungen: 'left' und 'right'.",
        "type": "String",
        "default": "right"
    },
    'ribbon.directionY' : {
        "description": "Seite des ribbons auf der Y-Achse. Mögliche Y-Ausrichtungen: 'top' und 'bottom'.",
        "type": "String",
        "default": "top"
    },
    'ribbon.background' : {
        "description": "Hintergrundfarbe des Ribbons.",
        "type": "String",
        "default": "<empty string>"
    },
    'ribbon.color' : {
        "description": "Farbe des Ribbons.",
        "type": "String",
        "default": "<empty string>"
    },
    'ribbon.ribbon' : {
        "description": "Text des Ribbons.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'ribbon.content' : {
        "description": "Inhalt der Box.",
        "type": "String | JSX",
        "default": "<empty string>"
    },
    'ribbon.example1' : 'Beispiel mit der Richtung: TOP | RIGHT.',
    'ribbon.example2' : 'Beispiel mit der Richtung: TOP | LEFT.',
    'ribbon.example3' : 'Beispiel mit der Richtung: BOTTOM | RIGHT.',
    'ribbon.example4' : 'Beispiel mit der Richtung: BOTTOM | LEFT.',
    'ribbon.ribbons' : {
        "description": "Array auß Objekten.",
        "type": "{}[]",
        "default": "[]"
    },
    'ribbonM.example1' : 'Beispiel mit der 2 Richtungen: TOP | RIGHT und BOTTOM | LEFT.',
    'ribbonM.example1' : 'Beispiel mit der 2 Richtungen: TOP | LEFT und BOTTOM | RIGHT.',
    'ribbonM.example3' : 'Beispiel mit allen Richtungen.',
    'popupHover.animation' : {
        "description": "Falls der Entwickler sich für einen vordefinierten Platzhalter entscheided: dots, square, hamburger oder hamburger-left wird automatisch eine Animation ausgelöst. Falls man diese ausschalten möchte muss der Wert 'false' sein (animation={false}). Wenn animtion={true} und das Menu angezeigt werden soll, dann bekommt der Root <div> die Klasse 'data-active', wenn das Menu wieder geschlossen wird, bekommt der Root <div> die Klasse 'data-inactive'.",
        "type": "Boolean",
        "default": "true"
    },
    'popupHover.direction' : {
        "description": "Richtung des Popup Fensters relativ zu dem 'Holder' Mögliche Richtungen: 'left', 'right' oder 'center'.",
        "type": "String",
        "default": "left"
    },
    'popupHover.holderData' : {
        "description": "Benutzerdefinierte Daten die er Auslöser sind, damit das Popup Fenster erscheint. Es gibt voreingetragene Platzhalter: dots, square, hamburger und hamburger-left. Diese Namen sind auch reserviert und können nicht geändert werden.",
        "type": "String | JSX",
        "default": "undefined"
    },
    'popupHover.animationTimeout' : {
        "description": "Falls der Entwickler in seinem CSS eine andere transition-duration Zeit angegeben hat als 300, dann benötigt das Modul (um 100% kompatibel zu sein) diesen Wert hier. Dies ist nur relevant wenn man sich für einen vordefinierten Platzhalter entscheided: dots, square, hamburger oder hamburger-left.",
        "type": "Number",
        "default": "300"
    },
    'popupHover.contentData' : {
        "description": "Benutzerdefiniertes JSX oder ein Array aus Objekten.",
        "type": "{}[] | JSX",
        "default": "[]"
    },
    'popupHover.contentData.data' : {
        "description": "Benutzerdefiniertes JSX falls man sich bei dem Schlüssel 'contentData' für ein Array aus Objekten entscheided. Jedes einzelnes Feld 'data' wird ein <li> gepackt.",
        "type": "JSX|String",
        "default": "undefined"
    },
    'popupHover.useMouseEnter' : {
        "description": "Benutze den 'onMouseEnter' Event Handler um die Daten anzeigen zu lassen. Wenn der Wert dieses Schlüssels 'false' ist, dann wird der Event Handler 'onMouseOver' benutzt.",
        "type": "Boolean",
        "default": "true"
    },
    'popupHover.description' : "Wenn ein Benutzer mit der Mauß ein Hover über den Platzhalter durchführt, werden die anzuzeigenden Daten angezeigt. Wenn der Schlüssel animation={true} ist, bekommt der Daten Haltender <div> zusätzlich die Klasse 'menu-active'. Wenn ein Benutzer mit der Mauß wieder weg navigiert (von dem Platzhalter oder den Daten) und der Schlüssel animation={true} ist, bekommt der Daten Haltender <div> zusätzlich die Klasse 'menu-inactive'.",
    'popupHover.example1' : 'Beispiel mit der Ausrichtung der anzuzeigenden Daten auf der linken Seite.',
    'popupHover.example2' : 'Beispiel mit der Ausrichtung der anzuzeigenden Daten auf der rechten Seite.',
    'popupHover.example3' : 'Beispiel mit der Ausrichtung der anzuzeigenden Daten die zentriert werden.',
    'suggestions.callback' : {
        "description": "Callback Funktion die nach einer Auswahl innerhalb der Liste aufgerfuen wird. Diese Funktion liefert 3 Argumente zurück. Argument 1: callbackProps, Argument 2: Wert des Input-Feldes, Argument 3: Aktuell ausgewählte Vorschläge (Objekte).",
        "type": "Funktion",
        "default": "undefined"
    },
    'suggestions.callbackProps': {
        "description": "Erstes Argument der 'callback' Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'suggestions.data': {
        "description": "Array aus Objekten.",
        "type": "{}[]",
        "default": "[]"
    },
    'suggestions.data.text': {
        "description": "Der anzuzeigende Text.",
        "type": "String",
        "default": "undefined"
    },
    'suggestions.data.key': {
        "description": "Der string indem eine Suche durchgeführt wird.",
        "type": "String",
        "default": "undefined"
    },
    'suggestions.multiple': {
        "description": "Erlaube eine Multi Select Auswahl.",
        "type": "Boolean",
        "default": "true"
    },
    'suggestions.sortSelected': {
        "description": "Sortiere die Benutzerauswahl. Mögliche sortierungs Richtungen: 'asc', 'desc'.",
        "type": "String",
        "default": "undefined"
    },
    'suggestions.sortSuggestions': {
        "description": "Sortiere die Benutzervorschläge. Mögliche sortierungs Richtungen: 'asc', 'desc'.",
        "type": "String",
        "default": "undefined"
    },
    'suggestions.inputPlaceholder': {
        "description": "Platzhalter des Input Feldes.",
        "type": "String",
        "default": "<empty string>"
    },
    'suggestions.searchSensitive': {
        "description": "Sensitive Suche.",
        "type": "Boolean",
        "default": "true"
    },
    'suggestions.removeChar': {
        "description": "Das JSX von dem 'löschen' Button.",
        "type": "JSX | String",
        "default": "x"
    },
    'suggestions.removeCharLeft': {
        "description": "Das JSX von dem 'löschen' Button befindet sich auf der linken Seite.",
        "type": "Boolean",
        "default": "false"
    },
    'suggestions.singleLiHeight': {
        "description": "Die Höhe eines einzelnen LI Elementes um ein 'arrow-down' und 'arrow-up' exact durchführen zu können.",
        "type": "Number",
        "default": "40"
    },
    'suggestions.singleLiHeight': {
        "description": "Die Höhe eines einzelnen LI Elementes um ein 'arrow-down' und 'arrow-up' exact durchführen zu können.",
        "type": "Number",
        "default": "40"
    },
    'suggestions.dataOnEmpty': {
        "description": "Daten die bei einer null-Treffersuche angezeigt werden.",
        "type": "JSX | String",
        "default": "<empty string>"
    },
    'suggestions.allowTyping': {
        "description": "Erlaube dem Benutzer den Wert des Input Feldes zu modifizieren.",
        "type": "Boolean",
        "default": "true"
    },
    'suggestions.inputValue': {
        "description": "Der Wert des Input Feldes. Der Wert des Input Feldes wird immer ge-updated wenn der vorherige Wert anders ist als der neue Wert.",
        "type": "String",
        "default": "<empty string>"
    },
    'suggestions.inputType': {
        "description": "Typ des Input Feldes.",
        "type": "String",
        "default": "text"
    },
    'suggestions.inputEmpty': {
        "description": "Nach einer Benutzerauswahl wird der Wert des Input Feldes wieder zurück gesetzt.",
        "type": "Boolean",
        "default": "false"
    },
    'suggestions.suggestionsEmpty': {
        "description": "Nach einer Benutzerauswahl werden die Vorschläge nicht mehr angezeigt.",
        "type": "Boolean",
        "default": "false"
    },
    'suggestions.example1': 'Beispiel mit multi select Option. Öffne deine Browser-Konsole denn alle ausgewählten Elemente/Änderungen werden mit console.info geloggt - das ist emien callback Funktion.',
    'suggestions.example2': 'Beispiel mit allowTyping={false} um dem Benutzer es NICHT zu erlauben, den Wert des Input Feldes zu ändern.',
    'suggestions.example3': 'Beispiel mit dataOnEmpty und sortSuggestions="asc".',
    'suggestions.example4': 'Beispiel mit multiple={false} um mehrfach Auswahl zu verhindern.',
    'pills.data' : {
        "description": "Array aus Objekten.",
        "type": "{}[]",
        "default": "[]"
    },
    'pills.data.text': {
        "description": "Der anzuzeigende Text.",
        "type": "JSX | String",
        "default": "undefined"
    },
    'pills.data.cls': {
        "description": "Mögliche Klassen für die einzelne Pille.",
        "type": "String",
        "default": "<empty string>"
    },
    'pills.data.selected': {
        "description": "Markierung einer Pille als ausgewählt.",
        "type": "Boolean",
        "default": "false"
    },
    'pills.data.callback' : {
        "description": "Callback Funktion die nach einer Auswahl aufgerfuen wird. Diese Funktion liefert 2 Argumente zurück. Argument 1: callbackProps, Argument 2: Die derzeit ausgewählten Elemente (nur wenn der Schlüssel 'readonly' aus ist).",
        "type": "Funktion",
        "default": "undefined"
    },
    'pills.data.callbackProps': {
        "description": "Erstes Argument der 'callback' Funktion.",
        "type": "Any",
        "default": "undefined"
    },
    'pills.multiple': {
        "description": "Erlaube eine Multi Select Auswahl.",
        "type": "Boolean",
        "default": "true"
    },
    'pills.readonly': {
        "description": "Erlaube nur das Lesen von den Elementen. Die Callback Funktion wird weiterhin ausgeführt. Die Selection/Auswahl einer Pille wird unterbrochen.",
        "type": "Boolean",
        "default": "false"
    },
    'pills.example1' : 'Beispiel mit einer Mehrfachauswahl. Um die ausgewählten Element sehen zu können, öffne deine Entwickler Konsole.',
    'pills.example2' : 'Beispiel mit einer unterbundenen Mehrfachauswahl. Um diese Auswahl zu sehen, öffne deine Entwickler Konsole.',
    'pills.example3' : 'Beispiel mit dem readonly Modus.',
    'pills.example4' : 'Beispiel mit vorausgewählten Elementen.',
};

export default DE;

const PL = {
    is: 'jest',
    iconTokenFrom: 'Ikonka wzięta z',
    openSourceText: 'Darmowy projekt Open Source',
    changeLanguageTitle: 'Zmień język',
    changeTintTitle: 'Zmień wygląd strony',
    lightTheme: 'Jasny',
    darkTheme: 'Ciemny (w przygotowaniu)',
    searchForModule: 'Szukanie modułu',
    clickToNavToTheModule: 'Nawigacja do tego modułu',
    fast: 'Szybki',
    light: 'Lekki',
    interactive: 'Interaktywny',
    exampleOfUsage: 'Przykład użycia',
    copyToClipboard: 'Kopiuj do schowka',
    installation: 'Instalacja',
    documentation: 'Dokumentacja',
    modules: 'Moduły',
    getStarted: 'Rozpocznij swoją przygodę',
    installation: 'Instalacja',
    feedback: 'Feedback',
    usefullLinks: 'Użyteczne linki',
    rights: 'Prawa',
    rigthsText: 'Wszystkie prawa zastrzeżone',
    author: 'Autor',
    exampleTitle: 'Przykład',
    reactCodeTitle: 'Kod react',
    cssCodeTitle: 'Kod css',
    jsCodeTitle: 'Kod javascript',
    loading: 'Ładowanie...',
    keyUsageTitle: 'Wyjaśnienia Kluczy',
    "table.title.key" : 'Klucz',
    "table.title.description" : 'description',
    "table.title.type" : 'Typ',
    "table.title.default" : 'Domyślnie',
    /**
     * Module keys
     */
    "id": {
        "description": 'Ustaw id dla głównego elementu tego modułu.',
        "type": 'Ciąg',
        "default": '<pusty ciąg>'
    },
    "class": {
        "description": 'Zastąp główną klasę własną. Jeśli jest używany, standardowe style, które przynosi moduł, nie mają już zastosowania. ',
        "type": 'Ciąg',
        "default": ''
    },
    "addClass": {
        "description": 'Ustaw dodatkową klasę dla głównego elementu tego modułu.',
        "type": 'Ciąg',
        "default": '<pusty ciąg>'
    },
    "inputanimation.callback": {
        "description": "Funkcje zdefiniowane przez użytkownika są wywoływane za każdym razem, gdy dane wejściowe ulegną zmianie. Ta funkcja zwraca 1 argument - bieżącą wartość pola wejściowego.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "accordion.animation": {
        "description": "Animacja podczas otwierania i zamykania akordeonu. Animacje, które można wykorzystać: 'wysokość', 'skala', 'krycie'.",
        "type": "String",
        "default": "undefined"
    },
    "accordion.data": {
        "description": "główne dane.",
        "type": "tablica",
        "default": "[]"
    },
    'accordion.data.href': {
        "description": "Tag <a> lub <Link> wokół wpisu tekstowego, aby nawigować po użytkowniku w aplikacji.",
        "type": "String",
        "default": "undefined"
    },
    'accordion.data.icon': {
        "description": "Niestandardowe dane JSX umieszczone po lewej stronie wpisu tekstowego.",
        "type": "JSX | String",
        "default": "undefined"
    },
    'accordion.data.text': {
        "description": "Tekst do wyświetlenia przed rozwinięciem elementu potomnego.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "accordion.data.dataToggle": {
        "description": "Zawartość elementu do wyświetlenia po rozwinięciu elementu nadrzędnego.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "accordion.data.toggled": {
        "description": "Czy element jest przełączany czy nie.",
        "type": "Boolean",
        "default": "False"
    },
    "props": {
        "description": "Właściwości HTML elementu HTML.",
        "type": "Object",
        "default": "{}"
    },
    "itemsPerLine": {
        "description": "Ile pozycji powinno wyświetlić się w rzędzie.",
        "type": "Number",
        "default": "3"
    },
    "mediaBreak": {
        "description": "Jeśli podano tę wartość, moduł staje się interaktywny. Domyślnie element nadrzędny jest renderowany z klasą: 'flex-row'. Po osiągnięciu punktu przerwania multimediów element nadrzędny jest renderowany jako nowy z class: flex-column. ",
        "type": "Number",
        "default": "undefined"
    },
    "data": {
        "description": "Główne dane - Tablica Obiektów.",
        "type": "tablica",
        "default": "[]"
    },
    "cards.data": {
        "description": "Główne dane - Tablica Obiektów.",
        "type": "tablica",
        "default": "[]"
    },
    "cards.data.title": {
        "description": "Dane nagłówka karty.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "cards.data.content": {
        "description": "Dane zawartości karty.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "cards.data.footer": {
        "description": "Dane stopki karty.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "defaultItems": {
        "description": "Ile elementów powinno być wyświetlanych podczas pierwszego ładowania.",
        "type": "Number",
        "default": "3"
    },
    "loadonscroll.data": {
        "description": "Niestandardowe dane do renderowania po raz pierwszy.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "minify": {
        "description": "Gdy użytkownik przewinie w dół, dane są ponownie ładowane. Ponowne ładowanie danych można spowolnić, dodając tutaj wartość PIXEL.",
        "type": "Number",
        "default": "0"
    },
    "loadMoreCallback": {
        "description": "Jeśli element główny został przewinięty do końca w dół, dane można załadować ponownie. Jeśli wywołanie zwrotne zwraca 'break', zdarzenie przewijania jest usuwane z elementu głównego.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "loadMoreLoadingIcon": {
        "description": "Podczas wczytywania dodatkowych elementów można renderować samodzielnie zdefiniowany element JSX.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "customsuggestion.callback": {
        "description": "Po zmianie w polu wejściowym wywoływana jest funkcja z 1 parametrem: Wartość pola wejściowego. Callback musi zwrócić listę i obiekty. Struktura jest descriptionana w kluczu 'sugestie'.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "customsuggestion.suggestions": {
        "description": "lista obiektów",
        "type": "tablica",
        "default": "undefined"
    },
    "customsuggestion.suggestions.href": {
        "description": "Niestandardowa sugestia jest otoczona tagiem A, dzięki czemu użytkownik może bezpośrednio skorzystać z sugestii.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.jsx": {
        "description": "Niestandardowy HTML, który widzi użytkownik końcowy.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.props": {
        "description": "Właściwości HTML elementu HTML.",
        "type": "Object",
        "default": "{}"
    },
    "customsuggestion.suggestions.onClickValue": {
        "description": "Wartość do wpisania w polu wejściowym, gdy ma miejsce zdarzenie kliknięcia.",
        "type": "String",
        "default": "undefined"
    },
    "clipboard": {
        "description": "Dane, które powinny być zapisane w tablicy szyfrowej. Jeśli ten typ danych nie jest ciągiem znaków, jest zapisywany w buforze z JSON.strigify.",
        "type": "String | Array | Object | Number",
        "default": "undefined"
    },
    "clipboard.data": {
        "description": "Niestandardowy JSX.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "clipboard.animation": {
        "description": "Animacja uruchamiająca zdarzenie kliknięcia na niestandardowych 'danych'. Animacje, których można użyć: 'skala', 'skok'.",
        "type": "String",
        "default": "undefined"
    },
    "plainValue": {
        "description": "Wartość pola wejściowego.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "inputuggestionarray.callbackSelection": {
        "description": "Zdefiniowana przez użytkownika funkcja, dla której wybrano element. Ta funkcja dostarcza 1 argument. Argument 1: Lista wybranych elementów (kliknięty element).",
        "type": "Funkcja",
        "default": "undefined"
    },
    "inputuggestionobject.callbackSelection": {
        "description": "Zdefiniowana przez użytkownika funkcja, dla której wybrano element. Ta funkcja dostarcza 1 argument. Argument 1: Lista wybranych elementów (kliknięty element).",
        "type": "Funkcja",
        "default": "undefined"
    },
    "placeholder": {
        "description": "symbol zastępczy.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "inputType": {
        "description": "Typ pola Inptu.",
        "type": "String",
        "default": "tekst"
    },
    "callbackRerender": {
        "description": "Jeśli true, moduł nasłuchuje tylko przesłanego stanu i zmian stanu. Jeśli fałsz, moduł oczekuje dalszego przetwarzania danych z wywołania zwrotnego.",
        "type": "Boolean",
        "default": "False"
    },
    "allowOnlyAZ": {
        "description": "Jeśli true, następujące wyrażenie regularne jest stosowane do wartości pola wejściowego: (/ [^ a-zA-Z] / gmi).",
        "type": "Boolean",
        "default": "False"
    },
    "display": {
        "description": "Czy element ma być wyświetlany czy nie?",
        "type": "Boolean",
        "default": "False"
    },
    "displayLineNumber": {
        "description": "Zezwól na renderowanie po lewej stronie każdego numeru wiersza.",
        "type": "Boolean",
        "default": "False"
    },
    "iconClose": {
        "description": "Zdefiniowany przez użytkownika HTML z akcją 'zamknij' moduł.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "inputActive": {
        "description": "Czy pole wejściowe powinno być wyświetlane czy nie?",
        "type": "Boolean",
        "default": "False"
    },
    "noDataText": {
        "description": "Jeśli nie znaleziono żadnych elementów, ten tekst zostanie wyświetlony.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "callbackClose": {
        "description": "Funkcja zdefiniowana przez użytkownika, która jest wywoływana bez argumentów po zamknięciu pozycji.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "listarray.callback": {
        "description": "Zdefiniowane przez użytkownika funkcje zwrotne są uruchamiane, jeśli użytkownik kliknie element listy. Funkcja zwraca 2 argumenty. Argument 1: zdarzenie kliknięcia, Argument 2: kliknięty wpis.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "listarray.data": {
        "description": "Tablica ciągów (wartości) do wyświetlenia.",
        "type": "Array",
        "default": "[]"
    },
    "listobject.data": {
        "description": "Tablica obiektów.",
        "type": "Array",
        "default": "[]"
    },
    "listobject.data.text": {
        "description": "Główny ciąg do wyświetlenia.",
        "type": "String",
        "default": "undefined"
    },
    "closeOnCallback": {
        "description": "W przypadku wybrania elementu z listy należy również zamknąć moduł lub zachować wyświetlanie modułu.",
        "type": "Boolean",
        "default": "False"
    },
    "closeOnDimmedClick": {
        "description": "Jeśli klikniesz na 'ciemny' HTML, który znajduje się poza obszarem zawartości, moduł nie będzie już wyświetlany.",
        "type": "Boolean",
        "default": "False"
    },
    "closeOnEsc": {
        "description": "Po naciśnięciu klawisza 'Escape' moduł powinien nadal być wyświetlany lub wyświetlanie powinno zostać przerwane.",
        "type": "Boolean",
        "default": "False"
    },
    "inputEmptyOnCallback": {
        "description": "Po wybraniu elementu z listy pole wejściowe powinno zostać nauczone lub wartość pola wejściowego powinna pozostać niezmieniona.",
        "type": "Boolean",
        "default": "False"
    },
    "closeOnClick": {
        "description": "Jeśli klikniesz przyciemniony obszar HTML, moduł nie będzie już wyświetlany.",
        "type": "Boolean",
        "default": "True"
    },
    "fullscreenOverlay.animation": {
        "description": "Animacja podczas renderowania modułu. Animacje, które można wykorzystać: 'skala', 'lewa', 'góra', 'prawa', 'dół'.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "popupbox.data": {
        "description": "Niestandardowe dane JSX w przełączanym polu.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "popupbox.animation": {
        "description": "Animacja podczas renderowania modułu. Animacje, które można wykorzystać: 'lewy górny', 'prawy górny', 'lewy dolny', 'prawy dolny'.",
        "type": "String",
        "default": "lewy górny"
    },
    "fullscreenoverlay.dimmed": {
        "description": "Czy jasno przyciemniony obszar ma być wyświetlany czy nie.",
        "type": "Boolean",
        "default": "False"
    },
    "fullscreenoverlay.data": {
        "description": "Niestandardowe dane JSX do wyświetlenia w nakładce.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "disableScroll": {
        "description": "Podczas wyświetlania modułu element HTML (tag) powinien być przewijalny lub nie.",
        "type": "Boolean",
        "default": "False"
    },
    "messageKey": {
        "description": "Unikalny ciąg.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "codeMapping": {
        "description": "Obiekt",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.title": {
        "description": "Tytuł wiadomości",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.displayErrorCode": {
        "description": "Czy kod transmitowanej wiadomości również powinien być wyświetlany, czy nie?",
        "type": "Boolean",
        "default": "undefined"
    },
    "codeMapping.text": {
        "description": "Obiekt - Tekst do wyświetlenia jako wiadomość.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.text.prefix": {
        "description": "Prefiks tekst przed faktyczną mediacją.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.text.suffix": {
        "description": "Sufiks - tekst po faktycznym zapośredniczeniu.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.text.props": {
        "description": "Właściwości HTML elementu HTML.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.close": {
        "description": "Tekst obiektu do zamknięcia okna komunikatu.",
        "type": "Object",
        "default": "undefined"
    },
    "codeMapping.close.text": {
        "description": "Tekst do zamknięcia, który ma zostać wyświetlony. Do tego tekstu dołączono 'zdarzenie click close'.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.close.props": {
        "description": "Właściwości HTML elementu HTML.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.link": {
        "description": "Obiekt - Link zewnętrzny.",
        "type": "Object",
        "default": "{}"
    },
    "codeMapping.link.text": {
        "description": "Tekst do wyświetlenia.",
        "type": "String",
        "default": "undefined"
    },
    "codeMapping.link.useTagLink": {
        "description": "Czy powinien być używany tag <Link>, jeśli moduł porusza się po trasie, czy tag <a> domyślnie.",
        "type": "Boolean",
        "default": "False"
    },
    "codeMapping.link.href": {
        "description": "Atrybut 'to' w tagu <Link> lub 'href' w tagu <a>.",
        "type": "Object",
        "default": "{}"
    },
    "timer": {
        "description": "Interwał wyświetlania komunikatów o błędach.",
        "type": "Number",
        "default": "2500"
    },
    "iconsType": {
        "description": "Standardowo klikane ikony ustawiane przy pierwszym renderowaniu modułu.",
        "type": "String",
        "default": "buźki"
    },
    "displayTabs": {
        "description": "Czy nagłówki wszystkich zestawów ikon do wyświetlenia powinny być pokazywane lub ukrywane.",
        "type": "Boolean",
        "default": "True"
    },
    "renderItems": {
        "description": "Które elementy powinny być wyświetlane domyślnie.",
        "type": "tablica",
        "default": "'Smileys',' Peoples', 'Animals',' Plants', 'Nature', 'Food', 'Activity', 'Travel', 'Objects',' Symbols', 'Currency', ' Arrows', 'Html' "
    },
    "translations": {
        "description": "Tłumaczenia odpowiednich nagłówków zestawów ikon.",
        "type": "Object",
        "default": "undefined"
    },
    "custom": {
        "description": "Zdefiniowane przez użytkownika zestawy ikon jako tablica obiektów.",
        "type": "tablica",
        "default": "undefined"
    },
    "custom.title": {
        "description": "Tytuł ikony ustawiony jako unikalny klucz.",
        "type": "String",
        "default": "undefined"
    },
    "custom.data": {
        "description": "Tablica ciągów z niestandardowymi ikonami.",
        "type": "tablica",
        "default": "undefined"
    },
    "defaultClassOrigin": {
        "description": "",
        "type": "String",
        "default": ""
    },
    "animatePlaceholder": {
        "description": "Placeholder (który jest wtedy również animowany).",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "onEnter": {
        "description": "Funkcja zdefiniowana przez użytkownika, gdy użytkownik naciśnie klawisz Enter w polu wejściowym. Ta funkcja udostępnia 1 argument: bieżącą wartość pola wejściowego.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "getValueFromCallback": {
        "description": "Jeśli fałsz, moduł nasłuchuje tylko przesłanego stanu i zmian stanu. Jeśli true, moduł oczekuje, że dane z funkcji zwrotnej będą dalej przetwarzane.",
        "type": "Boolean",
        "default": "False"
    },
    "allowedFileSize": {
        "description": "Maksymalny rozmiar pliku.",
        "type": "String",
        "default": "undefined"
    },
    "allowedFileSizeDescriptor": {
        "description": "Wektor rozmiarów: B, KB, MB, GB, TB lub PT.",
        "type": "String",
        "default": "undefined"
    },
    "allowedFiles": {
        "description": "Dozwolone typy plików.",
        "type": "String",
        "default": "undefined"
    },
    "label": {
        "description": "JSX do wyświetlenia w tagu <label>",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "readFileCallback": {
        "description": "Benutzerdefinierte Funktion um eine Datei zu verarbeiten. Es werden 2 Argumente übergeben: Argument 1: Die Datei, Argument 2: Der Dateityp.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "errorCallback": {
        "description": "Zdefiniowane przez użytkownika wywołanie zwrotne podczas błędu obsługi pliku. Przekazuje 2 argumenty. Argument 1: Typ błędu (unsupported_filetype, maximum_filesize_reached, unrecognized_filetype, empty_filecontent, empty_filename), Argumnt 2: 'errorCallbackCustomData'",
        "type": "Funkcja",
        "default": "undefined"
    },
    "errorCallbackCustomData": {
        "description": "Zdefiniowana przez użytkownika wartość 2 argumentu funkcji: 'errorCallback'.",
        "type": "String | Array | Object | Number",
        "default": "undefined"
    },
    "multiple": {
        "description": "Zezwalaj na wiele plików naraz.",
        "type": "Boolean",
        "default": "False"
    },
    "isDraggingData": {
        "description": "Jeśli użytkownik jest obecnie w stanie„ przeciągania ”, może zostać wyświetlony zdefiniowany przez użytkownika JSX.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "uploadOnClick": {
        "description": "Zezwól na przetwarzanie plików, gdy użytkownik kliknie obszar 'przeciągnij i upuść'.",
        "type": "Boolean",
        "default": "False"
    },
    "selected": {
        "description": "Tablica wybranych pozycji z listy.",
        "type": "tablica",
        "default": "[]"
    },
    "suggestionsToFilter": {
        "description": "Tablica elementów (stringi), które następnie pojawią się do wyboru przez użytkownika.",
        "type": "tablica",
        "default": "[]"
    },
    "emptySuggestionAfterSelection": {
        "description": "Naucz sugestii po tym, jak użytkownik kliknie element.",
        "type": "Boolen",
        "default": "True"
    },
    "sortSelected": {
        "description": "Czy wybrane elementy powinny być sortowane alfabetycznie. Dozwolone opcje sortowania: 'rosnąco', 'desc'.",
        "type": "String",
        "default": "undefined"
    },
    "sortSuggestions": {
        "description": "Czy elementy do wyświetlenia są sortowane alfabetycznie. Dozwolone opcje sortowania: 'rosnąco', 'desc'.",
        "type": "String",
        "default": "undefined"
    },
    "text": {
        "description": "Tekst do wyświetlenia.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "scrollReference": {
        "description": "Jeśli true, główny element modułu jest używany jako odniesienie, w przeciwnym razie dokument HTML Elment.",
        "type": "Boolean",
        "default": "True"
    },
    "reactRouter": {
        "description": "Jeśli true - (wtedy moduł porusza się w routerze Rect) jest renderowany tag <Link>, jeśli fałsz jest renderowany tag <a>.",
        "type": "Boolean",
        "default": "False"
    },
    "icon": {
        "description": "Niestandardowy JSX do zamknięcia modułu.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "iconCallback": {
        "description": "Niestandardowe wywołanie zwrotne po kliknięciu 'ikony'.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "animationTime": {
        "description": "Czas animacji w ms.",
        "type": "Number",
        "default": "300"
    },
    "image": {
        "description": "JSX obrazu / ikony.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "moduleMenu": {
        "description": "Wbudowany moduł 'MenuClickHorizontal'.",
        "type": "JSX",
        "default": "undefined"
    },
    "textLong": {
        "description": "Długi tekst jako nagłówek obok zdjęcia.",
        "type": "String",
        "default": "undefined"
    },
    "textShort": {
        "description": "Krótki tekst pod nagłówkiem, a także obok zdjęcia.",
        "type": "String",
        "default": "undefined"
    },
    "href": {
        "description": "Jeśli ustawiono href, <a> jest rozciągany wokół zdjęcia i tekstu.",
        "type": "String",
        "default": "undefined"
    },
    "hrefProps": {
        "description": "Właściwości HTML tagu <a>.",
        "type": "Object",
        "default": "{}"
    },
    "title": {
        "description": "Tablica ciągów - nagłówek tabeli.",
        "type": "Array",
        "default": "undefined"
    },
    "writer.text": {
        "description": "Tekst do napisania.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "speed": {
        "description": "Szybkość zapisywania tekstu w ms.",
        "type": "Number",
        "default": "300"
    },
    "pipeDisplay": {
        "description": "Wyświetl potok podczas pisania.",
        "type": "Boolen",
        "default": "True"
    },
    "pipeChar": {
        "description": "Charachter of the pipe",
        "type": "String | JSX",
        "default": "|"
    },
    "pipeSite": {
        "description": "Wyświetl potokę w witrynie: 'lewa', 'prawa'",
        "type": "String",
        "default": "right"
    },
    "pipePersist": {
        "description": "Utrwalaj kreskę po napisaniu tekstu.",
        "type": "Boolean",
        "default": "False"
    },
    "replaces": {
        "description": "Obiekt - Zastąp tekst po, tekst został zapisany.",
        "type": "Object",
        "default": "undefined"
    },
    "replaces.from": {
        "description": "Rozpocznij zamianę na tym znaku.",
        "type": "Number",
        "default": "undefined"
    },
    "replaces.to": {
        "description": "Zakończ zamianę na tym znaku.",
        "type": "Number",
        "default": "undefined"
    },
    "replaces.replace": {
        "description": "Tekst do napisania jako zamiennik.",
        "type": "String",
        "default": "undefined"
    },
    "writer.timeout": {
        "description": "Zacznij pisać tekst po tym czasie w ms.",
        "type": "Number",
        "default": "0"
    },
    "table.data": {
        "description": "Tablica obiektów.",
        "type": "tablica",
        "default": "undefined"
    },
    "table.keysToRead": {
        "description": "Tablica ciągów - które klucze należy odczytać z obiektu.",
        "type": "tablica",
        "default": "undefined"
    },
    "bread.hashRouter": {
        "description": "Czy obecna aplikacja React znajduje się w ReactRouter, czy nie. Jeśli true, nazwa hosta (pierwsza ścieżka nawigacyjna) staje się sufiksem '/ # /'.",
        "type": "Boolean",
        "default": "False"
    },
    "bread.domainName": {
        "description": "Zastąp nazwę hosta (pierwszy plik nawigacyjny) dostosowanym tekstem",
        "type": "String",
        "default": "undefined"
    },
    "bread.delimiter": {
        "description": "Separator między bułką tartą.",
        "type": "String | JSX",
        "default": ">"
    },
    "bread.overwriteText": {
        "description": "Musi być używany z kluczem: 'moduleMenu'. Jeśli true, to zamiast ścieżki do bułki tartej wyświetlany jest pierwszy klucz podrzędny menu: 'tekst'. Jeśli fałsz, to pierwsze menu podrzędne: 'tekst' ignorowane. ",
        "type": "Boolean",
        "default": "false"
    },
    "bread.moduleMenu": {
        "description": "Dołączono moduł: 'MenuClickHorizontal' dostępny tylko dla ostatniego menu nawigacyjnego. Tylko jedno dziecko dozwolone jako element nadrzędny - zagnieżdżanie potomne dozwolone bez ograniczeń.",
        "type": "<MenuClickHorizontal>",
        "default": "undefined"
    },
    "closeOnClickOutside": {
        "description": "Jeśli true, a użytkownik nie wykona kliknięcia w Elemencie, wszystkie rozwinięte elementy zostaną zamknięte.",
        "type": "Boolean",
        "default": "False"
    },
    /**
     * Descriptions
     */
    "accordion.description": "Moduł Accordion nie ma ograniczeń w zagnieżdżaniu dzieci.",
    "accordion.description2": "Przykład z obsługą kliknięcia (poza modułem) dostarczonym przez klucz: 'closeOnClickOutside' ustawiony na true (wszystkie elementy potomne są zamykane rekurencyjnie).",
    "cards.scroll.description": "Moduł Karty załaduje więcej elementów, jeśli osiągnięty zostanie dół nadrzędnego elementu div.",
    "cards.scrollCallback.description": "Moduł Karty załaduje więcej elementów, jeśli osiągnięty zostanie dół nadrzędnego elementu div. Załaduj więcej kart opiera się na niestandardowej funkcji wywołania zwrotnego. Jeśli wartość to „break”, to nasłuchiwanie przewijania jest usuwane.",
    "icons.description": "Moduł ikon ze wszystkimi ustawionymi ikonami, BEZ tłumaczeń i domyślnym ustawionym zestawem ikon: buźki. Po kliknięciu spójrz na konsolę w poszukiwaniu ikony.",
    "icons.description2": "Moduł ikon z wybranym zestawem ikon: Buźki, Aktywność, Podróż, Ludzie, Obiekty, BRAK tłumaczeń i domyślny zestaw ikon: Aktywność. Po kliknięciu zajrzyj do konsoli w poszukiwaniu ikony.",
    "icons.description3": "Moduł ikon z wybranym zestawem ikon: buźki, aktywność, podróż, ludy, obiekty i 2 przetłumaczone tytuły ikon. Po kliknięciu zajrzyj do konsoli w poszukiwaniu ikony.",
    /**
     * 
     */
    globalStyle: {
        "description": "Załaduj globalny plik stylu (react-revolution.css). Jeśli zostały już załadowane, nie zostaną załadowane dwukrotnie.",
        "type": "Boolean",
        "default": "False"
    },
    moduleStyle: {
        "description": "Zezwól na ładowanie pliku stylu tego modułu. Jeśli został już załadowany, nie zostanie załadowany dwukrotnie.",
        "type": "Boolean",
        "default": "False"
    },
    styleLoading: "Style używane w tym module",
    "runtime.generator.description": 'Jeśli wystąpił błąd (runtime generator are not defined) podczas korzystania z funkcji wywołania zwrotnego w tym module (callback), zainstaluj: npm install --save @ babel / runtime && npm install --save-dev @ babel / plugin -transform-runtime; Następnie w pliku .babelrc dodaj tę linię: {"presets": ["@ babel / preset-env", "@ babel / preset-aware"], "plugins": [["@ babel / transform-runtime"] ]}. ',
};

export default PL;

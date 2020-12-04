import getAllAvailableModulesNames from '../Functions/getAllAvailableModulesNames';

const len = getAllAvailableModulesNames().length-1;

const PL = {
    authorLink: 'Autor',
    lastReleaseNotes: 'Ostatnie wydanie',
    fastActions: 'Przydatne linki',
    releaseNotesKey: 'Dotyczy komponentu',
    releaseNotesDescription: 'Opis',
    releaseNotes: 'Informacje o wydaniu',
    back_404: 'Strona główna',
    functions: 'Funkcje',
    components: 'Komponenty',
    description_uuid: 'Funkcja uuid zawsze zwraca unikalny ciąg oparty na liczbie losowej i aktualnej sygnaturze czasowej.',
    description_disableHtmlScroll: 'Tag HTML otrzymuje atrybuty: class = "overflow-hidden" i style = "overflow: hidden;" aby użytkownik nie mógł przewijać strony internetowej.',
    description_enableHtmlScroll: 'Klasa „overflow-hidden” i styl: „overflow: hidden;” są usuwane z tagu HTML. Użytkownik ponownie ma możliwość przewijania strony.',
    description_scrollTopListener: "Przewiń do góry bieżącej strony w każdej zmianie lokalizacji (window.location). Najpierw należy wywołać funkcję, aby zainicjować odbiornik zmiany lokalizacji. Ta funkcja przyjmuje 3 dodatkowe argumenty. Argument 1: czas (w milisekundach) przewijania na górę strony, argument 2: zachowanie przewijania - 'auto','smooth','inherit','initial','unset', argument 3: usuń odbiornik (wartość logiczna). Aby usunąć detektor, należy przekazać argumentowi 3 wartość true (domyślnie wartość jest ustawiona na false).",
    description_urlExtract: 'Wyodrębnia adresy URL z poszczególnych ścieżek window.location, klucza i jego wartości. Funkcja otrzymuje 1 opcjonalny argument: isHashRouter (boolean) - domyślnie przesyłana wartość jest niezdefiniowana. Ta funkcja wyodrębnia ścieżki i wartości kluczy dla window.location: „href”, „hash” i „path”.',
    is: 'jest',
    iconTokenFrom: 'Ikonka wzięta z',
    openSourceText: 'Darmowy projekt Open Source',
    changeLanguageTitle: 'Zmień język',
    changeTintTitle: 'Wygląd strony',
    lightTheme: 'Jasny',
    darkTheme: 'Ciemny',
    codeTheme: 'Kod',
    searchForModule: 'Szukanie modułu',
    clickToNavToTheModule: 'Nawigacja do tego modułu',
    fast: 'Szybki',
    light: 'Lekki',
    interactive: 'Interaktywny',
    "fast.description" : "Minimalny czas generowania i optymalne wykorzystanie zasobów przeglądarki.",
    "light.description" : `Przy obecnej liczbie ${len} modułów ta biblioteka ma całkowity rozmiar mniejszy niż 190 KB.`,
    "interactive.description" : "Każdy moduł można dowolnie zaprojektować i zawiera funkcje wywołania zwrotnego.",
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
    rigthsText: 'Wszelkie prawa zastrzeżone',
    author: 'Autor',
    exampleTitle: 'Przykład użycia',
    reactCodeTitle: 'Kod react',
    reactFunctionTitle: 'Kod funkcji',
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
        "type": 'String',
        "default": '<pusty ciąg>'
    },
    "class": {
        "description": 'Zastąp główną klasę własną. Jeśli jest używany, standardowe style, które przynosi moduł, nie mają już zastosowania. ',
        "type": 'String',
        "default": '<pusty ciąg>'
    },
    "addClass": {
        "description": 'Ustaw dodatkową klasę dla głównego elementu tego modułu.',
        "type": 'String',
        "default": '<pusty ciąg>'
    },
    "inputanimation.callback": {
        "description": "Funkcje zdefiniowane przez użytkownika są wywoływane za każdym razem, gdy dane wejściowe ulegną zmianie. Ta funkcja zwraca 1 argument - bieżącą wartość pola wejściowego.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "accordion.animation": {
        "description": "Animacja podczas otwierania i zamykania akordeonu. Animacje, które można wykorzystać: 'height', 'scale', 'opacity'.",
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
        "default": "false"
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
    "loadonscroll.fireScrollEvent": {
        "description": "Liczba, która powoduje, że adresowany element (scrollReference) jest przewijany w dół o określoną liczbę. To zachowanie jest wywoływane w 'componentDidMount' (raz).",
        "type": "Number",
        "default": "0"
    },
    "loadonscroll.fireScrollBack": {
        "description": "Czy element (scroll Reference.scrollTop = 0) powinien zostać przewinięty do góry po wywołaniu funkcji 'fireScrollEvent'.",
        "type": "Boolean",
        "default": "true"
    },
    "loadonscroll-description-1": "Przykład z Promise.resolve() trzy razy.",
    "loadonscroll-description-2": "Przykład z Promise.reject () (zwraca domyślną wartość niezdefiniowaną) użycie klucza 'persistReject = {false}' (nie usuwaj zdarzenia przewijania) i 'onReject' (wyświetl niestandardowy przycisk wywołanie funkcji zwrotnej ponownie). ",
    "loadonscroll-description-3": "Przykład z Promise.reject () (z niestandardowym JSX jako komunikatem o błędzie dla użytkownika) z użyciem klucza„ persistReject = {true} ”(usuń zdarzenie przewijania!) i„ onReject ”( wyświetlić przycisk niestandardowy, aby ponownie wywołać funkcję oddzwaniania). ",
    "loadonscroll-description-4": "Przykład z: dla pierwszego licznika ładowania = Promise.reject (), dla drugiego licznika ładowania Promise.reject () (z niestandardowym JSX jako komunikatem o błędzie dla użytkownika) z użyciem klucza ' persistReject = {true} '(usuń zdarzenie przewijania!) i' onReject '(wyświetl niestandardowy przycisk, aby ponownie wywołać funkcję zwrotną), dla trzeciego licznika Promise.resolve (). ",
    "minify": {
        "description": "Gdy użytkownik przewinie w dół, dane są ponownie ładowane. Ponowne ładowanie danych można spowolnić, dodając tutaj wartość PIXEL.",
        "type": "Number",
        "default": "0"
    },
    "cards.callback": {
        "description": "Jeśli element główny został przewinięty do końca w dół, dane można załadować ponownie. Jeśli wywołanie zwrotne zwraca 'break', zdarzenie przewijania jest usuwane z elementu głównego. Do tej funkcji przekazywane są 2 argumenty. Argument 1: zdarzenie (przewiń, kliknij: dla danych klucza 'onReject'), argument 2: dane niestandardowe dostarczone przez klucz 'callbackProps'.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "cards.callback.persistReject": {
        "description": "Jeśli true, to jeśli obietnica została odrzucona, zdarzenie przewijania jest usuwane.",
        "type": "Boolean",
        "default": "false"
    },
    "cards.callback.onReject": {
        "description": "Dane niestandardowe do wyświetlenia po odrzuceniu obietnicy, a użytkownik powinien być w stanie ponownie załadować więcej danych. Do tych danych dołączone jest zdarzenie kliknięcia.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "cards.loading": {
        "description": "Podczas wczytywania dodatkowych elementów można renderować samodzielnie zdefiniowany element JSX.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "customsuggestion.callback": {
        "description": "Po zmianie w polu wejściowym wywoływana jest funkcja z 1 parametrem: Wartość pola wejściowego. Callback musi zwrócić listę i obiekty. Struktura jest descriptionana w kluczu 'sugestie'.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "customsuggestion.suggestions.text": {
        "description": "Tekst zdefiniowany przez użytkownika, na podstawie którego odbywa się filtrowanie.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.searchSensitive": {
        "description": "Wyszukaj klucz wrażliwy czy nie.",
        "type": "Boolean",
        "default": "true"
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
        "description": "Niestandardowy HTML, który widzi użytkownik końcowy. Jeśli nie jest dostępny, wyświetlana jest wartość klucza 'tekst'.",
        "type": "String",
        "default": "undefined"
    },
    "customsuggestion.suggestions.text": {
        "description": "Tekst zdefiniowany przez użytkownika, na podstawie którego odbywa się filtrowanie.",
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
    "clipboard.callback": {
        "description": "Własna funkcja zwrotna wywoływana po kliknięciu przycisku schowka. Ta funkcja zwraca 2 argumenty. Argument 1: zdarzenie kliknięcia, argument 2: niestandardowe wywołanie zwrotne, argument 3: dane schowka.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "clipboard.callbackProps": {
        "description": "Niestandardowe właściwości wywołania zwrotnego przekazane jako drugi argument do funkcji zwrotnej.",
        "type": "String | Array | Object | Number",
        "default": "undefined"
    },
    "plainValue": {
        "description": "Wartość pola wejściowego.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "inputsuggestionarray.callbackSelection": {
        "description": "Zdefiniowana przez użytkownika funkcja, dla której wybrano element. Ta funkcja dostarcza 1 argument. Argument 1: Lista wybranych elementów (kliknięty element).",
        "type": "Funkcja",
        "default": "undefined"
    },
    "inputsuggestionobject.callbackSelection": {
        "description": "Zdefiniowana przez użytkownika funkcja, dla której wybrano element. Ta funkcja dostarcza 1 argument. Argument 1: Lista wybranych elementów (kliknięty element).",
        "type": "Funkcja",
        "default": "undefined"
    },
    "inputsuggestionobject.loading": {
        "description": "Zdefiniowane przez użytkownika niestandardowe dane JSX, aby pokazać ikonę ładowania podczas wykonywania funkcji 'wywołania zwrotnego'. Przekazana funkcja zwrotna musi być obietnicą. Aby pokazać sugestie, obietnica musi zostać rozwiązana lub odrzucona.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "inputPlaceholder": {
        "description": "Symbol zastępczy.",
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
        "default": "false"
    },
    "allowOnlyAZ": {
        "description": "Jeśli true, następujące wyrażenie regularne jest stosowane do wartości pola wejściowego: (/ [^ a-zA-Z] / gmi).",
        "type": "Boolean",
        "default": "false"
    },
    "display": {
        "description": "Czy element ma być wyświetlany czy nie?",
        "type": "Boolean",
        "default": "false"
    },
    "lineNumber": {
        "description": "Zezwól na renderowanie po lewej stronie każdego numeru wiersza.",
        "type": "Boolean",
        "default": "false"
    },
    "iconClose": {
        "description": "Zdefiniowany przez użytkownika HTML z akcją 'zamknij' moduł.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "inputActive": {
        "description": "Czy pole wejściowe powinno być wyświetlane czy nie?",
        "type": "Boolean",
        "default": "false"
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
        "default": "false"
    },
    "closeOnDimmedClick": {
        "description": "Jeśli klikniesz na 'ciemny' HTML, który znajduje się poza obszarem zawartości, moduł nie będzie już wyświetlany.",
        "type": "Boolean",
        "default": "false"
    },
    "closeOnEsc": {
        "description": "Po naciśnięciu klawisza 'Escape' moduł powinien nadal być wyświetlany lub wyświetlanie powinno zostać przerwane.",
        "type": "Boolean",
        "default": "false"
    },
    "inputEmptyOnCallback": {
        "description": "Po wybraniu elementu z listy pole wejściowe powinno zostać nauczone lub wartość pola wejściowego powinna pozostać niezmieniona.",
        "type": "Boolean",
        "default": "false"
    },
    "closeOnClick": {
        "description": "Jeśli klikniesz przyciemniony obszar HTML, moduł nie będzie już wyświetlany.",
        "type": "Boolean",
        "default": "true"
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
        "default": "false"
    },
    "fullscreenoverlay.data": {
        "description": "Niestandardowe dane JSX do wyświetlenia w nakładce.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "disableScroll": {
        "description": "Podczas wyświetlania modułu element HTML (tag) powinien być przewijalny lub nie.",
        "type": "Boolean",
        "default": "false"
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
        "default": "false"
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
        "default": "true"
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
        "default": "false"
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
        "default": "false"
    },
    "isDraggingData": {
        "description": "Jeśli użytkownik jest obecnie w stanie„ przeciągania ”, może zostać wyświetlony zdefiniowany przez użytkownika JSX.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "uploadOnClick": {
        "description": "Zezwól na przetwarzanie plików, gdy użytkownik kliknie obszar 'przeciągnij i upuść'.",
        "type": "Boolean",
        "default": "false"
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
        "default": "true"
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
        "default": "true"
    },
    "reactRouter": {
        "description": "Jeśli true - (wtedy moduł porusza się w routerze Rect) jest renderowany tag <Link>, jeśli fałsz jest renderowany tag <a>.",
        "type": "Boolean",
        "default": "false"
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
        "description": "Wbudowany moduł 'Menu'.",
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
        "default": "true"
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
        "default": "false"
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
    "table.titleOnMinified": {
        "description": "Renderuj nagłówki tabeli, gdy moduł jest zminimalizowany (wyzwalany przez zdarzenie resize).",
        "type": "Boolean",
        "default": "true"
    },
    "bread.hashRouter": {
        "description": "Czy obecna aplikacja React znajduje się w ReactRouter, czy nie. Jeśli true, nazwa hosta (pierwsza ścieżka nawigacyjna) staje się sufiksem '/ # /'.",
        "type": "Boolean",
        "default": "false"
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
        "description": "Dołączono moduł: 'Menu' dostępny tylko dla ostatniego menu nawigacyjnego. Tylko jedno dziecko dozwolone jako element nadrzędny - zagnieżdżanie potomne dozwolone bez ograniczeń.",
        "type": "<Menu>",
        "default": "undefined"
    },
    "closeOnClickOutside": {
        "description": "Jeśli true, a użytkownik nie wykona kliknięcia w Elemencie, wszystkie rozwinięte elementy zostaną zamknięte.",
        "type": "Boolean",
        "default": "false"
    },
    /**
     * Descriptions
     */
    "accordion.description.1": "Przykład z pojedynczymi zagnieżdżonymi elementami potomnymi.",
    "accordion.description.2": "Przykład z 4 zagnieżdżonymi dziećmi.",
    "accordion.description.3": "Przykład z obsługą kliknięcia (poza modułem) dostarczonym przez klucz: 'closeOnClickOutside' ustawiony na true (wszystkie elementy potomne są zamykane rekurencyjnie).",
    "cards.scroll.description": "Moduł Karty załaduje więcej elementów, jeśli osiągnięty zostanie dół nadrzędnego elementu div.",
    "cards.scrollCallback.description": "Moduł Karty załaduje więcej elementów, jeśli osiągnięty zostanie dół nadrzędnego elementu div. Załaduj więcej kart opiera się na niestandardowej funkcji wywołania zwrotnego. Jeśli wartość to „break”, to nasłuchiwanie przewijania jest usuwane.",
    "cards.scrollCallback.example1" : "Przykład width Promise.resolve (), LoadingBoxTop ze stałą pozycją i 'break' na zdarzeniu 4 scroll.",
    "cards.scrollCallback.example2" : "Przykładowa width Promise.reject () (domyślnie zwraca undefined), niestandardowe ładowanie JSX przekazane przez klucz 'loading' i klucz 'persistReject = {true}' oznacza to, że nasłuchiwanie scrollEvent jest usuwane, a funkcja wywołania zwrotnego nie jest wywoływana ponownie w przypadku przewijania.",
    "cards.scrollCallback.example3" : "Przykład width Promise.reject () width niestandardowy JSX jako komunikat o błędzie, niestandardowe ładowanie JSX przekazane przez klucz 'loading' i klucz 'persistReject = {false}' (wartość domyślna to false) oznacza to, że odbiornik scrollEvent jest NIE usunięto! Użytkownik może przewinąć wstecz i ponownie wywołać funkcję zwrotną.",
    "cards.scrollCallback.example4" : "Przykład width Promise.reject () width niestandardowy JSX jako komunikat o błędzie, niestandardowe ładowanie JSX przekazane przez klucz 'loading' i kluczem 'persistReject = {true}' oznacza to, że nasłuchiwanie scrollEvent zostało usunięte! W tym przykładzie klucz „onReject” zawiera niestandardowy kod JSX - do tego kodu HTML jest dołączone zdarzenie kliknięcia. To zdarzenie kliknięcia wywołuje niestandardową funkcję „oddzwonienia”.",
    "icons.description": "Moduł ikon ze wszystkimi ustawionymi ikonami, BEZ tłumaczeń i defaultm ustawionym zestawem ikon: buźki. Po kliknięciu spójrz na konsolę w poszukiwaniu ikony.",
    "icons.description2": "Moduł ikon z wybranym zestawem ikon: Buźki, Aktywność, Podróż, Ludzie, Obiekty, BRAK tłumaczeń i default zestaw ikon: Aktywność. Po kliknięciu zajrzyj do konsoli w poszukiwaniu ikony.",
    "icons.description3": "Moduł ikon z wybranym zestawem ikon: buźki, aktywność, podróż, ludy, obiekty i 2 przetłumaczone tytuły ikon. Po kliknięciu zajrzyj do konsoli w poszukiwaniu ikony.",
    /**
     * 
     */
    globalStyle: {
        "description": "Załaduj globalny plik stylu (react-revolution.css). Jeśli zostały już załadowane, nie zostaną załadowane dwukrotnie.",
        "type": "Boolean",
        "default": "false"
    },
    moduleStyle: {
        "description": "Zezwól na ładowanie pliku stylu tego modułu. Jeśli został już załadowany, nie zostanie załadowany dwukrotnie.",
        "type": "Boolean",
        "default": "false"
    },
    styleLoading: "Style używane w tym module",
    "runtime.generator.description": 'Jeśli wystąpił błąd (runtime generator are not defined) podczas korzystania z funkcji wywołania zwrotnego w tym module (callback), zainstaluj: npm install --save @ babel / runtime && npm install --save-dev @ babel / plugin -transform-runtime; Następnie w pliku .babelrc dodaj tę linię: {"presets": ["@ babel / preset-env", "@ babel / preset-aware"], "plugins": [["@ babel / transform-runtime"] ]}. ',

    "pagination.data": {
        "description": "Tablica obiektów zdefiniowanych przez użytkownika.",
        "type": "Array",
        "default": "[]"
    },
    "pagination.searchOnKeys": {
        "description": "Tablica ciągów. Tablica (obiektów podanych w kluczu 'data') nazw kluczy do użycia w polu wyszukiwania (wejściowym).",
        "type": "Array",
        "default": "[]"
    },
    "pagination.itemsPerSite": {
        "description": "Ile witryn ma być renderowanych na każdej stronie.",
        "type": "Number",
        "default": "10"
    },
    "pagination.keysToRender": {
        "description": "Tablica ciągów. Tablica nazw kluczy, które powinny być wyświetlane na podstawie tablicy obiektów (klucz: 'dane').",
        "type": "Array",
        "default": "[]"
    },
    "pagination.liCallback": {
        "description": "Niestandardowa funkcja zwrotna, jeśli użytkownik kliknie pojedynczą linię. Ta funkcja zwraca 2 argumenty. Argument 1: clickEvent, Argument 2: bieżący kliknięty element jako obiekt.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "pagination.inputCallback": {
        "description": "Niestandardowa funkcja zwrotna, jeśli użytkownik zmieni wartość pola wejściowego. Ta funkcja zwraca 1 argument. Argument 1: zdarzenie.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "pagination.lineNumber": {
        "description": "Wyświetl aktualny numer linii (indeks pętli +1).",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.resetLineNumber": {
        "description": "Zresetuj numer każdej linii dla każdej strony. Każda pozycja rozpocznie się liczbą: 1.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.displayTotal": {
        "description": "Wyświetl całkowitą liczbę dostarczonych danych.length.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.totalPrefix": {
        "description": "Wyświetl prefiks przed wyświetleniem liczby całkowitej długości danych.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.totalSufix": {
        "description": "Wyświetl sufiks za liczbą całkowitej ilości danych.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.paginationPages": {
        "description": "Wyświetl paginację.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.paginationTextPrefix": {
        "description": "Tekst 'strona'",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "pagination.paginationTextMiddle": {
        "description": "Tekst 'z'.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "pagination.prevPages": {
        "description": "Ile stron powinno być wyświetlanych 'przed' bieżącą stroną (tak jak poprzednie strony).",
        "type": "Number",
        "default": "2"
    },
    "pagination.nextPages": {
        "description": "Ile stron powinno być wyświetlanych 'po' bieżącej stronie (jako następne strony).",
        "type": "Number",
        "default": "2"
    },
    "pagination.totalPages": {
        "description": "Całkowita liczba dostępnych stron.",
        "type": "Number",
        "default": "0"
    },
    "pagination.globalCount": {
        "description": "Całkowita liczba dostępnych pozycji.",
        "type": "Number",
        "default": "0"
    },
    "pagination.alignPagesItems": {
        "description": "Struktura renderowanych elementów. Dostępne opcje: 1, 2, 3, 4, 5.",
        "type": "Number",
        "default": "1"
    },
    "pagination.alignPagination": {
        "description": "Odwzorowana struktura paginacji. Dostępne opcje: 1, 2.",
        "type": "Number",
        "default": "1"
    },
    "pagination.previousButton": {
        "description": "HTML dla poprzedniego przycisku.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "pagination.nextButton": {
        "description": "HTML dla następnego przycisku.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "pagination.searchActive": {
        "description": "Renderuj pole wyszukiwania.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.searchPlaceholder": {
        "description": "Symbol zastępczy danych wejściowych.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "pagination.searchPlaceholder": {
        "description": "Placeholder.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "pagination.searchIcon": {
        "description": "Kod HTML przycisku wyszukiwania po prawej stronie pola wyszukiwania. Jeśli użytkownik kliknie ikonę wyszukiwania, wyszukiwanie zostanie wykonane.",
        "type": "String | JSX",
        "default": "🔍"
    },
    "pagination.searchSensitive": {
        "description": "Wykonaj wyszukiwanie jako 'wyszukiwanie wrażliwe na klawisze'.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.searchValue": {
        "description": "Ponów po raz pierwszy niestandardową wartość wyszukiwania, aby przeprowadzić wyszukiwanie bez interakcji z użytkownikiem.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "pagination.searchOnKeyDown": {
        "description": "Wykonaj wyszukiwanie na dostarczonych danych, jeśli użytkownik zmienia wartość wejściową.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.searchTitle": {
        "description": "Tag <h1> jako tytuł pola wyszukiwania.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "pagination.paginationTitle": {
        "description": "Tag <h1> jako tytuł tabeli.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "pagination.paginationTitle": {
        "description": "Tag <h1> jako tytuł tabeli.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "pagination.fallbackLoading": {
        "description": "Użyj ikony ładowania, gdy użytkownik filtruje dane.",
        "type": "Boolean",
        "default": "false"
    },
    "pagination.fallbackLoadingTime": {
        "description": "Użyj niestandardowego limitu czasu, aby wyświetlić ikonę ładowania przez dłuższe ms (milisekundy).",
        "type": "Number",
        "default": "0"
    },
    "pagination.fallbackNoData": {
        "description": "Niestandardowe dane do renderowania w przypadku braku danych.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "pagination.fallbackNoDataSearch": {
        "description": "Niestandardowe dane do renderowania, jeśli podczas wyszukiwania nie znaleziono żadnych danych.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "pagination.fallbackMounting": {
        "description": "Użyj ikony ładowania, gdy moduł (komponent) generuje dane.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "removeHashFromDomain": {
        "description": "Usuń znaki '/#/' z nazwy domeny.",
        "type": "Boolean",
        "default": "false"
    },
    "globalMessage.empty": {
        "description": "Jeśli true, wszystkie wiadomości zostaną usunięte po zmianie lokalizacji (window.location.href).",
        "type": "Boolean",
        "default": "true"
    },
    "breadcrumbs.example3": "Przykład z menu dołączonym do ostatniej pozycji.",
    "pager.dynamic.description": 'To jest przykład z dynamicznym pagerem, więc za każdym razem, gdy strona jest zmieniana, wykonywane jest zapytanie do bazy danych. Ta funkcja z zapytaniem DB zwraca obietnicę (Promise). Musi to być obietnica, ponieważ moduł wewnętrznie zawiera "await" (oczekiwanie), więc zmiana strony nastąpi tylko wtedy, gdy obietnica zostanie rozwiązana (resolve), a dane zostaną dostarczone.',
    "promise": {
        "description": "Generuj każdą linię kodu jako obietnicę dla lepszej wydajności podczas generowania bardzo długich ciągów do struktury kodu źródłowego. Jeśli fałsz, wówczas moduł generuje kod źródłowy (kod jsx) bez obietnicy.",
        "type": "Boolean",
        "default": "false"
    },
    "promiseLine": {
        "description": "Działa tylko wtedy, gdy klucz 'promise' jest ustawiony na true. Zrób 'break' (przekroczenie limitu czasu na rozwiązanie bieżącej obietnicy) w linii numer x - aby zatrzymać krytyczne użycie procesora, jeśli przekazany ciąg / kod jest dłuższy następnie 10.000 linii kodu. ",
        "type": "Number",
        "default": "1000"
    },
    "promiseTime": {
        "description": "Działa tylko wtedy, gdy klucz 'promise' jest ustawiony na true. Czas oczekiwania na rozwiązanie bieżących linii Promise używany w połączeniu z kluczem 'promiseLine'.",
        "type": "Number",
        "default": "500"
    },
    "matcher": {
        "description": "Tablica obiektów.",
        "type": "Array",
        "default": "[]"
    },
    "matcher.words": {
        "description": "Tablica ciągów / słów do dopasowania.",
        "type": "Array",
        "default": "[]"
    },
    "matcher.className": {
        "description": "Dołącz nazwę klasy do dopasowanego słowa.",
        "type": "String",
        "default": "undefined"
    },
    "lineNumberNewLine": {
        "description": "Działa tylko wtedy, gdy klucz 'lineNumber' jest ustawiony na true. Renderuj numer linii dla pustych linii.",
        "type": "String",
        "default": "undefined"
    },
    "sourceCode": {
        "description": "Tablica ciągów. Które funkcje logiczne należy wywołać dla każdego wiersza w podanej kolejności, aby dopasować określone kody. Kroki dla każdego wiersza kodu są następujące: 1 - tagi: tagi JSX (HTML). 2 - properties: właściwości HTML, takie jak className. 3 - zmienne: słowa zawierające znak równości (=). 4 - objectProperty: pojedyncza właściwość obiektu, jeśli podano znak dwukropka. 5 - funkcje: dopasuj pojedyncze funkcje. 6 - słowa: dopasuj niestandardowe słowa. 7 - cudzysłowy: dopasuj cudzysłowy ('' ',', '\"'). 8 - nawiasy: dopasuj nawiasy ('(', '}', ']'). ",
        "type": "Array",
        "default": "['tagi', 'właściwości', 'zmienne', 'właściwość obiektu', 'funkcje', 'słowa', 'cudzysłowy', 'nawiasy']"
    },
    "code": {
        "description": "Główny ciąg do generowania kodu źródłowego.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "link.404": {
        "description": "Obiekt dla funkcji linku wstecznego.",
        "type": "Object",
        "default": "{}"
    },
    "link.404.text": {
        "description": "Tekst linków.",
        "type": "JSX | String",
        "default": "undefined"
    },
    "link.404.href": {
        "description": "Docelowe linki.",
        "type": "String",
        "default": "undefined"
    },
    "link.404.props": {
        "description": "Właściwości HTML tagu <a>.",
        "type": "Object",
        "default": "undefined"
    },
    "link.404.callback": {
        "description": "Funkcja wywołania zwrotnego po kliknięciu. Ta funkcja zwraca 1 argument. Argument 1: zdarzenie kliknięcia.",
        "type": "Object",
        "default": "undefined"
    },
    "text404": {
        "description": "Kod błędu.",
        "type": "String",
        "default": "404"
    },
    "404.text1": {
        "description": "Niestandardowy (większy) tekst.",
        "type": "String",
        "default": "requested page"
    },
    "404.text2": {
        "description": "Niestandardowy (mniejszy) tekst.",
        "type": "String",
        "default": "was not found"
    },
    "404.bad": {
        "description": "Czy moduł jest w złym trybie.",
        "type": "Boolean",
        "default": "false"
    },
    "404.shipname": {
        "description": "Nazwa statku.",
        "type": "JSX | String",
        "default": "<pusty ciąg>"
    },
    "scroll-to-desc-1": "Przykład z nawigacją na początek strony w ciągu 1 sekundy.",
    "scroll-to-desc-2": "Przykład z nawigacją do pierwszego przykładu w ciągu 300 milisekund.",
    "navigationTime": {
        "description": "Zdefiniowany przez użytkownika czas nawigacji w milisekundach.",
        "type": "Number",
        "default": "300"
    },
    "navigationTarget": {
        "description": "Przejdź na stronie do tego elementu HTML (selektora). W przypadku klasy wpisz pierwszą pozycję. (kropka), jeśli jest to identyfikator, na pierwszej pozycji musi znajdować się # (hash). Jeśli klucz `` html '' jest pusty / niezdefiniowany, a wartość jest 'bottom' - wówczas moduł zwraca przewijanie do dołu predefiniowany html i przewijanie do dołu funkcjonalność, jeśli wartość to 'top' - wówczas moduł ponownie dostraja przewijanie do góry predefiniowany html i przewijanie do góry funkcjonalności. ",
        "type": "JSX | String",
        "default": "<pusty ciąg>"
    },
    "html": {
        "description": "Niestandardowy kod HTML, który jest wyświetlany, jeśli klucz 'navigationTarget' nie ma znaku. (kropka) lub # (krzyżyka) na pierwszej pozycji.",
        "type": "JSX | String",
        "default": "<pusty ciąg>"
    },
    "hideAt": {
        "description": "Jeśli dokument jest 'zmieniony', a wartość jest mniejsza lub równa tej wartości, pasek boczny jest całkowicie zminimalizowany.",
        "type": "Number",
        "default": "520"
    },
    "minifyAt": {
        "description": "Jeśli 'zmieniono rozmiar' dokumentu, a wartość jest mniejsza lub równa tej wartości, pasek boczny jest zminimalizowany.",
        "type": "Number",
        "default": "720"
    },
    "maxifyAt": {
        "description": "Maksymalizuj poprzednio zminimalizowany pasek boczny do szerokości głównej (bazowej).",
        "type": "Number",
        "default": "1024"
    },
    "minifySidebarOn": {
        "description": "Jeśli wartość window.location.href lub window.location.hash pasuje do wpisu na tej liście, to pasek boczny jest wyświetlany całkowicie zminimalizowany.",
        "type": "String[]",
        "default": "[]"
    },
    "displayMinifyMaxifyIcon": {
        "description": "Renderuj boczne paski przełączające HTML - JSX z klucza 'toggleMenuHtml'.",
        "type": "Boolean",
        "default": "undefined"
    },
    "minify": {
        "description": "Czy pasek boczny (całkowicie) jest zminimalizowany.",
        "type": "Boolean",
        "default": "undefined"
    },
    "toggleMenuHtml": {
        "description": "Niestandardowy JSX używany jako ikona przełączająca na pasku bocznym. Ten kod HTML znajduje się w treści nagłówków.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "closeMenuHtml": {
        "description": "Niestandardowy JSX używany jako ikona zamykania na pasku bocznym, jeśli szerokość dokumentów jest mniejsza niż wartość przekazana do modułu za pomocą klucza 'minifyAt'.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "moduleSidebar": {
        "description": "Moduł 'Menu'.",
        "type": "Moduł",
        "default": "undefined"
    },
    "headerData": {
        "description": "Niestandardowy JSX w obszarze nagłówków.",
        "type": "Moduł",
        "default": "<pusty ciąg>"
    },
    "headerProps": {
        "description": "Właściwości elementu div nagłówka.",
        "type": "Object",
        "default": "{}"
    },
    "contentData": {
        "description": "Niestandardowy JSX w obszarze zawartości.",
        "type": "Moduł",
        "default": "<pusty ciąg>"
    },
    "contentProps": {
        "description": "Właściwości div środkowej części.",
        "type": "Object",
        "default": "{}"
    },
    "footerData": {
        "description": "Niestandardowy JSX w obszarze stopki.",
        "type": "Moduł",
        "default": "<pusty ciąg>"
    },
    "footerProps": {
        "description": "Właściwości elementu div stopki.",
        "type": "Object",
        "default": "{}"
    },
    "dashed" : {
        "description": "Narysuj po lewej stronie przerywaną ramkę dla każdego otwartego wpisu menu.",
        "type": "Boolean",
        "default": "false"
    },
    "dashed_example": "Przykład z użyciem klucza'dashed={true}'.",
    "articles.animation": {
        "description": "Animacja podczas przełączania artykułu. Animacje, których można użyć: 'height', 'scale' or 'opacity'. Aby animacja odniosła skutek, element musi być elementem inline-block lub block, można to rozwiązać za pomocą CSS, dodając właściwość CSS do togglera: display: block, display: inline-block.",
        "type": "String",
        "default": "undefined"
    },
    "articles.animation.images": {
        "description": "Animacja podczas przełączania artykułu. Animacje, które można wykorzystać: 'scale'.",
        "type": "String",
        "default": "undefined"
    },
    "articles.title": {
        "description": "Tytuł artykułu.",
        "type": "String",
        "default": "undefined"
    },
    "articles.titleProps": {
        "description": "Atrybuty tagów HTML tytułów.",
        "type": "Object",
        "default": "{}"
    },
    "articles.text": {
        "description": "Tekst artykułu.",
        "type": "String",
        "default": "undefined"
    },
    "articles.textProps": {
        "description": "Tekstowe atrybuty tagów HTML.",
        "type": "Object",
        "default": "{}"
    },
    "articles.image": {
        "description": "URL obrazu.",
        "type": "String",
        "default": "undefined"
    },
    "articles.imageProps": {
        "description": "Atrybuty tagów HTML obrazów.",
        "type": "Object",
        "default": "{}"
    },
    "articles.imageData": {
        "description": "Niestandardowe dane w obrazie.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "articles.dataToggle": {
        "description": "Główne dane niestandardowe do przełączenia po kliknięciu artykułu.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "articles.border": {
        "description": "Obiekt.",
        "type": "Object",
        "default": "{}"
    },
    "articles.border.site": {
        "description": "Wyrównaj obramowanie na stronie: 'góra', 'prawo', 'dół', 'lewa'.",
        "type": "String",
        "default": "undefined"
    },
    "articles.border.width": {
        "description": "Szerokość obramowania w pikselach.",
        "type": "Number",
        "default": "undefined"
    },
    "articles.border.color": {
        "description": "Kolor obramowania. Wartości, które mogą być użyte jako kolor: string, rgb / rgba i HEX.",
        "type": "String",
        "default": "undefined"
    },
    "articles.toggleOn": {
        "description": "Przełączanie następuje po kliknięciu elementu. Dostępne opcje: 'title' lub 'text'. Domyślnie tylko jedno kliknięcie na całej „ramce” (ramce z artykułami) jest akceptowane i powoduje efekt przełączania.",
        "type": "String",
        "default": "undefined"
    },
    "articles.itemsPerLine": {
        "description": "Liczba elementów w jednym 'rzędzie' (linii).",
        "type": "Number",
        "default": "3"
    },    
    "articles.persist": {
        "description": "Przełączony element (dane pojedynczego elementu) pozostaje czyli brak możliwości schowania elementu/ danych z powrotem.",
        "type": "Boolean",
        "default": "false"
    },
    "articles.toggleForwards": {
        "description": "Własny zdefiniowany JSX aby ukazać dane. Gdy zostaje użyty, wtedy klucz 'toggleOn' zostaje zignorowany.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "articles.toggleBackwards": {
        "description": "Własny zdefiniowany JSX aby ukryć dane.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "articles.description.1": "Przykład z kluczem: 'border'.",
    "articles.description.2": "Przykład z użyciem klucza closeOnClickOutside={true}. Oznacza to zamknięcie wszystkich przełączanych artykułów, jeśli użytkownik wykona kliknięcie poza modułem.",
    "articles.description.3": "Przykład z użyciem klucza persist={true}.",
    "articles.description.4": "Przykład z użyciem kluczy 'toggleForwards' oraz 'toggleBackwards'.",
    "readmore.animation": {
        "description": "Animacja podczas przełączania tekstu do czytania. Animacje, których można użyć: 'height', 'scale', 'opacity'. Aby animacja odniosła skutek, element musi być elementem blokowym lub inline-block, można to rozwiązać za pomocą CSS, dodając właściwość CSS do przełącznika toggler: display: block, display: inline-block.",
        "type": "String",
        "default": "undefined"
    },
    "readmore.toggleForwards": {
        "description": "Pokaż samodzielnie zdefiniowany tekst lub kod HTML wokół tekstu. Wydarzenie „czytaj więcej” zostało dodane tutaj.",
        "type": "String | JSX",
        "default": "..."
    },
    "readmore.toggleBackwards": {
        "description": "Ukryj samodzielnie zdefiniowany tekst lub HTML wokół tekstu. W tym miejscu dodano wydarzenie „mniej czytaj”.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "readmore.data": {
        "description": "Tekst główny.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "readmore.dataToggle": {
        "description": "Tekst do wyświetlenia.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "readmore.callback.toggleOnReject": {
        "description": "Zezwól na ponowne wyświetlenie przycisku z klucza 'toggleReject' aby ponownie wykonać zapytanie (callback).",
        "type": "Boolean",
        "default": "false"
    },
    "readmore.callback.toggleReject": {
        "description": "Pokaż samodzielnie zdefiniowany tekst lub kod HTML aby ponownie wykonać zapytanie.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "readmore.callback.callback": {
        "description": "Funkcja wywołania zwrotnego w celu załadowania danych. Ta funkcja zwraca 2 argumenty. Argument 1: kliknięcie Zdarzenie, argument 2: niestandardowe zdefiniowane dane przekazywane przez klucz 'callbackProps'.",
        "type": "Boolean",
        "default": "false"
    },
    "readmore.callback.callbackProps": {
        "description": "Dane zdefiniowane przez użytkownika przekazywane jako drugi argument do funkcji zwrotnej klucza 'callback'.",
        "type": "Boolean",
        "default": "false"
    },
    "readmore.callback.loading": {
        "description": "Pokaż samodzielnie zdefiniowany tekst lub kod HTML podczas pobierania danych w stanie oczekiwania na obietnicę.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "readmore-description-1" : "Przykład z użyciem przycisku 'czytaj więcej'.",
    "readmore-description-2" : "Przykład z użyciem przycisku 'czytaj więcej' i 'czytaj mniej'.",
    "readmore-callback-description-1" : "Przykład z użyciem przycisku 'czytaj więcej' z metodą zwrotną, która trwa 2000ms, podczas tego czasu ukazany jest HTML klucza 'loading'. W tym przypadku własny obraz gif. Funkcja wewnętrzna modułu czeka (await) na rozwiązanie 'obietnicy' (Promise -> resolve) aby otrzymac dane do ukazania. Gdy dane zostały załadowane jeden raz, nie bedą ładowane drugi raz!. Gdy obietnica sie nie udała (Promise -> reject) wtedy także można przekazac dane do modułu. Gdy miejsce ma 'Promise.reject()' i nie ma żadnych danych, wtedy 'nie dzieje' się nic i klucz 'toggleForwards' ukazuje się ponownie.",
    "readmore-callback-description-2" : "Przykład z użyciem przycisku 'czytaj więcej' i 'czytaj mniej' z metodą zwrotną, która trwa 2000ms, podczas tego czasu ukazany jest HTML klucza 'loading'. W tym przypadku własny obraz gif. Funkcja wewnętrzna modułu czeka (await) na rozwiązanie 'obietnicy' (Promise -> resolve) aby otrzymac dane do ukazania. Gdy dane zostały załadowane jeden raz, nie bedą ładowane drugi raz!. Gdy obietnica sie nie udała (Promise -> reject) wtedy także można przekazac dane do modułu. Gdy miejsce ma 'Promise.reject()' i nie ma żadnych danych, wtedy 'nie dzieje' się nic i klucz 'toggleForwards' ukazuje się ponownie.",
    "readmore-callback-description-3" : "Przykład z Promise.reject() i przekazaną wiadomością w formie JSX oraz kluczem 'toggleOnReject={true}' i 'toggleReject' (własnym przyciskiem - spróbuj ponownie).",
    "readmore-callback-description-4" : "Przykład z Promise.reject().",
    "readmore-callback-description-5" : "Przykład z przekazaną wiadomością w formie JSX oraz po 2 próbach Promise.reject() a podczas 3 próbie Promise.resolve()",
    "modal.callback": {
        "description": "Obowiązkowa funkcja oddzwaniania do zmiany aktualnego stanu wyświetlania. Jedynym przekazywanym parametrem jest zdarzenie (keydown | touch | click).",
        "type": "Function",
        "default": "undefined"
    },
    "modal.data": {
        "description": "Samodzielnie zdefiniowany ciąg zamówienia HTML do wyświetlenia.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "modal.close": {
        "description": "Samodzielnie zdefiniowany ciąg zamówienia HTML. Do tego kodu HTML dodano funkcję 'callback'.",
        "type": "String | JSX",
        "default": "<pusty ciąg>"
    },
    "modal.closeOnKeyDown": {
        "description": "Dodaj zdarzenie 'keydown' i 'touch' do elementu DOM, aby wywołać funkcję 'callback'.",
        "type": "Boolean",
        "default": "true"
    },
    "modal.closeOnClickDimmed": {
        "description": "Dodaj zdarzenie 'click' do 'posiadacza' modułu, aby wywołać funkcję 'callback'.",
        "type": "Boolean",
        "default": "true"
    },
    "timeline.lineMiddle": {
        "description": "Narysuj linię na środku osi czasu.",
        "type": "Boolean",
        "default": "false"
    },
    "timeline.lineTitle": {
        "description": "Narysuj linię od 'tematu' do środka osi czasu.",
        "type": "Boolean",
        "default": "false"
    },
    "timeline.lineEntry": {
        "description": "Narysuj linię od 'treści' do środka osi czasu.",
        "type": "Boolean",
        "default": "false"
    },
    "timeline.colorLineMiddle": {
        "description": "Kolor środkowej linii.",
        "type": "String",
        "default": "# dadce0"
    },
    "timeline.colorLineEntry": {
        "description": "Kolor linii kluczy: 'lineTitle' i 'lineEntry'.",
        "type": "String",
        "default": "# dadce0"
    },
    "timeline.colorBorderEntry": {
        "description": "Kolor obramowania każdego wpisu na osi czasu.",
        "type": "String",
        "default": "#dadce0"
    },
    "timeline.borderStyle": {
        "description": "Styl obramowania. Dostępne opcje: 'solid', 'dashed', 'mixed' i '!mixed'.",
        "type": "String",
        "default": "solid"
    },
    "timeline.dashedSize": {
        "description": "Rozmiar 'borderStyle'. Działa tylko z 'borderStyle' z wartością 'dashed'. Dostępne opcje: 'small' i 'large'.",
        "type": "String",
        "default": "small"
    },
    "timeline.data": {
        "description": "Dane osi czasu w postaci tablicy obiektów.",
        "type": "Array",
        "default": "[]"
    },
    "timeline.data.title": {
        "description": "Niestandardowy kod HTML tytułu.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "timeline.data.align": {
        "description": "Strona wpisu do wygenerowania.",
        "type": "String",
        "default": "center"
    },
    "timeline.data.content": {
        "description": "Niestandardowy kod HTML treści.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "description.dragDrop.1": "Przykład z domyślną funkcją przeciągnij i upuść na podstawie wywołania zwrotnego w celu zastosowania zmian stanu.",
    "description.dragDrop.2": "Przykład z niestandardową funkcją callbackAllowDrop (Promise - musisz rozwiązać lub odrzucić z wartością true lub false), aby zwrócić prawda / fałsz, aby zastosować lub odrzucić zmiany stanu.",
    "description.dragDrop.3": "Przykład z niestandardową funkcją callbackAllowDrop (Promise - musisz rozwiązać lub odrzucić z wartością true lub false), aby zwrócić prawda / fałsz, aby zastosować lub odrzucić zmiany stanu i niestandardową ikonę ładowania podczas oczekiwania na odpowiedź funkcji callbackAllowDrop. ",
    "description.dragDrop.4": "Przykład z obszarem 'Owoce' - dozwolone tylko upuszczanie i 'Warzywa' - dozwolone tylko przeciąganie.",
    "drag.drop.data": {
        "description": "Obiekt.",
        "type": "Object",
        "default": "{}"
    },
    "drag.drop.data.data": {
        "description": "Tablica obiektów z pojedynczymi pozycjami.",
        "type": "Array",
        "default": "undefined"
    },
    "drag.drop.data.data.text": {
        "description": "Główny tekst do wyświetlenia pojedynczych pozycji.",
        "type": "String",
        "default": "undefined"
    },
    "drag.drop.data.data.props": {
        "description": "Właściwości pojedynczych elementów (li).",
        "type": "String",
        "default": "undefined"
    },
    "drag.drop.data.name": {
        "description": "Nazwa obszaru (tytuł).",
        "type": "String",
        "default": "Klucz obiektów"
    },
    "drag.drop.data.areaProps": {
        "description": "Nieruchomości (ul).",
        "type": "Object",
        "default": "{}"
    },
    "drag.drop.data.titleProps": {
        "description": "Właściwości tytułów.",
        "type": "String",
        "default": "Klucz obiektów"
    },
    "drag.drop.data.allowDrop": {
        "description": "Pozwól upuszczać elementy do tego obszaru.",
        "type": "Boolean",
        "default": "true"
    },
    "drag.drop.data.allowDrag": {
        "description": "Zezwól na przeciąganie elementów z tego obszaru.",
        "type": "Boolean",
        "default": "true"
    },
    "drag.drop.data.dropLoading": {
        "description": "Może być używany tylko w kombinacjach z kluczem 'callbackAllowDrop'. Niestandardowe ładowanie danych.",
        "type": "Boolean",
        "default": "true"
    },
    "drag.drop.itemsPerLine": {
        "description": "Ile pól w jednej linii.",
        "type": "Number",
        "default": "2"
    },
    "drag.drop.mediaBreak": {
        "description": "Domyślnie główny uchwyt skrzynki (dla każdej linii 'itemsPerLine') staje się klasą flex, flex-row na media break staje się klasą flex i flex-column.",
        "type": "Number",
        "default": "undefined"
    },
    "drag.drop.callback": {
        "description": "Niestandardowe wywołanie zwrotne użytkownika z nowymi zmianami do zastosowania. Ta funkcja zwraca 4 argumenty. Argument 1: poprzedni stan bieżących danych, Argument 2: następny stan bieżących danych, Argument 3: zmiany, które zostaną wprowadzone, Argument 4: dane niestandardowe pochodzą z klucza 'callbackProps'. ",
        "type": "Function",
        "default": "undefined"
    },
    "drag.drop.callbackProps": {
        "description": "Niestandardowe dane użytkownika.",
        "type": "Any",
        "default": "undefined"
    },
    "drag.drop.callbackAllowDrop": {
        "description": "Niestandardowa funkcja zwrotna użytkownika ze zmianami przed jej zastosowaniem (po usunięciu przez użytkownika, ale zmiany nie są ponownie renderowane do nowego stanu). Ta funkcja zwraca 4 argumenty. Argument 1: poprzedni stan bieżącego dane, Argument 2: stan nex bieżących danych, Argument 3: zmiany, które zostaną wprowadzone, Argument 4: dane niestandardowe pochodzą z klucza 'callbackAllowDropProps'. ",
        "type": "Function",
        "default": "undefined"
    },
    "drag.drop.callbackAllowDropProps": {
        "description": "Niestandardowe dane użytkownika.",
        "type": "Any",
        "default": "undefined"
    },
    "drag.drop.lineNumber": {
        "description": "Wyświetl numer linii po lewej stronie tekstu.",
        "type": "Boolean",
        "default": "false"
    },
    "drag.drop.lineNumberChar": {
        "description": "można użyć tylko wtedy, gdy klucz 'lineNumber' ma wartość true. Wyświetl niestandardowy znak po numerze linii.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "description.dragDropList.1": "Przykład z domyślną funkcją przeciągnij i upuść na podstawie wywołania zwrotnego w celu zastosowania zmian stanu.",
    "description.dragDropList.2": "Przykład z niestandardową funkcją callbackAllowDrop (Promise - musisz rozwiązać lub odrzucić z wartością true lub false), aby zwrócić prawda / fałsz, aby zastosować lub odrzucić zmiany stanu.",
    "drag.drop.list.placeholder": {
        "description": "Niestandardowe dane JSX do renderowania wewnątrz symbolu zastępczego.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "drag.drop.list.placeholderPosition": {
        "description": "Jeśli użytkownik zacznie przeciągać element i znajduje się nad pozycją upuszczenia, wygeneruj PLACEHOLDER na stronie elementu najechanego kursorem. Dostępne opcje: 'top' (symbole zastępcze są zawsze na górze elementu najechanego kursorem), ' bottom '(symbole zastępcze są zawsze na dole elementu najechanego kursorem) i' auto '(symbole zastępcze są wykrywane automatycznie). ",
        "type": "String",
        "default": "auto"
    },
    "drag.drop.list.areaProps": {
        "description": "Niestandardowe właściwości ul.",
        "type": "Object",
        "default": "{}"
    },
    "drag.drop.list.data": {
        "description": "Tablica obiektów.",
        "type": "Array",
        "default": "[]"
    },
    "drag.drop.list.text": {
        "description": "Główny tekst do wyświetlenia.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "drag.drop.list.props": {
        "description": "Niestandardowe właściwości li.",
        "type": "Object",
        "default": "{}"
    },
    "stars.description.1": "Przykład z gwiazdkami w trybie tylko do odczytu i bez wypełnionych gwiazdek oraz w domyślnym czarnym kolorze.",
    "stars.description.2": "Przykład z gwiazdami w trybie tylko do odczytu i 2 wypełnionymi gwiazdkami po 5 i wypełnionym kolorem 'orange-yellow'.",
    "stars.description.3": "Przykład z gwiazdkami w trybie wywołania zwrotnego i 0 wypełnionymi gwiazdkami o wartości 5 oraz z niestandardową funkcją wywołania zwrotnego do ponownego renderowania wypełnionych elementów po kliknięciu gwiazdki.",
    "stars.description.4": "Przykład z własnymi właściwościami przekazanymi do każdej gwiazdy.",
    "stars.count": {
        "description": "Ile gwiazdek powinno zostać wygenerowanych.",
        "type": "Number",
        "default": "0"
    },
    "stars.filled": {
        "description": "Ile gwiazdek powinno być wyświetlanych jako wypełnione.",
        "type": "Number",
        "default": "0"
    },
    "stars.fillHover": {
        "description": "Wypełnij niewypełnioną gwiazdkę.",
        "type": "Boolean",
        "default": "false"
    },
    "stars.callback": {
        "description": "Niestandardowa funkcja wywołania zwrotnego po kliknięciu gwiazdki. Ta funkcja zwraca 3 argumenty: Argument 1: zdarzenie kliknięcia, Argument 2: aktualnie kliknięta gwiazda, Argument 3: callbackProps.",
        "type": "Funkcja",
        "default": "undefined"
    },
    "stars.callbackProps": {
        "description": "Dane zdefiniowane przez użytkownika przekazane jako ostatni argument do funkcji 'callback'.",
        "type": "Dowolne",
        "default": "undefined"
    },
    "stars.color": {
        "description": "Kolor wypełnionych i niewypełnionych gwiazdek. Domyślnie dostępne są 3 kolory: 'orange', 'orange-yellow' i 'yellow'.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
    "stars.starsData": {
        "description": "Tablica obiektów.",
        "type": "Array",
        "default": "[]"
    },
    "stars.starsData.props": {
        "description": "Obiekt z niestandardowymi właściwościami.",
        "type": "Object",
        "default": "{}"
    },
    "stars.starsData.data": {
        "description": "Niestandardowe dane JSX dołączone w gwiazdkach HTML.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "InputSuggestionObject.description.1": "Przykład z wstępnie załadowaną listą do filtrowania oraz filtorwaniem key-sensitive. Funkcja filtrująca (wrażliwa na klawisz / NIE wrażliwa na klawisz) jest wykonywana wewnętrznie i jest oparta na tekście klucza potomnego (obiektu). Możesz renderuj / wyświetl wartość klucza 'text' lub inną wartość (JSX), przekazując elementowi potomnemu (obiekt) klucz 'jsx'. ",
    "InputSuggestionObject.description.2": "Przykład z filtorwaniem key-not-sensitive oraz kluczem 'ładowanie' opartym na funkcji callback i przekazanym callback'em musi być Promise (w połączeniu z klawiszem 'loading'!). W tym czasie (czekaj) ładowanie ikona jest wyświetlana. Jeśli rozwiążesz lub odrzucisz obietnicę, ikona ładowania / dane znikną. ",
    "InputSuggestionArray.description.1": "Przykład z wstępnie załadowaną listą do filtrowania przy użyciu wyszukiwania z uwzględnieniem klawiszy. Funkcja filtru (z uwzględnieniem klawiszy / NIEZALEŻNA od klawiszy) jest wykonywana wewnętrznie i jest oparta na tekście podrzędnym (tablice) wejście.",
    "InputSuggestionArray.description.2": "Przykład z wyszukiwaniem bez klucza i z kluczem 'ładowanie' opartym na funkcji zwrotnej i przekazanym wywołaniu zwrotnym musi być obietnicą (w połączeniu z klawiszem 'ładowanie'!) . Na ten (czekaj) czas ikona ładowania jest wyświetlana. Jeśli rozwiążesz lub odrzucisz obietnicę, ikona / dane ładowania znikną. ",
    "CustomSuggestion.description.1": "Przykład z sugestiami z href przekierowania użytkownika po zdarzeniu kliknięcia i kluczem 'callbackRerender = {true}' (wymagany do zaakceptowania nowego stanu wewnętrznego) oraz z listą sugestii wcześniejszych znajomych." ,
    "CustomSuggestion.description.2": "Przykład z sugestiami z href przekierowania użytkownika po zdarzeniu kliknięcia i kluczem 'callbackRerender = {false}' - oznacza akceptację sugestii z zewnątrz.",
    "CustomSuggestion.description.3": "Przykład z sugestiami z href przekierowania użytkownika po zdarzeniu kliknięcia i kluczem 'callbackRerender = {true}' (wymagany do zaakceptowania nowego stanu = sugestie przychodzące z Obietnicy) i wyszukiwanie z kluczem niewrażliwym i kluczem „ładowanie” opartym na funkcji wywołania zwrotnego i przekazanym wywołaniu zwrotnym musi być obietnicą (w połączeniu z klawiszem „ładowanie”!). W tym czasie (oczekiwanie) wyświetlana jest ikona ładowania . Jeśli rozwiążesz lub odrzucisz obietnicę, ikona ładowania / dane znikną. ",
    "GlobalMessages.description.1": "Przykład z pojedynczą wiadomością. Ta wiadomość zniknie tylko wtedy, gdy użytkownik zmieni aktualną lokalizację.",
    "GlobalMessages.description.2": "Przykład z pojedynczą wiadomością. Ta wiadomość zniknie po dwóch sekundach.",
    "menu.headData": {
        "description": "Zdefiniowane przez użytkownika dane JSX na górze menu.",
        "type": "String | JSX",
        "default": "undefined"
    },
    "menu.activeClassName": {
        "description": "Kiedy element jest kliknięty, otrzymuje nazwę tej klasy.",
        "type": "String",
        "default": "is-active"
    },
    "menu.toggledClassName": {
        "description": "Kiedy element został przełączony, otrzymuje nazwę tej klasy.",
        "type": "String",
        "default": "is-toggled"
    },
    "menu.isActiveTree": {
        "description": "Ile elementów - zaczynając od węzła głównego - powinno być oznaczonych jako AKTYWNE ('activeClassName'). Wartość -1 oznacza bez ograniczeń.",
        "type": "Number",
        "default": "-1"
    },
    "menu.forceClose": {
        "description": "Wymuszanie zamknięcia wszystkich innych elementów ROOT, które nie zostały przełączone.",
        "type": "Boolean",
        "default": "false"
    },
    "menu.forceCloseAll": {
        "description": "Wymuś zamknięcie WSZYSTKICH innych elementów, które nie zostały przełączone.",
        "type": "Boolean",
        "default": "false"
    },
    "menu.align": {
        "description": "W jakim kierunku mają być tworzone elementy menu. Zaczynając od lewej lub prawej strony.",
        "type": "String",
        "default": "left"
    },
    "menu.alignIcon": {
        "description": "Jeśli dostarczono klucz 'ikona', ikona powinna znajdować się po prawej lub lewej stronie.",
        "type": "String",
        "default": "left"
    },
    "menuHeight.singleItemsHeight": {
        "description": "Indywidualna wysokość każdego pojedynczego wpisu menu. Ma znaczenie tylko podczas trwania animacji.",
        "type": "Number",
        "default": "35"
    },
    "menuHeight.animationTime": {
        "description": "Czas animacji do kontrolowania czasu wewnętrznej obsługi klas. Aby uzyskać animację równo z CSS, jeśli wartość jest inna niż 300, musisz przejść do 'animacji : menuHeightAnimateStart <timout> ms ułatw do przodu; ' oraz 'animacja: menuHeightAnimateStop <timout> ms eas-in forward;' dostosuj. ",
        "type": "Number",
        "default": "300"
    },
    "headerDataRight": {
        "description": "Dane JSX z klucza„ headerData ”powinny być wyświetlone po prawej stronie, a dane JSX z klucza„ toggleMenuHtml ”powinny zostać wyświetlone po lewej stronie. Jeśli false, dane JSX z klucza„ headerData ”powinny zostać wyświetlone po lewej stronie, a dane JSX z klucza 'toggleMenuHtml' są wyświetlane po prawej stronie.",
        "type": "Boolean",
        "default": "false"
    },
    "404.imagePath": {
        "description": "Źródło obrazu.",
        "type": "String",
        "default": "<pusty ciąg>"
    },
};

export default PL;

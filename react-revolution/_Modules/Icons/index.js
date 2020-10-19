import React from 'react';

import uuid from '../../_Functions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import loadStyle from '../internalFunctions/loadStyle';

const defaultIcons = {
    'Smileys':
    {
        title: 'Smileys',
        data: [
            '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '🤖', '💩',
        ]
    },
    'Peoples':
    {
        title: 'Peoples',
        data: [
            "👦", "👶", "👧", "👨", "👩", "👴", "👵", "👾", "👨‍⚕️", "👩‍⚕️", "👨‍🎓", "👩‍🎓", "👨‍⚖️", "👩‍⚖️", "👨‍🌾", "👩‍🌾", "👨‍🍳", "👩‍🍳", "👨‍🔧", "👩‍🔧", "👨‍🏭", "👩‍🏭", "👨‍💼", "👩‍💼", "👨‍🔬", "👩‍🔬", "👨‍💻", "👩‍💻", "👨‍🎤", "👩‍🎤", "👨‍🎨", "👩‍🎨", "👨‍✈️", "👩‍✈️", "👨‍🚀", "👩‍🚀", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵", "🕵️‍♂️", "🕵️‍♀️", "💂", "💂‍♂️", "💂‍♀️", "👷", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🧔", "👱", "👱‍♂️", "👱‍♀️", "🤵", "👰", "🤰", "🤱", "👼", "🎅", "🤶", "🧙‍♀️", "🧙‍♂️", "🧚‍♀️", "🧚‍♂️", "🧛‍♀️", "🧛‍♂️", "🧜‍♀️", "🧜‍♂️", "🧝‍♀️", "🧝‍♂️", "🧞‍♀️", "🧞‍♂️", "🧟‍♀️", "🧟‍♂️", "🙍", "🙍‍♂️", "🙍‍♀️", "🙎", "🙎‍♂️", "🙎‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "💁", "💁‍♂️", "💁‍♀️", "🙋", "🙋‍♂️", "🙋‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "🤦", "🤦‍♂️", "🤦‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️", "💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🏃", "🏃‍♂️", "🏃‍♀️", "💃", "🕺", "👯", "👯‍♂️", "👯‍♀️", "🧖‍♀️", "🧖‍♂️", "🕴", "🗣", "👤", "👥", "👫", "👬", "👭", "💏", "👨‍❤️‍", "👩‍❤️‍", "💑", "👪", "👩‍👩‍", "👨‍👦", "👨‍👧", "👩‍👦"
        ]
    },
    'Animals':
    {
        title: 'Animals',
        data: [
            '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊', '💥', '🐵', '🐒', '🦍', '🐶', '🐕', '🐩', '🐺', '🦊', '🐱', '🐈', '🦁', '🐯', '🐅', '🐆', '🐴', '🐎', '🦄', '🦓', '🐮', '🐂', '🐃', '🐄', '🐷', '🐖', '🐗', '🐽', '🐏', '🐑', '🐐', '🐪', '🐫', '🦒', '🐘', '🦏', '🐭', '🐁', '🐀', '🐹', '🐰', '🐇', '🐿', '🦔', '🦇', '🐻', '🐨', '🐼', '🐾', '🦃', '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊', '🦅', '🦆', '🦉', '🐸', '🐊', '🐢', '🦎', '🐍', '🐲', '🐉', '🦕', '🦖', '🐳', '🐋', '🐬', '🐟', '🐠', '🐡', '🦈', '🐙', '🐚', '🦀', '🦐', '🦑', '🐌', '🦋', '🐛', '🐜', '🐝', '🐞', '🦗', '🕷', '🕸', '🦂',
        ]
    },
    'Plants':
    {
        title: 'Plants',
        data: [
            '💐', '🌸', '💮', '🏵', '🌹', '🥀', '🌺', '🌻', '🌼', '🌷', '🌱', '🌲', '🌳', '🌴', '🌵', '🌾', '🌿', '☘', '🍀', '🍁', '🍂', '🍃', '🍄', '🌰',
        ]
    },
    'Nature':
    {
        title: 'Nature',
        data: [
            '🌍', '🌎', '🌏', '🌐', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌙', '🌚', '🌛', '🌜', '☀', '🌝', '🌞', '⭐', '🌟', '🌠', '☁', '⛅', '⛈', '🌤', '🌥', '🌦', '🌧', '🌨', '🌩', '🌪', '🌫', '🌬', '🌈', '☔', '⚡', '❄', '☃', '⛄', '☄', '🔥', '💧', '🌊', '🎄', '✨', '🎋', '🎍',
        ]
    },
    'Food':
    {
        title: 'Food',
        data: [
            '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕', '🌽', '🌶', '🥒', '🥦', '🥜', '🍞', '🥐', '🥖', '🥨', '🥞', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🍳', '🍲', '🥣', '🥗', '🍿', '🥫', '🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🍡', '🥟', '🥠', '🥡', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🥧', '🍫', '🍬', '🍭', '🍮', '🍯', '🍼', '🥛', '☕', '🍵', '🍶', '🍾', '🍷', '🍸', '🍹', '🍺', '🍻', '🥂', '🥃', '🥤', '🥢', '🍽', '🍴', '🥄',
        ]
    },
    'Activity':
    {
        title: 'Activity',
        data: [
            '🏇', '⛷', '🏂', '🧗‍♀', '🧗‍♂', '🧘‍♀', '🧘‍♂', '🏌', '🏌️‍', '🏌️‍', '🏄', '🏄‍♂', '🏄‍♀', '🚣', '🚣‍♂', '🚣‍♀', '🏊', '🏊‍♂', '🏊‍♀', '⛹', '⛹️‍♂', '⛹️‍♀', '🏋', '🏋️‍', '🏋️‍', '🚴', '🚴‍♂', '🚴‍♀', '🚵', '🚵‍♂', '🚵‍♀', '🤸', '🤽‍♂', '🤽‍♀', '🤾', '🤾‍♂', '🤾‍♀', '🤹', '🤹‍♂', '🤹‍♀', '🎪', '🎗', '🎟', '🎫', '🎖', '🏆', '🏅', '🥇', '🥈', '🥉', '⚽', '⚾', '🏀', '🏐', '🏈', '🏉', '🎾', '🎳', '🏏', '🏑', '🏒', '🏓', '🏸', '🥊', '🥋', '⛳', '⛸', '🎣', '🎽', '🎿', '🛷', '🥌', '🎯', '🎱', '🎮', '🎰', '🎲', '🎭', '🎨', '🎼', '🎤', '🎧', '🎷', '🎸', '🎹', '🎺', '🎻', '🥁', '🎬', '🏹',
        ]
    },
    'Travel':
    {
        title: 'Travel',
        data: [
            '🏖', '🏎', '🏍', '🗾', '🏔', '⛰', '🌋', '🗻', '🏕', '🏜', '🏝', '🏞', '🏟', '🏛', '🏗', '🏘', '🏚', '🏠', '🏡', '🏢', '🏣', '🏤', '🏥', '🏦', '🏨', '🏩', '🏪', '🏫', '🏬', '🏭', '🏯', '🏰', '💒', '🗼', '🗽', '⛪', '🕌', '🕍', '⛩', '🕋', '⛲', '⛺', '🌁', '🌃', '🏙', '🌄', '🌅', '🌆', '🌇', '🌉', '🌌', '🎠', '🎡', '🎢', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚝', '🚞', '🚋', '🚌', '🚍', '🚎', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚚', '🚛', '🚜', '🚲', '🛴', '🛵', '🚏', '🛤', '⛽', '🚨', '⛵', '🚤', '🛳', '⛴', '🛥', '🚢', '✈', '🛩', '🛫', '🛬', '💺', '🚁', '🚟', '🚠', '🚡', '🛰', '🚀', '🛸', '⛱', '🎆', '🎇', '🎑', '🗿', '🛂', '🛃', '🛄', '🛅',
        ]
    },
    'Objects':
    {
        title: 'Objects',
        data: [
            '💎', '👓', '🕶', '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗', '👘', '👙', '👚', '👛', '👜', '👝', '🎒', '👞', '👟', '👠', '👡', '👢', '👑', '👒', '🎩', '🎓', '🧢', '⛑', '💄', '💍', '🌂', '☂', '💼', '☠', '🛀', '🛌', '💌', '💣', '🚥', '🚦', '🚧', '⚓', '🕳', '🛍', '📿', '🔪', '🏺', '🗺', '💈', '🛢', '🛎', '⌛', '⏳', '⌚', '⏰', '⏱', '⏲', '🕰', '🌡', '🎈', '🎉', '🎊', '🎎', '🎏', '🎐', '🎀', '🎁', '🔮', '🕹', '🖼', '🎙', '🎚', '🎛', '📻', '📱', '📲', '☎', '📞', '📟', '📠', '🔋', '🔌', '💻', '🖥', '🖨', '⌨', '🖱', '🖲', '💽', '💾', '💿', '📀', '🎥', '🎞', '📽', '📺', '📷', '📸', '📹', '📼', '🔍', '🔎', '🕯', '💡', '🔦', '🏮', '📔', '📕', '📖', '📗', '📘', '📙', '📚', '📓', '📃', '📜', '📄', '📰', '🗞', '📑', '🔖', '🏷', '💰', '💸', '💳', '✉', '📧', '📨', '📩', '📤', '📥', '📦', '📫', '📪', '📬', '📭', '📮', '🗳', '✏', '✎', '🖉', '✒', '🖋', '🖊', '🖌', '🖍', '📝', '📁', '📂', '🗂', '📅', '📆', '🗒', '🗓', '📇', '📈', '📉', '📊', '📋', '📌', '📍', '📎', '🖇', '📏', '📐', '✂', '🗃', '🗄', '🗑', '🔒', '🔓', '🔏', '🔐', '🔑', '🗝', '🔨', '⛏', '⚒', '🛠', '🗡', '⚔', '🔫', '🛡', '🔧', '🔩', '⚙', '🗜', '⚖', '🔗', '⛓', '⚗', '🔬', '🔭', '📡', '💉', '💊', '🚪', '🛏', '🛋', '🚽', '🚿', '🛁', '🚬', '⚰', '⚱', '💘', '❤', '💓', '💔', '💕', '💖', '💗', '💙', '💚', '💛', '🧡', '💜', '🖤', '💝', '💞', '💟', '❣', '💦', '💨', '💫', '🏁', '🚩', '🎌', '🏴', '🏳', '🏳️‍', '🏴‍☠'
        ]
    },
    'Symbols':
    {
        title: 'Symbols',
        data: [
            '👍', '👎', '💪', '🤳', '👈', '👉', '☝', '👆', '🖕', '👇', '✌', '🤞', '🖖', '🤘', '🖐', '✋', '👌', '✊', '👊', '🤛', '🤜', '🤚', '👋', '🤟', '✍', '👏', '👐', '🙌', '🤲', '🙏', '🤝', '💅', '👂', '👃', '⚕️', '👣', '👀', '👁', '🧠', '👅', '👄', '💋', '👁️‍', '💤', '💢', '💬', '🗯', '💭', '♨', '🛑', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕡', '🕖', '🕢', '🕗', '🕣', '🕘', '🕤', '🕙', '🕥', '🕚', '🕦', '🌀', '🃏', '🀄', '🎴', '🔇', '🔈', '🔉', '🔊', '📢', '📣', '📯', '🔔', '🔕', '🎵', '🎶', '🏧', '🚮', '🚰', '♿', '🚹', '🚺', '🚻', '🚼', '🚾', '⚠', '🚸', '⛔', '🚫', '🚳', '🚭', '🚯', '🚱', '🚷', '🔞', '☢', '☣', '🛐', '⚛', '🕉', '✡', '☸', '☯', '✝', '☦', '☪', '☮', '🕎', '🔯', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔀', '🔁', '🔂', '▶', '⏩', '◀', '⏪', '🔼', '⏫', '🔽', '⏬', '⏹', '⏏', '🎦', '🔅', '🔆', '📶', '📳', '📴', '♻', '🔱', '📛', '🔰', '⭕', '✅', '☑', '✔', '✖', '❌', '❎', '➕', '➖', '➗', '➰', '➿', '〽', '✳', '✴', '❇', '‼', '⁉', '❓', '❔', '❕', '❗', '#️⃣', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '💯', '🔠', '🔡', '🔢', '🔣', '🔤', '🅰', '🆎', '🅱', '🆑', '🆒', '🆓', 'ℹ', '🆔', 'Ⓜ', '🆕', '🆖', '🅾', '🆗', '🅿', '🆘', '🆙', '🆚', '🈁', '🈂', '🈷', '🈶', '🈯', '🉐', '🈹', '🈚', '🈲', '🉑', '🈸', '🈴', '🈳', '㊗', '㊙', '🈺', '🈵', '▪', '▫', '◻', '◼', '◽', '◾', '⬛', '⬜', '🔶', '🔷', '🔸', '🔹', '🔺', '🔻', '💠', '🔲', '🔳', '⚪', '⚫', '🔴', '🔵',
        ]
    },
    'Currency':
    {
        title: 'Currency',
        data: [
            '💴', '💵', '💶', '💷', '$', '¢', '£', '€', '¥', '₹', '₽', '元', '¤', '₠', '₡', '₢', '₣', '₤', '₥', '₦', '₧', '₨', '₩', '₪', '₫', '₭', '₮', '₯', '₰', '₱', '₲', '₳', '₴', '₵', '₶', '₸', '₺', '₼', '৲', '৳', '૱', '௹', '฿', '៛', '㍐', '円', '圆', '圎', '圓', '圜', '원', '﷼', '＄', '￠', '￡', '￥', '￦',
        ]
    },
    'Arrows':
    {
        title: 'Arrows',
        data: [
            '⬆', '↗', '➡', '↘', '⬇', '↙', '⬅', '↖', '↕', '↔', '↩', '↪', '⤴', '⤵', '🔃', '🔄', '🔙', '🔚', '🔛', '🔜', '🔝', '➤', '➧', '←', '→', '↓', '↚', '↛', '↜', '↝', '↞', '↟', '↠', '↡', '↢', '↣', '↤', '↥', '↦', '↧', '↨', '↫', '↬', '↭', '↮', '↯', '↰', '↱', '↲', '↳', '↴', '↶', '↷', '↸', '↹', '↺', '↻', '↼', '↽', '↾', '↿', '⇀', '⇁', '⇂', '⇃', '⇄', '⇅', '⇆', '⇇', '⇈', '⇉', '⇊', '⇋', '⇌', '⇍', '⇎', '⇏', '↑', '⇕', '⇖', '⇗', '⇘', '⇙', '⇚', '⇛', '⇜', '⇝', '⇞', '⇟', '⇠', '⇡', '⇢', '⇣', '⇤', '⇥', '⇦', '⇧', '⇨', '⇩', '⇪', '⇫', '⇬', '⇭', '⇮', '⇯', '⇰', '⇱', '⇲', '⇳', '⇴', '⇵', '⇶', '⇷', '⇸', '⇹', '⇺', '⇻', '⇼', '⇽', '⇾', '⇿', '⟰', '⟱', '⟲', '⟳', '⟴', '⟵', '⟶', '⟷', '⟸', '⟹', '⟺', '⟻', '⟼', '⟽', '⟾', '⟿', '⤀', '⤁', '⤂', '⤃', '⤄', '⤅', '⤆', '⤇', '⤈', '⤉', '⤊', '⤋', '⤌', '⤍', '⤎', '⤏', '⤐', '⤑', '⤒', '⤓', '⤔', '⤕', '⤖', '⤗', '⤘', '⤙', '⤚', '⤛', '⤜', '⤝', '⤞', '⤟', '⤠', '⤡', '⤢', '⤣', '⤤', '⤥', '⤦', '⤧', '⤨', '⤩', '⤪', '⤫', '⤬', '⤭', '⤮', '⤯', '⤰', '⤱', '⤲', '⤳', '⤶', '⤷', '⤸', '⤹', '⤺', '⤻', '⤼', '⤽', '⤾', '⤿', '⥀', '⥁', '⥂', '⥃', '⥄', '⥅', '⥆', '⥇', '⥈', '⥉', '⥊', '⥋', '⥌', '⥍', '⥎', '⥏', '⥐', '⥑', '⥒', '⥓', '⥔', '⥕', '⥖', '⥗', '⥘', '⥙', '⥚', '⥛', '⥜',
        ]
    },
    'Html':
    {
        title: 'Html',
        data: [
            '¢', '£', '¤', '¥', '¦', '§', '¨', 'ª', '«', '¬', '­', '®', '¯', '°', '±', '²', '³', '´', 'Μ', '¶', '·', '¸', '¹', 'º', '»', '¼', '½', '¾', '¿', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'SS', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '÷', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'Ÿ', 'Ƒ', 'Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', '•', '…', '′', '″', '‾', '⁄', '℘', 'ℑ', 'ℜ', '™', 'ℵ', '←', '↑', '→', '↓', '↔', '↵', '⇐', '⇑', '⇒', '⇓', '⇔', '∀', '∂', '∃', '∅', '∇', '∈', '∉', '∋', '∏', '∑', '−', '∗', '√', '∝', '∞', '∠', '∧', '∨', '∩', '∪', '∫', '∴', '∼', '≅', '≈', '≠', '≡', '≤', '≥', '⊂', '⊃', '⊄', '⊆', '⊇', '⊕', '⊗', '⊥', '⋅', '⌈', '⌉', '⌊', '⌋', '〈', '〉', '◊', '♠', '♣', '♥', '♦',
        ]
    }
};

const renderDefaultItems = [
    'Smileys',
    'Peoples',
    'Animals',
    'Plants',
    'Nature',
    'Food',
    'Activity',
    'Travel',
    'Objects',
    'Symbols',
    'Currency',
    'Arrows',
    'Html'
];

class Icons extends React.Component
{

    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);
        this.changeTab = this.changeTab.bind(this);

        this.state = {
            /**
             * App
             */
            icons: defaultIcons,
            /**
             * User
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-icons',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            iconsType: (props.iconsType && typeof '8' == typeof props.iconsType) ? props.iconsType : 'Smileys',
            callback: (props.callback && 'function' == typeof props.callback) ? props.callback : undefined,
            displayTabs: (typeof true == typeof props.displayTabs) ? props.displayTabs : true,
            renderItems: (props.renderItems && typeof [] == typeof props.renderItems) ? props.renderItems : renderDefaultItems,
            translations: (props.translations && typeof {} == typeof props.translations) ? props.translations : undefined,
            custom: (props.custom && typeof [] == typeof props.custom) ? props.custom : undefined,
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['defaultClass', 'id','callback', 'displayTabs', 'renderItems', 'translations', 'custom'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-icons',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                callback: (props.callback && 'function' == typeof props.callback) ? props.callback : undefined,
                displayTabs: (typeof true == typeof props.displayTabs) ? props.displayTabs : true,
                renderItems: (props.renderItems && typeof [] == typeof props.renderItems) ? props.renderItems : renderDefaultItems,
                translations: (props.translations && typeof {} == typeof props.translations) ? props.translations : undefined,
                custom: (props.custom && typeof {} == typeof props.custom) ? props.custom : undefined,
            };
        }

        return null;
    }

    componentDidMount(){
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        const { custom, icons } = this.state;
        let addedItems = 0;

        if(custom && typeof [] == typeof custom && custom.length){

            custom.map( object => {
                const { title, data } = object;
    
                if(title && typeof '8' == typeof title && data && typeof [] == typeof data && data.length){
                   
                    if(undefined == icons[title]){
                        icons[title] = object;
                        addedItems += 1;
                    }
                }
            });

            if(addedItems){
                this.setState({ icons });
            }
        }
    }

    /**
     * User callback
     */
    callback(event, icon) {
        const { callback } = this.state;

        if (callback && 'function' == typeof callback) {
            (callback)(event, icon);
        }
    }

    changeTab(iconsType) {
        this.setState({ iconsType });
    }

    render() {
        const { addClass, id, defaultClass, icons, displayTabs, iconsType, renderItems, translations } = this.state;

        return (
            <div className={`${defaultClass} ${addClass}`} id={id}>
                {
                    displayTabs &&
                    <div className="tabs">
                        {
                            renderItems.map((name, i) => {
                                if (undefined !== icons[name]) {
                                    const { title } = icons[name];
                                    let displayTitle = icons[name].title;

                                    if(translations && undefined !== translations[name]){
                                        displayTitle = translations[name];
                                    }

                                    let iconsCls = (iconsType == title) ? `single-tab active` : 'single-tab';

                                    if (i == renderItems.length - 1) {
                                        iconsCls += ' single-tab-last';
                                    }

                                    return (
                                        <div
                                            className={iconsCls}
                                            key={uuid()}
                                            onClick={() => this.changeTab(title)}
                                        >
                                            {
                                                displayTitle
                                            }
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                }
                {
                    iconsType && undefined !== icons[iconsType] && undefined !== icons[iconsType].data &&
                    <div
                        key={uuid()}
                        className="content"
                    >
                        {
                            icons[iconsType].data.map(i => {

                                return (
                                    <span
                                        className='single-icon'
                                        key={uuid()}
                                        onClick={(e) => this.callback(e,i)}
                                    >
                                        {
                                            i
                                        }
                                    </span>
                                )
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Icons;
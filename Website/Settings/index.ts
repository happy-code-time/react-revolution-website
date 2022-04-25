const SETTINGS = {
    CONTAINER: {
        header: {
            height: 70
        },
        sidebar: {
            width: 360
        }
    },
    BREAKPOINTS: {
        sm: 575,
        md: 768,
        default: 1024,
        compact: 1400,
        large: 1800,
        adminLte: {
            md: 991
        }
    },
    APP: {
        food: {
            itemsPerPage: 12
        },
        recipie: {
            itemsPerPage: 12
        },
        search: {
            itemsPerPage: 6
        }
    },
    COLORS: {
        recipie: {
            basket: {
                default: 'rgb(122,122,122)',
                selected: '#f8b195'
            }
        }
    },
    SVG: {
        COLOR: {
            WHITE: 'rgb(255,255,255)',
            RED: '#FF4456',
            DARK: 'rgb(55,55,55)',
            HEADER_ITEM: '#385898#',
            GRAY: '#c2c7d0'
        },
        WIDTH: {
            XXXS: 6,
            XXS: 12,
            XS: 16,
            S: 22,
            M: 24,
            L: 26,
            XL: 32,
            XXL: 45,
            CUSTOM_64: 64,
            CUSTOM_84: 84,
            CUSTOM_128: 128
        }
    }
};

export default SETTINGS;

const version = '5.2.0';

const appName = `React Revolution`;

const appNameShort = `React Revolution`;

const author = `David Janitzek`

const host = ('dev' == process.env.MODE) ? process.env.HOST_DEV : process.env.HOST_PROD;

export {
    author,
    version,
    appName,
    appNameShort,
    host
};

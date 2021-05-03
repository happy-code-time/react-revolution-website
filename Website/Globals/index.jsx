const version = '6.0.2';

const appName = `React Revolution`;

const appNameShort = `React Revolution`;

const host = ('dev' == process.env.MODE) ? process.env.HOST_DEV : process.env.HOST_PROD;

export {
    version,
    appName,
    appNameShort,
    host
};

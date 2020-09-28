const version = 'v1.1.7';

let host = 'https://react-revolution.j.pl/';

if('dev' == process.env.MODE){
    host = 'http://localhost:3000/';
}

export {
    version,
    host
};
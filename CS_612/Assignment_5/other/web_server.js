const http = require('http');

/*
const serverObj = http.createServer();

serverObj.on('connection', (socket) => {
    console.log('new connection established');
});

serverObj.listen(3333);

console.log('Started listening on 3333 port');

*/

var jsonD = {
    name: 'Kautilya',
    place: 'NY',
    number: '720',
    car: 'Tesla Roadster',
}


// different method

const serverObj = http.createServer((req, res) => {
    //Creating server for listening
    console.log('Server created, tinkering some bits');
    if (req.url === '/') {
        res.write('Hello RES')
        res.end();
    }

    if (req.url === '/api') {
        res.write('Data given for member', JSON.stringify(jsonD));
        res.write(JSON.stringify([1, 3, 5]));
        res.end();
    }

    if (req.url === '/kautilya') {
        res.write('Data given for member', jsonD);
        res.end();
    }
});

serverObj.on('connection', (socket) => {
    console.log('new connection established');
});

serverObj.listen(3333);

console.log('Started listening on 3333 port');

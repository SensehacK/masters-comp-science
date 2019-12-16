// import { EventEmitter } from "events";
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        // sending log message
        console.log('Hi ' + message);

        // Raise an event
        this.emit('Kautilya', { id: 7, name: 'KLS' });
    }



}




module.exports = Logger;
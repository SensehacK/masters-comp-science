
const EventEmitter = require('events')

// Trying Emitter and events

const Logger = require('./logger');
const logger = new Logger();

// Listening an event
logger.on('Kautilya', (args) => {
    console.log('Event Listened', args);
})
logger.log('SensehacK');

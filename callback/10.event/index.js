const eventEmiiter = require('events');
const { EventEmitter } = require('stream');


const myEmitter = new EventEmitter();

myEmitter.on('event', (message) => { 
  console.log(`An event occurred! Message: ${message}`);
});

myEmitter.emit('event', 'Hello, World!');
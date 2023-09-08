const EventEmitter = require('events');

// Create an event emitter instance
const myEmitter = new EventEmitter();

// Define an event listener
myEmitter.on('myEvent', (data) => {
    setTimeout(() => {
  console.log('Event occurred with data:', data.message);
    }, 2000);
});

// Emit the 'myEvent' event with data
myEmitter.emit('myEvent', { message: 'Hello, world!' });
console.log("this is working")
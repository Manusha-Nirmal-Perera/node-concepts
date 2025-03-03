const EventEmmiter = require('events');

const myFirstEmmiter = new EventEmmiter();

// register a listener
myFirstEmmiter.on('greet', (name) => {
    console.log(`Hello ${name}`)
})

myFirstEmmiter.emit("greet", "Nirmal")
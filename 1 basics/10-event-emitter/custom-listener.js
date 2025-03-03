const EventEmmiter = require('events');

class MyCustomEmmiter extends EventEmmiter{
    constructor() {
        super()
        this.greeting = "Hello "
    }

    greet(name){
        this.emit("greeting", `${this.greeting}, ${name}`)
    }
}

const myCustomEmmiter= new MyCustomEmmiter();

myCustomEmmiter.on("greeting", (input)=>{
    console.log(input)
})

myCustomEmmiter.greet("Nirmal");
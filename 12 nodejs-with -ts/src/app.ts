console.log("Hello nodejs from ts");


function getName(name: string) {
    return name;
}

console.log(getName("Nirmal"));


//  basic types

let isDone: Boolean = false

let num: number = 100;

let str: string = "Nirmal"

let ist: number[] = [1, 2, 3]

let products1: string[] = ["pr-01", "pr-02", "pr-03"]
// or
let products2: Array<string> = ["pr-01", "pr-02", "pr-03"]


let randomVal: any = 4;
randomVal = "nirmal"
randomVal = true
randomVal = []

let xyz: undefined = undefined
let yz: null = null

enum Color {
    Red, Green, Blue
}

let d: Color = Color.Green

//  tuple
let abc : [string, number] = ["aa", 1]

// interfaces

// creating a user with the following propeties
// user -> name, id, email (optional), createdAt (readonly)
interface User {
    name: String;
    id : number,
    email?: string,
    readonly createdAt: Date
}

const user : User = {
    name: "Nirmal",
    id: 1,
    createdAt: new Date()
}

//  types
type Product = {
    title: string;
    price : number;
}

const product : Product = {
    title: "pr-01",
    price : 100
}
const { log } = require("console")
const fs = require("fs")
const path = require("path")


const dataFolder = path.join(__dirname, "data")

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder)
}

const filePath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filePath, "Hello from node");

const readContentFromFile = fs.readFileSync(filePath, 'utf8');
console.log("Read content: " + readContentFromFile);

fs.appendFileSync(filePath, '\nThis is a new line');
const readContentFromFile2 = fs.readFileSync(filePath, 'utf8')
console.log("Read content: " + readContentFromFile2)


// Async way of creating file
const asyncFilePath = path.join(dataFolder, "async-ex.txt");
fs.writeFile(asyncFilePath, "Hello, async", (error) => {
    if (error) {
        throw error;
    }
    console.log("async file created");

    fs.readFile(asyncFilePath, "utf8", (err, data)=>{
        console.log("Async file content: " + data);

        fs.appendFile(asyncFilePath, "\nThis is a new line", (err)=>{
            if(err) throw err;
            console.log("New line added to async file");

            fs.readFile(asyncFilePath, "utf8", (err, updatedData)=>{
                console.log("Async file updated content: " + updatedData);
            })
        })
    })
})
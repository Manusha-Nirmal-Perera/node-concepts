const fs = require('fs')

fs.readFile("7-callbacks/input.txt", 'utf8', (err, data)=>{
    if(err){
        console.error("Error reading file", err);
        return;
    }
    const modifyFileData = data.toUpperCase()
    
    fs.writeFile("7-callbacks/output.txt", modifyFileData, (err, data)=>{
        if(err){
            console.error("Error writing file", err);
            return;
        } 

        console.log("data wriiten to the new file: ")

        fs.readFile("7-callbacks/output.txt", 'utf8', (err, data)=>{
            if(err){
                console.error("Error reading file", err);
                return;
            }
            console.log(data)
        })
    })
})
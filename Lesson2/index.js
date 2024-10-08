//import fs module from node
const fs = require('fs');

//create file: writeFile() methods overwrite the previous text

fs.writeFile('demo.txt', 'this is dummy text', (err)=>{
    if(err) console.log(err)
        else console.log('Successfully created')
})



//appendFile() method adds new text with the previous text
/*
fs.appendFile('demo.txt', 'I am 24 years old. ', (err)=>{
    if(err) console.log(err)
        else console.log('successfully added text')
})
*/


// readFile() method reads the data from the file
/*
fs.readFile('demo.txt', 'utf-8', (err, data)=>{
    if(err) console.log(err)
        else console.log(data)
})
*/


//checking file exist or not
/*
fs.exists('demo.txt', (result)=>{
    if(result) console.log('Found')
        else console.log('Not found')
})
*/

// delete file

// fs.unlink('demo.txt', (err)=>{
//     if(err) console.log(err)
//         else console.log('Delete successful')
// })


//rename file
/*
fs.rename('demo.txt', 'default.txt', (err)=>{
    if(err) console.log(err)
        else console.log('Successful')
})
*/
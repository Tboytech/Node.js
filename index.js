//
// fs.unlink(`input.txt`, function(err){
//     if (err) {
//         return console.log(object);
//     }
//     console.log("Directory created successfully");
// })




const fs = require("fs");

const data = fs.readFileSync("./text/data.txt");
fs.writeFile("./text/data.txt", 'just wrote this', (err, data)=>{
    if (err) {
        console.log(err);
    }
    console.log("file written successfully");
})

fs.readFile("./text/data.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString(), "async");
});

// console.log(data.toString());


console.log("Program as ended");

fs.mkdir(`./test`, function(err){
    if (err) {
        return console.log(err);
    }
    console.log("file created successfully");
})

const fs = require('fs');

const string = '[Sobre Node.js - Documentação oficial](https://nodejs.org/pt-br/about/)'
const regex = string.match(/\[(.*)\](\(.*\))/gm);
console.log(regex)

// const rege = (text) => {
//   regex.exec(text);
//   return hue[1]
// }

// console.log(
//   rege('[Sobre Node.js - Documentação oficial](https://nodejs.org/pt-br/about/)')
// );


const reading = path => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, "utf-8", function(err, data) {
      if (err) {
        console.error("Could not open file: %s", err);
        reject(err);
        process.exit(1);

      } else {
        resolve(data);
        
      }

       console.log(data);
       
    })
  );
};





module.exports = reading; 


// const mdLinks = require("md-links");
// neste arquivo exportarei o mdlinks
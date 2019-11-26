const fs = require("fs");

const mdLinks = (path) => {
  const links = /\[(.*)\](\(.*\))/gm;
  return new Promise((resolve, reject) => {

    if (!path) {
      reject("Deve conter um path");
    }
      
    fs.readFile(path, "utf-8", function(err, data) {
     
      const string = data.match(links);
      const result = string.map(el => {
        const match = el.match(/\[(.*)\]\((.*)\)/);
        return { href: match[2], text: match[1] };
      });
      resolve(result);
        
    });
  }
  );
};

module.exports = mdLinks; 


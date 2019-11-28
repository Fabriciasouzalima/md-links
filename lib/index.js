const fs = require("fs");

//const getValidation = require('./modules/validate');

const mdLinks = (path, option) => {
  const links = /\[(.*)\](\(.*\))/gm;
  return new Promise((resolve, reject) => {

    if (!path) {
      reject("Deve conter um parametro");
    }
      
    fs.readFile(path, "utf-8", function(err, data) {
      
      const string = data.match(links);
      const result = string.map(el => {
        const match = el.match(/\[(.*)\]\((.*)\)/);
        return { href: match[2], text: match[1] };
      });
      //If verificar option - se option validate true ... testa o link e continua o caminho ... else 
      resolve(result);
        
    });
  }
  );
};

module.exports = mdLinks; 


const fs = require("fs");
const fetch = require("node-fetch");

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
      if (option) {
        const getValidation = result.map(element => {
          return fetch(element.href).then(response => {
            element.status = response.statusText;
          });
        });
        Promise.all(getValidation).then(() => resolve(result));
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = mdLinks; 


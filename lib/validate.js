const fetch = require("node-fetch");
const path = require("path");

const getValidation = (arr) => {
  arr.forEach(element => {
    let link = element.href;
    fetch(link)
      .then((link) => {
        link.url;
        link.statusText;
        console.log (`{ href: ${link.url}
  status: ${link.statusText}
  File: ${path.resolve()} }`);
      });
  });
};

module.exports = getValidation;

#!/usr/bin/env node

const mdLinks = require("./index.js");
const path = process.argv[2];
const option= process.argv[3];

mdLinks(path, option)
  .then(result => {
    result.forEach(element => {
      if (option) {
        console.log('\n',element.href,'\n', element.status,'\n', element.text);
      } else {
        console.log('\n',element.href,'\n', element.text);
      }
    });

  })
  .catch(console.error);
  
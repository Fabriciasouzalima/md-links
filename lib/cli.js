#!/usr/bin/env node

const mdLinks = require("./index.js");
const path = process.argv[2];
const option= process.argv[3];

mdLinks(path, option)
  .then(result => {
    result.forEach(element => {
      if (option) {
        console.log(element.href, element.status, element.text);
      } else {
        console.log(element.href, element.text);
      }
    });

  })
  .catch(console.error);
  
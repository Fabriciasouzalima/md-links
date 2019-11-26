const fs = require('fs');

const mdLinks = (path) => {
  const links = /\[(.*)\](\(.*\))/gm
  const breakText= /\[/;
  const breakHref= /\)/;
  return new Promise((resolve, reject) =>
    fs.readFile(path, "utf-8", function(err, data) {
      const string = data.match(links);
      if (err||!string) {

        reject(err);

      } else {
        
        const result = string.map(el => {
          const splited = el.split('](');
          const text = splited[0].replace(breakText, '');
          const href = splited[1].replace(breakHref,'');

          return { href, text };
        });
        resolve(result);
        // console.log(result)

      }
      
    })
  );
};


module.exports = mdLinks; 


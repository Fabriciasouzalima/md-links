# md-links
Projeto utilizando - JS Vanilla  - Node.JS

[Sobre Node.js - Documentação oficial](https://nodejs.org/pt-br/about/)

# Extrair links de Markdown v.1.0.0

**Esta biblioteca se destina à extrair links de arquivos markdown.**  

## Como instalar:

$  npm install -g Fabriciasouzalima/md-links

Se for mostrado um erro de permissão, tente usar sudo (talvez você precise de permissões de administrador, dependendo da sua instalação do node).

$ sudo npm install -g aline-camargo/SAP003-md-links

## Como utilizar:

## No Javascript:

    const mdLinks = require(".caminho-pasta-instalação/lib/index.js");

    mdLinks("./exemplo.md", { validate: true })
    .then(links => {
    if(validate) {
      // => [{ href, text, status }]
    } else {
      // => [{ href, text }]
    }
  })
  .catch(console.error);
    

## No terminal:

 $ md-links ./lib/tests/text.md 
 
retorno esperado
 https://pt.wikipedia.org/wiki/Markdown 
 Markdown

https://nodejs.org/ 
              Node.js

https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg 
              md-links;

## Ferramentas utilizadas

* Node.js
* fs
* node-fetch
* Regex
* eslint 
* Testes implementados com jest

#### versão 1.0.0 (released)

-   funcionalidades: extração de links em arquivos markdown.
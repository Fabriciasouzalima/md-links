# md-links
Projeto utilizando - JS Vanilla  - Node.JS

[Sobre Node.js - Documentação oficial](https://nodejs.org/pt-br/about/)

# Extrair links de Markdown v.1.0.0

**Esta biblioteca se destina à extrair links de arquivos markdown.**  

## Como instalar:

$  npm install -g Fabriciasouzalima/md-links

## Como utilizar:

    > const linksMd = require("mdLinks");
    > console.log(linksMd.getLinksFromMd('ut aliquip ex ea commodo consequat. [foo](http://foo.com) Duis 
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'))
    > // returns [{ href:  'http://foo.com', text:  'foo' }];

## roadmap oficial do projeto

#### versão 1.0.0 (released)

-   funcionalidades: extração de links em arquivos markdown.
// const chai = require('chai');
// const expect = chai.expect;
// const piece = require('../index');
// const fullStr = `# Lorem ipsum
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
// sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore)
// et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua.
// Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
// ut aliquip ex ea commodo consequat.        
// [foo](http://foo.com)        
// Duis aute irure dolor in reprehenderit in voluptate velit esse
// cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
// non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
// const fullArray = [ 
//                 { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//                 { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//                 { href: 'http://foo.com', text: 'foo' }
//                     ];
// const oneLinkStr = `ut aliquip ex ea commodo consequat.        
// [foo](http://foo.com)        
// Duis aute irure dolor in reprehenderit in voluptate velit esse
// cillum dolore eu fugiat nulla pariatur.`
// const oneLinkArray = [ 
//         { href: 'http://foo.com', text: 'foo' }
//         ];
// const noLinkStr = `Duis aute irure dolor in reprehenderit in voluptate velit esse
// cillum dolore eu fugiat nulla pariatur.`
// const noLinkArray = [];

// describe('getLinksFromMd', () => {
//     it(`Deveria retornar 3 links`, () => {
//         expect(piece.getLinksFromMd(fullStr)).to.eql(fullArray);
// });
// it(`Deveria retornar 1 link`, () => {
//     expect(piece.getLinksFromMd(oneLinkStr)).to.eql(oneLinkArray);
// });
// it(`Deveria retornar 0 links`, () => {
//     expect(piece.getLinksFromMd(noLinkStr)).to.eql(noLinkArray);
// });
// });
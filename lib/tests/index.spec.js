const mdLinks = require("../index.js");

const array = [ 
  { href: "https://pt.wikipedia.org/wiki/Markdown", text: "Markdown" },
  { href: "https://nodejs.org/", text: "Node.js" },
  { href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg", text: "md-links" }
];

const array2 = [ 
  { href: "https://pt.wikipedia.org/wiki/Markdown", text: "Markdown", status: "OK" },
  { href: "https://nodejs.org/", text: "Node.js", status: "OK" },
  { href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg", text: "md-links", status: "OK" }
];

describe(mdLinks, () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("should return 3 links", (done) => {
    mdLinks("./lib/tests/text.md")
      .then(r => {
        expect(r).toEqual(array);
        done();
      });
  });

  it("should be an error", () => {
    expect(mdLinks()).rejects.toEqual("Deve conter um parametro");
  });

  it("Should return status", (done) =>{
    mdLinks("./lib/tests/text.md", true).then(r => {
      expect(r).toEqual(array2);
      done();
    });
  });
  
}); 
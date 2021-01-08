var selector = require("testcafe").selector;
var ClientFunction = require("testcafe").ClientFunction;


    const getWindowLocation = ClientFunction(() => navigator.javaEnabled());

fixture `Getting Started`
    .page `https://www.priceline.com`;

    test('My first test', async t => {

        console.log(getWindowLocation)

       // await setCookie();
      
    });
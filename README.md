# api_test

Project Description:

Node.js Framework used are: Mocha, chai, chai-http, chai-json-schema, mochawesome-report-generator

Instruction:

install mocha globally using: npm install -g mocha

install chai under dev dependencices: npm install chai --save-dev

install chai-http under dev dependencices: npm install chai-http --save-dev

install chai-json-schema under dev dependencices: npm install chai-json-schema --save-dev

install  chai-asserttype under dev dependencices: npm install chai-asserttype --save-dev

install mochawesome reporting tool: npm i mochawesome-report-generator


There are three 3 javascript files i have created:
1. Test.js: this file has all the test cases for api_testing.

2.apiData.js : this file will be used as a data repository to store different types of data as per our business requirements and all data call will be happening from this file to test.js

3.jsonSchema.js: this file will be used as a data repository to store different data schema getting used in our system.

Run command:

CMD or terminal run: npm test

Test Report is generated in html format. please check mochawesome-report-> mochawesome.html file for test report.


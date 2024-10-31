# api_test

Project Description:

Node.js Framework used are: Mocha, chai, chai-http, chai-json-schema

Instruction:

install mocha globally using: npm install -g mocha

install chai under dev dependencices: npm install chai --save-dev

install chai-http under dev dependencices: npm install chai-http --save-dev

install chai-json-schema under dev dependencices: npm install chai-json-schema --save-dev

install  chai-asserttype under dev dependencices: npm install chai-asserttype --save-dev


There are three 3 javascript files i have created:

1. Test.js: this file has all the test cases for api_testing. To ease the maintainability we can sorted out test cases into different folder according to the http requests(GET, POST, DELETE, PUT) or according the system modules

2.apiData.js : this file will be used as a data repository to store different types of data as per our business requirements and all data call would be happening from this file to test.js

3.jsonSchema.js: this file will be used as a data repository to store different data schema getting used in our system.

Test Scenarios coverage:

1. GET and POST response json schema validation
2. User record update using id
3. User record delete using id
4. User seach using id
5. Error valiadations
6. Response payload for POST which includes expected properties/field
7. Response payload for GET
8.  Response payload for GET

Run command:

CMD or terminal run : npm test


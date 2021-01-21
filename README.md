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

2.apiPostData.js : this file will be used as a data repository to store different types of data as per our business requirements and all data call would be happening from this file to test.js

3.jsonSchema.js: this file will be used as a data repository to store different data schema getting used in our system.

Test Scenarios coverage:

1. GET and POST response json schema validation
2. User record update using id
3. User record delete using id
4. User seach using id
5. Error valiadations
6. Response payload for POST which includes expected properties/field, not null/blank contstarints, and create date, datetype for ID
7. Response payload for GET

Run command:

Go to the folder folder Leanspace->api_test which has test.js file and in the CMD or terminal run : npm test

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------



UI Test 

Project Description:

Node.js Framework used are:TestCafe

Instruction:
install testcafe globally using: npm install -g testcafe 

File Structure:

I have followed Page Object Model and have tried to maintain the hierarchy displayed at amazon.in 

Page folder: This folder will contains all the {page}.js file which would have all the elements present on that page.

Test Data Folder: This folder will have js files containing the test data which would like to pass for our test scenarios. for example, I have added the user filter for shoes like the company, and size user wants to select and then these filters would be passed on to the Product filter js files.

Product Filter: This folder will have js files which would get filter data from test Data and later it will apply filters so that it could be used directly into our test

Util folder: This folder will have js files which would need to perform common actions on webpages.

Test : This folder will have all test js files. 


Run command:

Go to the folder folder Leanspace->UI_test which has test.js file and in the CMD or terminal run: testcafe chrome test.js --skip-js-errors -q. 

note: You can add any browser you have installed locally on your system for example for firefox : testcafe firefox test.js --skip-js-errors -q


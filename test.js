var chai = require("chai");
var chaihttp = require("chai-http");
var expect = require("chai").expect;
const asserttype = require('chai-asserttype');
var dataSchema  = require('./jsonSchema.js');
var postData  = require('./apiPostData.js');

chai.use(chaihttp);
chai.use(require('chai-json-schema'));

chai.use(asserttype);
var baseURL  = "https://reqres.in";


// JSON Schema validation
describe("API tests for reqres.in ", function(){
it("Verify the 'POST' response payload follows json schema for '/api/users' route", function(done){
    chai.request(baseURL)
    .post('/api/users')
    .send(postData.testDataId1)
    .end(function(err,res){
     expect(res.body).to.be.jsonSchema(dataSchema.jsonSchemaCreateUser);
        if(err){
            done(err);
            }
        done();
    })
 });



 it("Verify the GET response follows json schema for '/api/users' route ", function(done){
    chai.request(baseURL)
    .get('/api/users')
    .end(function(err,res){
        expect(res.body).to.be.jsonSchema(dataSchema.getUserListSchema);
        if(err){
            done(err);
            }
        done();
    })
 });

 //------------------------------------------------------------------------------------

 it("Verify the GET response status code for '/api/users' route ", function(done){
        chai.request(baseURL)
        .get('/api/users')
        .end(function(err,res){
            expect(res.statusCode).to.equal(200)
            if(err){
                done(err);
                }
            done();
        })
     });


it("verify the 'POST' response status code for '/api/users' route ", function(done){
    chai.request(baseURL)
    .post('/api/users')
    .send( postData.testDataId1)
    .end(function(err,res){
        expect(res.statusCode).to.equal(201)
        if(err){
            done(err);
            }
        done();
    })
 });

 it("Verify the 'POST' response payload have all the required properties for '/api/users' route", function(done){
    chai.request(baseURL)
    .post('/api/users')
    .send( postData.testDataId1)
    .end(function(err,res){
        
        expect(res.body).to.have.property('name');
        expect(res.body).to.have.property('job');
        expect(res.body).to.have.property('id');
        expect(res.body.id).to.be.number();
        expect(res.body).to.have.property('createdAt');
        if(err){
            done(err);
            }
        done();
    })
 });

 it("Verify the 'POST' response payload's required properties are not null/blank for '/api/users' route", function(done){
    chai.request(baseURL)
    .post('/api/users')
    .send(postData.testDataId1)
    .end(function(err,res){
        console.log(res.body);
        expect(res.body.name).not.equal(null ||"");
        expect(res.body.job).not.equal(null || "");
        expect(res.body.id).not.equal(null || "");
        expect(res.body.createdAt).not.equal(null || "");
        if(err){
            done(err);
            }
        done();
    })
 });


it("Verify the 'POST' response payload's createdAt property has current date value for '/api/users' route", function(done){
    chai.request(baseURL)
    .post('/api/users')
    .send( postData.testDataId1)
    .end(function(err,res){
        var dateObj = new Date();
        var year = dateObj.getFullYear();
        var month  = (dateObj.getMonth() + 1).toString();
        month = month < 9 ? '0'+month : month;
        var day  = (dateObj.getDate()).toString();
        day = day < 9 ? '0'+ day : day;
        var currDate = year + "-" + month + "-" +day;
        var dateString =JSON.stringify(res.body.createdAt);
        var createdDate = dateString.substring(1,11);
        expect(createdDate).equal(currDate);
        if(err){
            done(err);
            }
        done();
    })
 });

 it("Verify the error validation when job field is missing", function(done){
    chai.request(baseURL)
    .post('/api/users')
    .send(postData.testDataId1.name)
    .end(function(err,res){
        console.log("!mock error!");
        if(err){
            done(err);
            }
        done();
    })
 });

 it("Verify the error validation when user name is missing", function(done){
    chai.request(baseURL)
    .post('/api/users')
    .send( postData.testDataId1.job)
    .end(function(err,res){
        console.log("!mock error!");
        if(err){
            done(err);
            }
        done();
    })
 });

 it("Verify get user by id ", function(done){
    chai.request(baseURL)
    .post('/api/users')
    .send(postData.testDataId1)
    .end(function(error,res){
        let username = res.body.name;
        let job = res.body.job;
        let getUserID = res.body.id;

    chai.request(baseURL)
        .get('/api/users/'+getUserID)
        .end(function(err,response){
         expect(response.body.name).to.equal(username);
           expect(response.body.job).to.equal(job);
           if(err){
            done(err);
            }
        done();
    })
    
});

 });

it("Verify user record gets updated by id ", function(done){
    chai.request(baseURL)
    .post('/api/users')
    .send(postData.testDataId1)
    .end(function(error,res){
        let getUserID = res.body.id;

       chai.request(baseURL)
        .put('/api/users/'+getUserID)
        .send( {
            "name": "Space force",
            
            "job": "QA Engineer"
        })
        .end(function(err,response){
           expect(response.statusCode).to.equal(200)
           expect(response.body).to.have.property('name').eql("Space force");
           if(err){
            done(err);
            }
        done();
    })
    

});

});

it("Verify user record gets deleted by id ", function(done){
   
    chai.request(baseURL)
    .post('/api/users')
    .send( postData.testDataId1)
    .end(function(error ,res){
        let getUserID = res.body.id;
        chai.request(baseURL)
        .delete('/api/users/'+getUserID)
        .end(function(err,response){
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.property('name').eql("Space force");
        if(err){
            done(err);
            }
         })

})

});

});
        
    


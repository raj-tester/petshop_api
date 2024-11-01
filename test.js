var chai = require("chai");
var chaihttp = require("chai-http");
var expect = require("chai").expect;
const asserttype = require('chai-asserttype');
var dataSchema  = require('./jsonSchema.js');
var postData  = require('./apiTestData.js');

chai.use(chaihttp);
chai.use(require('chai-json-schema'));

chai.use(asserttype);
var baseURL  = "https://petstore.swagger.io/v2";

let pet_id = 0;
// JSON Schema validation
describe("API tests for pet management ", function(){
it("Verify the 'POST' response payload follows json schema for '/pet' route", function(done){
    chai.request(baseURL)
    .post('/pet')
    .send(postData.createPet)
    .end(function(err,res){
     pet_id = res.body.id
      console.log(res.body)
     expect(res).to.be.jsonSchema(dataSchema.createPet.paths["/pet"]);
        if(err){
            done(err);
            }
        done();
    })
 });
});
    it("Verify the 'POST' response code 200 for '/pet' route", function(done){
        chai.request(baseURL)
        .post('/pet')
        .send(postData.createPet)
        .end(function(err,res){
         expect(res.statusCode).to.equal(200)
         expect(res)
            if(err){
                done(err);
                }
            done();
        })
     })

     it("Verify the 'POST' response code 405 for '/pet' route", function(done){
        chai.request(baseURL)
        .post('/pet')
        .send(postData.invalidinput)
        .end(function(err,res){
         expect(res.statusCode).to.equal(405)
         expect(res)
            if(err){
                done(err);
                }
            done();
        })
     })
 

        it("Verify the 'POST' response data for '/pet' route", function(done){
            chai.request(baseURL)
            .post('/pet')
            .send(postData.createPet)
            .end(function(err,res){
             expect(res.body).to.have.property('id');
             expect(res.body).to.have.property('category');
             expect(res.body).to.have.property('name');
             expect(res.body).to.have.property('photoUrls');
             expect(res.body).to.have.property('status');
                if(err){
                    done(err);
                    }
                done();
            })
         });
    
    
        
            it("Verify the 'POST' response data type for '/pet' route", function(done){
                chai.request(baseURL)
                .post('/pet')
                .send(postData.createPet)
                .end(function(err,res){
                expect(res.body.id).to.be.a('integer');
                expect(res.body.category).to.be.a('object');
                expect(res.body.name).to.be.a('string');
                expect(res.body.photoUrls).to.be.a('array');
                expect(res.body.tags).to.be.a('array');
                expect(res.body.status).to.be.a('string');

                    if(err){
                        done(err);
                        }
                    done();
                })
             });


   it("Verify the GET response follows json schema for '/pet/pet_id' route ", function(done){
    chai.request(baseURL)
    .get(`/pet/${postData.createPet.id}`)
    .end(function(err,res){
    expect(res.body).to.be.jsonSchema(dataSchema.createPet.paths["/pet/{petId}"]);
        if(err){
            done(err);
            }
        done();
    })
 });

    it("Verify the 'GET' response code 200 for '/pet/{pet_id}' route", function(done){
        chai.request(baseURL)
        .get(`/pet/${postData.createPet.id}`)
        .end(function(err,res){
         expect(res.statusCode).to.equal(200)
         expect(res)
            if(err){
                done(err);
                }
            done();
        })
     })

     it("Verify the 'GET' response code 400 for '/pet/{pet_id}' route", function(done){
        chai.request(baseURL)
        .get('/pet/9999999999999')
        .end(function(err,res){
         expect(res.statusCode).to.equal(404)
         expect(res)
            if(err){
                done(err);
                }
            done();
        })
     })

    it("Verify the 'GET' response data for '/pet/{pet_id}' route", function(done){
        chai.request(baseURL)
        .get(`/pet/${postData.createPet.id}`)
        .end(function(err,res){
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('category');
            expect(res.body).to.have.property('name');
            expect(res.body).to.have.property('photoUrls');
            expect(res.body).to.have.property('status');
               if(err){
                   done(err);
                   }
               done();
           })
        });

        it("Verify the 'GET' response type for '/pet/{pet_id}' route", function(done){
            chai.request(baseURL)
            .get(`/pet/${postData.createPet.id}`)
            .end(function(err,res){
                expect(res.body.id).to.be.a('integer');
                expect(res.body.category).to.be.a('object');
                expect(res.body.name).to.be.a('string');
                expect(res.body.photoUrls).to.be.a('array');
                expect(res.body.tags).to.be.a('array');
                expect(res.body.status).to.be.a('string');
                   if(err){
                       done(err);
                       }
                   done();
               })
            });

        it("Verify the PUT response follows json schema for '/pet' route ", function(done){
                chai.request(baseURL)
                .put(`/pet`)
                .send(postData.editPet)
                .end(function(err,res){
                expect(res.body).to.be.jsonSchema(dataSchema.createPet.paths["/pet"]);
                    if(err){
                        done(err);
                        }
                    done();
                })
             });
        it("Verify the PUT response data with new data for '/pet' route ", function(done){
                chai.request(baseURL)
                .put(`/pet`)
                .send(postData.editPet)
                .end(function(err,res){
                expect(res.body.status).to.equal("pending");
                    if(err){
                        done(err);
                        }
                    done();
                })
             });
        it("Verify the 'PUT' response data for '/pet' route", function(done){
                chai.request(baseURL)
                .put(`/pet`)
                .send(postData.editPet)
                .end(function(err,res){
                    expect(res.body).to.have.property('id');
                    expect(res.body).to.have.property('category');
                    expect(res.body).to.have.property('name');
                    expect(res.body).to.have.property('photoUrls');
                    expect(res.body).to.have.property('status');
                       if(err){
                           done(err);
                           }
                       done();
                   })
                });
        it("Verify the 'Push' response type for '/pet/' route", function(done){
                    chai.request(baseURL)
                    .put(`/pet`)
                   .send(postData.editPet)
                    .end(function(err,res){
                        expect(res.body.id).to.be.a('integer');
                        expect(res.body.category).to.be.a('object');
                        expect(res.body.name).to.be.a('string');
                        expect(res.body.photoUrls).to.be.a('array');
                        expect(res.body.tags).to.be.a('array');
                        expect(res.body.status).to.be.a('string');
                           if(err){
                               done(err);
                               }
                           done();
                       })
                    });
        
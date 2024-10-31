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
        
 //------------------------------------------------------------------------------------

 /*it("Verify the GET response status code for '/api/users' route ", function(done){
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

});*/


    
    


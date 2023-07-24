const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');


describe('configuration tests', () => {
  let refract;
    
  beforeAll((done) => { 
    // Copy the test config to the root as the refractile.config.js
    execSync('bash -c \"cp ./configs/config1.js ./refractile.config.js\"');
    refract = require('refractile');
    done();
  }); 

  it('should throw a specific type of error when there is no accompanying module', () => { 
    let error; 
    let config;

    try { 
      config = require(path.resolve(__dirname, '../refractile.config.js'))
      console.log(config);            
      refract("nonexistent_module", "nonexistent_func")

    } catch (e) { 
      error = e
    }; 
    expect(error).not.toBe(null);
    expect(config).toStrictEqual({});
    expect(typeof error).toBe('object');
  });


    // Remove the test config after tests are run
  afterAll(
    (done) => {
      execSync('bash -c \"rm ./refractile.config.js\"');
      done();           
    }
  )

});


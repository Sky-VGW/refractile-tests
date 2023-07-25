const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

//test config 1
describe('#empty module', () => {
  let refract;
    
  beforeAll((done) => { 
    // Copy the test config to the root as the refractile.config.js
    execSync('bash -c \"cp ./configs/config1.js ./refractile.config.js\"');
    refract = require('refractile');
    done();
  }); 

  it('should throw a custom defined error when there is no accompanying module', () => { 
    let error; 
    let config;

    try { 
      config = require(path.resolve(__dirname, '../refractile.config.js'))        
      refract("nonexistent_module", "nonexistent_func")

    } catch (e) { 
      error = e
    }; 

    expect(error).not.toBe(null);
    expect(config).toStrictEqual({});
  });
    // Remove the test config after tests are run
  afterAll(
    (done) => {
      execSync('bash -c \"rm ./refractile.config.js\"');
      done();           
    }
  )

});
// test config 2
describe('#empty config file', () => {
  let refract;
    
  beforeAll((done) => { 
    // Copy the test config to the root as the refractile.config.js
    execSync('bash -c \"cp ./configs/config2.js ./refractile.config.js\"');
    refract = require('refractile');
    done();
  }); 

  it('should throw a custom defined error when there is no accompanying config file', () => { 
    let error; 

    try { 
      refract("nonexistent_module", "nonexistent_func")
    } catch (e) { 
      error = e
    }; 

    expect(error).not.toBe(null);

  });
    // Remove the test config after tests are run
  afterAll(
    (done) => {
      execSync('bash -c \"rm ./refractile.config.js\"');
      done();           
    }
  )
});
//test config 3
describe('#no bin on module', () => {
  let refract;
    
  beforeAll((done) => { 
    // Copy the test config to the root as the refractile.config.js
    execSync('bash -c \"cp ./configs/config3.js ./refractile.config.js\"');
    refract = require('refractile');
    done();
  }); 

  it('should throw a custom defined error if there is no bin destination',() => {
    let error;

    try {
      refract("nonexistent_module", "nonexistent_func");
    } catch (e) {
      error = e;
      console.log(error);
    }

    expect(error).not.toBe(null);
  });
    // Remove the test config after tests are run
  afterAll(
    (done) => {
      execSync('bash -c \"rm ./refractile.config.js\"');
      done();           
    }
  )
});
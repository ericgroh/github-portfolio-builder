var assert = require('assert');
var fs = require('fs');
var PortfolioBuilder = require('../src/index');

describe('Setup', function() {
  it('Should have .env file', function(){
    assert.equal(true, fs.existsSync('.env'));
  });

  it('.env should contain username variable', function() {
    assert.equal(false, process.env.USERNAME == null);
  })
});

describe('api', function() {
  it('Should return a not empty array of repos', function(){
    let repos = PortfolioBuilder.getRepos();
    assert.notEqual(0 , repos.lengh);
  });
});
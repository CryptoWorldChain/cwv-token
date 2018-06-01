var CWVToken = artifacts.require('./CWVToken.sol');
var CWVTokenKeeper = artifacts.require('./CWVTokenKeeper.sol');

module.exports = function (deployer) {
  deployer.deploy(CWVToken).then(function () {
    deployer.link(CWVToken, CWVTokenKeeper);
    deployer.deploy(CWVTokenKeeper, CWVToken.address);
  });
};

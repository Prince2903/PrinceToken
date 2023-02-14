var princeToken = artifacts.require("./princeToken.sol");

module.exports = function (deployer) {
  deployer.deploy(princeToken, 1000000);
};

var princeToken = artifacts.require("./princeToken.sol");
var princeTokenSale = artifacts.require("./princeTokenSale.sol");

module.exports = function (deployer) {
  deployer.deploy(princeToken, 1000000).then(function () {
    var tokenPrice = 1000000000000000;

    return deployer.deploy(princeTokenSale, princeToken.address, tokenPrice);
  });
};

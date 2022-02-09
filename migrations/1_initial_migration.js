const Migrations = artifacts.require("Migrations");
const MyNFTs = artifacts.require('MyNFTs.sol') // MyNFTs.sol 파일추가

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MyNFTs); // MyNFTs를 베포에 추가함
};

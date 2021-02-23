const DummyProxy = artifacts.require('./DummyProxy.sol');

module.exports = async function (deployer) {
	// Deploy all
	deployer.deploy(DummyProxy);
};

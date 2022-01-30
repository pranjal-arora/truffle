module.exports = function (contract, args, deployer) {
  return async function () {
    deployer.logger.log("Creating new instance of " + contract.contract_name);
    return contract.new.apply(contract, args);
  };
};

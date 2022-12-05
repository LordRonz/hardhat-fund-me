import { network } from 'hardhat';
import { DeployFunction } from 'hardhat-deploy/dist/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DECIMALS, developmentChains, INITIAL_ANSWER, networkConfig } from '../helper-hardhat-config';

const deployFunc: DeployFunction = async ({
  getNamedAccounts,
  deployments,
}: HardhatRuntimeEnvironment) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const {
    config: { chainId },
  } = network;

  const ethUsdPriceFeedAddress = networkConfig[network.name].ethUsdPriceFeed;

  if (developmentChains.includes(network.name)) {
    log('Local network detected, deploying mocks');
    await deploy('MockV3Aggregator', {
      contract: 'MockV3Aggregator',
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_ANSWER]
    });
    log('Mocks Deployed!');
    log('___________________________________________________');
  }
};

export default deployFunc;

deployFunc.tags = ['all', 'mocks'];

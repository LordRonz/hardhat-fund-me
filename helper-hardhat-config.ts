export type networkConfigItem = {
  ethUsdPriceFeed?: string;
  blockConfirmations?: number;
};

export type networkConfigInfo = {
  [key: string]: networkConfigItem;
};

export const networkConfig: networkConfigInfo = {
  localhost: {},
  hardhat: {},
  // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
  // Default one is ETH/USD contract on Kovan
  goerli: {
    ethUsdPriceFeed: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
    blockConfirmations: 6,
  },
};

export const DECIMALS = 8;
export const INITIAL_ANSWER = 200000000000;

export const developmentChains = ['hardhat', 'localhost'];

import { getNamedAccounts, ethers } from 'hardhat';

const main = async () => {
  const { deployer } = await getNamedAccounts();
  const fundMe = await ethers.getContract('FundMe', deployer);
  console.log('Funding Contract...');
  const transactionResponse = await fundMe.withdraw();
  await transactionResponse.wait(1);
  console.log('Got it back yo!');
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

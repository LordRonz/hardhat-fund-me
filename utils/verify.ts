import { run } from 'hardhat';

export const verify = async (contractAddress: string, args: string[]) => {
  console.log('Verifying contract...');
  try {
    await run('verify:verify', {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (
      e instanceof Error &&
      e.message.toLowerCase().includes('already verified')
    ) {
      console.log('Already Verified');
    } else {
      console.log(e);
    }
  }
};

export default verify;

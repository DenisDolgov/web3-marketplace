import useSWR from "swr";
import {useEffect} from "react";

const NETWORK_NAMES = {
  1: 'Ethereum Main Network',
  3: 'Ropsten Test Network',
  4: 'Rinkeby Test Network',
  5: 'Goerli Test Network',
  42: 'Kovan Test Network',
  56: 'Binance Smart Chain',
  1337: 'Ganache',
}

export const createUseNetwork = (web3, provider) => () => {
  const { mutate, ...res } = useSWR(web3 ? 'web3/network' : null, async () => {
    const chainId = await web3.eth.getChainId();

    return NETWORK_NAMES[chainId] ?? chainId;
  });

  useEffect(() => {
    provider && provider.on('chainChanged', chainId => mutate(NETWORK_NAMES[chainId] ?? chainId))
  }, [mutate]);

  return {
    network: {
      mutate,
      ...res,
    },
  };
}

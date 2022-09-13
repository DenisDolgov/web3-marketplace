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

const targetNetwork = NETWORK_NAMES[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID];

export const createUseNetwork = (web3, provider) => () => {
  const { data, mutate, ...res } = useSWR(web3 ? 'web3/network' : null, async () => {
    const chainId = await web3.eth.getChainId();

    return NETWORK_NAMES[chainId] ?? chainId;
  });

  useEffect(() => {
    provider && provider.on('chainChanged', chainId => mutate(NETWORK_NAMES[chainId] ?? chainId))
  }, [mutate]);

  return {
    mutate,
    data,
    target: targetNetwork,
    isSupported: data === targetNetwork,
    ...res,
  };
}

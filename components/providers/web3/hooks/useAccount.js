import {useEffect} from "react";
import useSWR from "swr";

const adminAddresses = ['0x5eda944caedd0d7904066eb9f0b71cb544eed0c54ead9a8255c5bf0b9d5630bb'];

export const createUseAccount = (web3, provider) => () => {
  const { mutate, data, ...rest } = useSWR(web3 ? 'web3/accounts' : null, async () => {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
  });

  useEffect(() => {
    provider && provider.on('accountsChanged', accounts => {
      mutate(accounts[0] ?? null);
    });
  }, [provider]);

  return {
    account: {
      isAdmin: data && adminAddresses.includes(web3.utils.keccak256(data)),
      mutate,
      data,
      ...rest
    }
  };
}

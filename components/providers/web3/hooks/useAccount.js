import {useEffect} from "react";
import useSWR from "swr";

const adminAddresses = ['0x02474a6fd4258c6aF32954aA3CdD94c4F0B318EA'];

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
      isAdmin: adminAddresses.includes(data),
      mutate,
      data,
      ...rest
    }
  };
}

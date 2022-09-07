import {useEffect} from "react";
import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then(res => res.json());

export const createUseAccount = (web3, provider) => () => {
  // const [account, setAccount] = useState(null);

  const { mutate, ...rest } = useSWR(web3 ? 'web3/accounts' : null, async () => {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
  });

  // useEffect(() => {
  //   const getAccount = async () => {
  //     const accounts = await web3.eth.getAccounts();
  //     setAccount(accounts[0]);
  //   }
  //
  //   web3 && getAccount();
  // }, [web3]);

  useEffect(() => {
    provider && provider.on('accountsChanged', accounts => {
      mutate(accounts[0] ?? null);
    });
  }, [provider]);

  return { account: { mutate, ...rest } };
}

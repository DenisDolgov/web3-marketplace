import {useHooks} from "@components/providers";

const enhanceHook = swrRes => {
  return {
    ...swrRes,
    hasInitialResponse: !!(swrRes.data || swrRes.error),
  };
}

export const useNetwork = () => {
  const res = enhanceHook(useHooks(hooks => hooks.useNetwork)());

  return { network: res };
}

export const useAccount = () => {
  const res = enhanceHook(useHooks(hooks => hooks.useAccount)());

  return { account: res };
}

export const useWalletInfo = () => {
  const { account } = useAccount();
  const { network } = useNetwork();

  return {
    account,
    network,
    canPurchaseCourse: !!(account.data && network.isSupported),
  };
}

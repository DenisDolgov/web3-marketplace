import { createUseAccount } from "@components/providers/web3/hooks/useAccount";
import { createUseNetwork } from "@components/providers/web3/hooks/useNetwork";

export const setupHooks = (...args) => {
  return {
    useAccount: createUseAccount(...args),
    useNetwork: createUseNetwork(...args),
  }
}

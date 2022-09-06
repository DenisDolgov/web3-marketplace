import { createUseAccount } from "@components/providers/web3/hooks/useAccount";

export const setupHooks = (...args) => {
  return {
    useAccount: createUseAccount(...args),
  }
}

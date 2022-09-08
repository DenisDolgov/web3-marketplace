import {useHooks} from "@components/providers";

export const useAccount = () => {
  return useHooks(hooks => hooks.useAccount)();
}

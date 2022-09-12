import {useHooks} from "@components/providers";

export const useNetwork = () => {
  return useHooks(hooks => hooks.useNetwork)();
}

import {EthRates, WalletBar} from "@ui/web3";
import {Breadcrumbs} from "@ui/common";
import {useWalletInfo} from "@components/hooks/web3";

const Header = () => {
  const { account, network } = useWalletInfo();

  return (
    <>
      <WalletBar
        address={account.data}
        network={network}
      />
      <EthRates />
      <div className="py-4 px-4 sm:px-6 lg:px-8 flex flex-row-reverse">
        <Breadcrumbs />
      </div>
    </>
  )
}

export default Header;

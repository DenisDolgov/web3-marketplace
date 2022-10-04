import { EthRates, WalletBar } from "@ui/web3";
import { Breadcrumbs } from "@ui/common";
import { useWalletInfo } from "@components/hooks/web3";

const LINKS = [{
  href: '/marketplace',
  text: 'Buy',
}, {
  href: '/marketplace/courses/owned',
  text: 'Owned',
}, {
  href: '/marketplace/courses/manage',
  text: 'Manage',
}]

export default function Header() {
  const { account, network } = useWalletInfo();

  return (
    <>
      <WalletBar
        address={account.data}
        network={network}
      />
      <EthRates />
      <div className="py-4 px-4 sm:px-6 lg:px-8 flex flex-row-reverse">
        <Breadcrumbs items={LINKS} />
      </div>
    </>
  )
}

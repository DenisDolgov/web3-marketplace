import { ActiveLink } from "@ui/common";
import { useWeb3 } from "@components/providers";
import { Button } from "@ui/common";
import { useAccount } from "@components/hooks/web3";
import { useRouter } from "next/router";

const Navbar = () => {
  const { connect, isLoading, requireInstall } = useWeb3();
  const { account } = useAccount();
  const { pathname } = useRouter();

  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <ActiveLink href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Home</a>
              </ActiveLink>
              <ActiveLink href="/marketplace">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Marketplace</a>
              </ActiveLink>
              <ActiveLink href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Blogs</a>
              </ActiveLink>
            </div>
            <div>
              <ActiveLink href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Wishlist</a>
              </ActiveLink>
              {
                isLoading ?
                <Button disabled>Loading...</Button> :
                account.data ?
                <Button className="cursor-default" hoverable={false}>Hi there{account.isAdmin && ' Admin'}!</Button> :
                requireInstall ?
                <Button onClick={() => window.open('https://metamask.io/download/', '_blank')}>Install Metamask</Button> :
                <Button onClick={connect}>Connect</Button>
              }
            </div>
          </div>
        </nav>
      </div>
      {account.data && !pathname.includes('/marketplace') && (
        <div className="flex justify-end sm:px-6 lg:px-8 pt-1">
          <div className="text-white bg-indigo-600 rounded-md p-2">
            {account.data}
          </div>
        </div>
      )}
    </section>
  )
}

export default Navbar;

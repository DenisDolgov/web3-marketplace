import Link from 'next/link';
import {useWeb3} from "@components/providers";
import {Button} from "@ui/common";
import {useAccount} from "@components/web3/hooks/useAccount";

const Navbar = () => {
  const { connect, isLoading, isWeb3Loaded } = useWeb3();
  const { account } = useAccount();

  return (
    <section>
      {account}
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Home</a>
              </Link>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Marketplace</a>
              </Link>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Blogs</a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Wishlist</a>
              </Link>
              {
                isLoading
                  ? <Button disabled>Loading...</Button>
                  : isWeb3Loaded
                    ? <Button onClick={connect}>Connect</Button>
                    : <Button onClick={() => window.open('https://metamask.io/download/', '_blank')}>Install Metamask</Button>
              }
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar;

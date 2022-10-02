import { WalletBar, EthRates } from "@ui/web3"
import { CourseList } from "@ui/course";
import { BaseLayout } from "@ui/layout";
import { CourseCard } from "@ui/course";
import { Button } from "@ui/common";
import { OrderModal } from "@ui/order";
import { getAllCourses } from "@content/courses/fetcher";
import {useAccount, useNetwork} from "@components/hooks/web3";
import {useEthPrice} from "@components/hooks/useEthPrice";
import {useState} from "react";

export default function Marketplace({ courses }) {
  const { account } = useAccount();
  const { network } = useNetwork();
  const { eth } = useEthPrice();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const canPurchaseCourse = !!(account.data && network.isSupported);

  return (
    <>
      <div className="py-4">
        <WalletBar
          address={account.data}
          network={network}
        />
        <EthRates eth={eth.data} ethPerItem={eth.perItem} />
      </div>
      <CourseList courses={courses}>
        {course => <CourseCard
          key={course.id}
          disabled={!canPurchaseCourse}
          course={course}
          Footer={() => (
            <div className="mt-4">
              <Button disabled={!canPurchaseCourse} onClick={() => setSelectedCourse(course)} variant="lightPurple">
                Purchase
              </Button>
            </div>
          )}
        />}
      </CourseList>
      <OrderModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  }
}

Marketplace.Layout = BaseLayout;

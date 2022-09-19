import { WalletBar } from "@ui/web3"
import { CourseList } from "@ui/course";
import { BaseLayout } from "@ui/layout";
import { CourseCard } from "@ui/course";
import { Button } from "@ui/common";
import { OrderModal } from "@ui/order";
import { getAllCourses } from "@content/courses/fetcher";
import {useAccount, useNetwork} from "@components/hooks/web3";

export default function Marketplace({ courses }) {
  const { account } = useAccount();
  const { network } = useNetwork();

  return (
    <>
      <div className="py-4">
        <WalletBar
          address={account.data}
          network={{
            data: network.data,
            target: network.target,
            isSupported: network.isSupported,
            isLoading: network.isLoading,
          }}
        />
      </div>
      <CourseList courses={courses}>
        {course => <CourseCard
          key={course.id}
          course={course}
          Footer={() => (
            <div className="mt-4">
              <Button variant="lightPurple">
                Purchase
              </Button>
            </div>
          )}
        />}
      </CourseList>
      <OrderModal isOpen />
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

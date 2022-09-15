import { Hero, Breadcrumbs } from "@ui/common"
import { EthRates, WalletBar } from "@ui/web3"
import { CourseCard, CourseList } from "@ui/course";
import { OrderCard } from "@ui/order";
import { BaseLayout } from "@ui/layout";
import { getAllCourses } from "@content/courses/fetcher";
import {useAccount, useNetwork} from "@components/hooks/web3";

export default function Home({ courses }) {
  const { network } = useNetwork();
  const { account } = useAccount();

  return (
    <>
      <Hero />
      <Breadcrumbs />
      <WalletBar
        address={account.data}
        network={{
          data: network.data,
          target: network.target,
          isSupported: network.isSupported,
          isLoading: network.isLoading,
        }}
      />
      <EthRates />
      <CourseList courses={courses}>
        {course => <CourseCard key={course.id} course={course} />}
      </CourseList>
      <OrderCard />
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

Home.Layout = BaseLayout;

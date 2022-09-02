import { Hero, Breadcrumbs } from "@ui/common"
import { EthRates, WalletBar } from "@ui/web3"
import { CourseList } from "@ui/course";
import { OrderCard } from "@ui/order";
import { BaseLayout } from "@ui/layout";
import { getAllCourses } from "@content/courses/fetcher";
import {useWeb3} from "@components/providers";

export default function Home({ courses }) {
  const { test } = useWeb3();

  return (
    <>
      {test}
      <Hero />
      <Breadcrumbs />
      <WalletBar />
      <EthRates />
      <CourseList courses={courses} />
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

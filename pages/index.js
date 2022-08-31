import { Hero, Breadcrumbs } from "@components/common"
import { EthRates, WalletBar } from "@components/web3"
import { CourseList } from "@components/course";
import { OrderCard } from "@components/order";
import { BaseLayout } from "@components/layout";
import { getAllCourses } from "@content/courses/fetcher";

export default function Home({ courses }) {
  return (
    <>
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

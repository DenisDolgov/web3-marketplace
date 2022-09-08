import { WalletBar } from "@ui/web3"
import { CourseList } from "@ui/course";
import { BaseLayout } from "@ui/layout";
import { getAllCourses } from "@content/courses/fetcher";
import {useAccount} from "@components/hooks/web3/useAccount";

export default function Marketplace({ courses }) {
  const { account } = useAccount();
  const { data: address } = account;

  return (
    <>
      <div className="py-4">
        <WalletBar address={address} />
      </div>
      <CourseList courses={courses} />
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

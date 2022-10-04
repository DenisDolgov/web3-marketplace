import { WalletBar, EthRates } from "@ui/web3"
import { CourseList } from "@ui/course";
import { BaseLayout } from "@ui/layout";
import { CourseCard } from "@ui/course";
import { Button } from "@ui/common";
import { OrderModal } from "@ui/order";
import { getAllCourses } from "@content/courses/fetcher";
import { useWalletInfo } from "@components/hooks/web3";
import { useState } from "react";
import { MarketHeader } from "@components/marketplace";

export default function Marketplace({ courses }) {
  const { canPurchaseCourse } = useWalletInfo();
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <div className="py-4">
        <MarketHeader />
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

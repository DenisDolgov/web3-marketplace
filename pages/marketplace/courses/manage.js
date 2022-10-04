import { MarketHeader } from "@components/marketplace";
import { BaseLayout } from "@ui/layout";
import OwnedCourseCard from "@ui/course/card/OwnedCourseCard";

export default function ManageCourses() {
  return (
    <>
      <MarketHeader />
      <section className="grid grid-cols-1">
        <OwnedCourseCard />
      </section>
    </>
  )
}

ManageCourses.Layout = BaseLayout;

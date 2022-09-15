import { Hero, Breadcrumbs } from "@ui/common"
import { CourseCard, CourseList } from "@ui/course";
import { OrderCard } from "@ui/order";
import { BaseLayout } from "@ui/layout";
import { getAllCourses } from "@content/courses/fetcher";

export default function Home({ courses }) {
  return (
    <>
      <Hero />
      <Breadcrumbs />
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

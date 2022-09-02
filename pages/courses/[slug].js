import { Modal } from "@ui/common";
import {
  CourseHero,
  Curriculum,
  KeyPoints
} from "@ui/course";
import { BaseLayout } from "@ui/layout";
import {getAllCourses} from "@content/courses/fetcher";

export default function Course({ course }) {
  return (
    <>
      <div className="py-4">
        <CourseHero title={course.title} description={course.description} image={course.coverImage} />
      </div>
      <KeyPoints points={course.wsl} />
      <Curriculum locked />
      <Modal />
    </>
  )
}

export function getStaticPaths() {
  const { data } = getAllCourses();

  return {
    paths: data.map(c => ({
      params: {
        slug: c.slug,
      },
    })),
    fallback: false,
  }
}

export function getStaticProps({ params: { slug } }) {
  const { data } = getAllCourses();

  const course = data.find(c => c.slug === slug);

  return {
    props: { course }
  };
}

Course.Layout = BaseLayout;

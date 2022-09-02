import { Modal } from "@components/common";
import {
  CourseHero,
  Curriculum,
  KeyPoints
} from "@components/course";
import { BaseLayout } from "@components/layout";
import {getAllCourses} from "@content/courses/fetcher";

export default function Course({ course }) {
  return (
    <>
      <div className="py-4">
        <CourseHero title={course.title} description={course.description} image={course.coverImage} />
      </div>
      <KeyPoints points={course.wsl} />
      <Curriculum />
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

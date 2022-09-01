import { Modal } from "@components/common";
import {
  CourseHero,
  Curriculum,
  KeyPoints
} from "@components/course";
import { BaseLayout } from "@components/layout";

export default function Course() {
  return (
    <>
      <div className="py-4">
        <CourseHero />
      </div>
      <KeyPoints />
      <Curriculum />
      <Modal />
    </>
  )
}

Course.Layout = BaseLayout;

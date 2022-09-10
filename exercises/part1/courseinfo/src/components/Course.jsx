import React from "react";

import Header from "./Header";
import Content from "./Content";

export default function Course({ course }) {
  console.log(course);
  return (
    <section>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </section>
  );
}

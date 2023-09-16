import type { FC } from "react";

import { EducationItem } from "./EducationItem";

import type { Education } from "~/domain/education";

type EducationListProps = {
  educations: Array<Education>;
};

export const EducationList: FC<EducationListProps> = ({ educations }) => {
  return (
    <ul className="flex flex-col gap-4">
      {educations.map((education) => (
        <li key={education.id}>
          <EducationItem education={education} />
        </li>
      ))}
    </ul>
  );
};

import type { FC } from "react";

import type { Education } from "~/domain/education";

type EducationItemProps = {
  education: Education;
};

export const EducationItem: FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2>{education.universityName}</h2>
        <p className="text-xs leading-5">{education.period}</p>
      </div>
      <p className="leading-6">{education.description}</p>
    </div>
  );
};

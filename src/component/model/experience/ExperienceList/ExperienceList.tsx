import type { FC } from "react";

import { ExperienceItem } from "./ExperienceItem";
import type { Experience } from "~/domain/experience";

type ExperienceListProps = {
  experiences: Array<Experience>;
};

export const ExperienceList: FC<ExperienceListProps> = ({ experiences }) => {
  return (
    <ul className="flex flex-col gap-4">
      {experiences.map((experience) => (
        <li key={experience.id}>
          <ExperienceItem experience={experience} />
        </li>
      ))}
    </ul>
  );
};

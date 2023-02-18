import type { FC } from "react";
import type { Experience } from "@/domain/experience";

type ExperienceItemProps = {
  experience: Experience;
};

export const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h3 className="text-xl font-semibold">{experience.companyName}</h3>
        {experience.position && (
          <p className="text-xs leading-5">{experience.position}</p>
        )}
        <p className="text-xs leading-5">{experience.period}</p>
      </div>
      <p>{experience.description}</p>
    </div>
  );
};

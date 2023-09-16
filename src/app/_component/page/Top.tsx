"use client";

import { type FC } from "react";

import { EducationList } from "~/component/model/education/EducationList";
import { ExperienceList } from "~/component/model/experience/ExperienceList";
import { ProjectList } from "~/component/model/project/ProjectList";
import { ProfileHeading } from "~/component/ui/ProfileHeading";
import { SectionWithTitle } from "~/component/ui/SectionWithTitle";
import { educations } from "~/data/education";
import { experiences } from "~/data/experience";
import { projects } from "~/data/project";

export const Top: FC = () => {
  return (
    <div className="my-14 flex flex-col gap-8">
      <ProfileHeading />
      <SectionWithTitle title="Project">
        <ProjectList projects={projects} />
      </SectionWithTitle>
      <SectionWithTitle title="Experience">
        <ExperienceList experiences={experiences} />
      </SectionWithTitle>
      <SectionWithTitle title="Education">
        <EducationList educations={educations} />
      </SectionWithTitle>
    </div>
  );
};

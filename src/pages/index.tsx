import type { NextPage } from "next";

import { SectionWithTitle } from "~/component/ui/SectionWithTitle";
import { ProfileHeading } from "~/component/ui/ProfileHeading";
import { ProjectList } from "~/component/model/project/ProjectList";
import { ExperienceList } from "~/component/model/experience/ExperienceList";
import { EducationList } from "~/component/model/education/EducationList";
import { projects } from "~/data/project";
import { experiences } from "~/data/experience";
import { educations } from "~/data/education";

const Top: NextPage = () => {
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

export default Top;

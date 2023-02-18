import type { NextPage } from "next";

import { SectionWithTitle } from "@/component/ui/SectionWithTitle";
import { ProjectList } from "@/component/model/project/ProjectList";
import { ExperienceList } from "@/component/model/experience/ExperienceList";
import { projects } from "@/data/project";
import { experiences } from "@/data/experience";

const Top: NextPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionWithTitle title="Project">
        <ProjectList projects={projects} />
      </SectionWithTitle>
      <SectionWithTitle title="Experience">
        <ExperienceList experiences={experiences} />
      </SectionWithTitle>
    </div>
  );
};

export default Top;

import type { NextPage } from "next";

import { SectionWithTitle } from "@/component/ui/SectionWithTitle";
import { ProjectList } from "@/component/model/project/ProjectList";
import { projects } from "@/data/project";

const Top: NextPage = () => {
  return (
    <main>
      <SectionWithTitle title="Project">
        <ProjectList projects={projects} />
      </SectionWithTitle>
    </main>
  );
};

export default Top;

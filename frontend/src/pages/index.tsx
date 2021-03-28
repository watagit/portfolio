import { NextPage, GetStaticProps } from "next";
import React from "react";

import MetaData from "../components/MetaData";
import Section from "../components/Section";
import Period from "../components/Period";
import Text from "../components/Text";
import Skill from "../components/Skill";
import Profile from "../components/Profile";

interface MetaData {
  name: string;
  twitterId: string;
}

interface Bio {
  content: string;
}

interface Experience {
  name: string;
  detail: string;
  period: string;
}

interface Education {
  name: string;
  detail: string;
  period: string;
}

interface Skill {
  name: string;
}

interface Props {
  meta: MetaData;
  bio: Bio;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
}

const Index: NextPage<Props> = ({ meta, bio, experiences, educations, skills }) => {
  return (
    <>
      <MetaData name={meta.name} twitterId={meta.twitterId} />
      <Profile content={bio.content} />
      <Section title={"Experience"}>
        <div>
          {experiences.map((experience: Experience, index: number) => (
            <div key={index}>
              <Period label={experience.period} />
              <Text title={experience.name} content={experience.detail} />
            </div>
          ))}
        </div>
      </Section>
      <Section title={"Education"}>
        <div>
          {educations.map((education: Education, index: number) => (
            <div key={index}>
              <Period label={education.period} />
              <Text title={education.name} content={education.detail} />
            </div>
          ))}
        </div>
      </Section>
      <Section title={"Skills"}>
        <div>
          {skills.map((skill: Skill, index: number) => (
            <Skill key={index} label={skill.name} />
          ))}
        </div>
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:8080");
  const json = await res.json();

  const name = json.meta_data.name;
  const twitterId = json.meta_data.twitter_id;
  const bio = json.bio;
  const experiences = json.experiences;
  const educations = json.educations;
  const skills = json.skills;

  return {
    props: {
      meta: {
        name: name,
        twitterId: twitterId
      },
      bio: bio,
      experiences: experiences,
      educations: educations,
      skills: skills,
    },
  };
}

export default Index;

import React, { FC } from "react";

interface Props {
  label: string;
}

const Skill: FC<Props> = ({ label }) => {
  return <p>{label}</p>;
};

export default Skill;

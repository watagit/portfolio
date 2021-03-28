import React, { FC } from "react";

interface Props {
  content: string;
}

const Profile: FC<Props> = ({ content }) => {
  return (
    <>{content}</>
  );
};

export default Profile;

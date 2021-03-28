import React, { FC } from "react";
import Image from "next/image";

interface Props {
  name: string;
  twitterId: string;
}

const MetaData: FC<Props> = ({ name, twitterId }) => {
  return (
    <div className={"flex justify-center"}>
      <Image className={"rounded-full"} src={"/avatar.jpg"} alt={"avatar"} width={"100"} height={"100"} />
      <div>
        <h1>{name}</h1>
        <p>{twitterId}</p>
      </div>
    </div>
  );
};

export default MetaData;

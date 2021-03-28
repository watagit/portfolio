import { NextPage, GetServerSideProps } from "next";
import React from "react";

import MetaData from "../components/MetaData";

interface Props {
  name: string;
  twitterId: string;
}

const Index: NextPage<Props> = ({ name, twitterId }) => {
  console.log(name, twitterId);
  return (
    <>
      <MetaData name={name} twitterId={twitterId} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:8080/meta");
  const json = await res.json();

  const name = json.name;
  const twitterId = json.twitter_id;

  return {
    props: {
      name: name,
      twitterId: twitterId,
    },
  };
}

export default Index;

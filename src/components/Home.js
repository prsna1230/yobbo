import React from "react";
import { useParams } from "react-router";
const Home = () => {
  const { name } = useParams();
  return <div>{name}</div>;
};

export default Home;

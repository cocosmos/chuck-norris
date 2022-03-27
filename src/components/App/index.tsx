import React, { useEffect, useState } from "react";
import Card from "./Container/Card";
import { Wrapper } from "./styled";
import axios from "axios";
import Container from "./Container/index";

interface Props {}

const App = ({}) => {
  const [jokes, setJokes] = useState("");

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        const { data } = response;
        setJokes(data.value);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Wrapper>
      <h1>Chuck Norris is the best !</h1>
      <Container fact={jokes}></Container>
    </Wrapper>
  );
};

export default App;

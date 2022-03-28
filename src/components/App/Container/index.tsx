import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Wrapper } from "./styled";

interface Props {}

const Container = (props: Props) => {
  const [jokes, setJokes] = useState("");
  const [jokesId, setJokesId] = useState("");

  for (let i = 0; i < 10; i++) {
    useEffect(() => {
      axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((response) => {
          const { data } = response;
          setJokes(data.value);
          setJokesId(data.id);
          console.log(data.id);
        })
        .catch((error) => console.error(error));
    }, []);
    return <div>{jokes}</div>;
  }

  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
};

export default Container;

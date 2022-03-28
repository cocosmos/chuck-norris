import axios from "axios";
import { string } from "prop-types";
import React, { useEffect, useState } from "react";
import { Wrapper } from "./styled";

interface Props {}

const Container = (props: Props) => {
  const [jokes, setJokes] = useState([]);
  const API_URL = "https://api.chucknorris.io/jokes/random";
  let j = 0;

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      fetchChuck();
    }
  }, []);

  const fetchChuck = () => {
    axios
      .get(API_URL)
      .then((response) => {
        const { data } = response;

        setJokes((arr) => [...arr, data.value]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <Wrapper>
      {jokes.map(function (element: String) {
        return (
          <div className="card" key={j++}>
            {element}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Container;

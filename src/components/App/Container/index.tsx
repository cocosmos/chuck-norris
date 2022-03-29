import axios from "axios";
import { useEffect, useState } from "react";
import { Wrapper } from "./styled";

interface Props {}

const Container = (props: Props) => {
  const [jokes, setJokes] = useState([]);
  const API_URL = "https://api.chucknorris.io/jokes/random";
  let j = 0;
  let g = 1;

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
            <img src={`../images/${g++}.jpg`} alt="Chuck Norris" />
            <p>{element}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Container;

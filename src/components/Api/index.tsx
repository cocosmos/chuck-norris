import axios from "axios";
import { useEffect, useState } from "react";

const Api = () => {
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
  return jokes;
};

export default Api;

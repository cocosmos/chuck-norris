import React, { useEffect, useState } from "react";
import Card from "./Container/Card";
import { Wrapper } from "./styled";
import axios from "axios";
import Container from "./Container/index";

interface Props {}

const App = ({}) => {
  return (
    <Wrapper>
      {/*  <h1>Chuck Norris is the best !</h1> */}
      <Container></Container>
    </Wrapper>
  );
};

export default App;

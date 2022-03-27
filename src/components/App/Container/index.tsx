import React from "react";
import Card from "./Card";
import { Wrapper } from "./styled";

interface Props {}

const Container = (props: Props) => {
  return (
    <Wrapper>
      <Card key={fact} />
    </Wrapper>
  );
};

export default Container;

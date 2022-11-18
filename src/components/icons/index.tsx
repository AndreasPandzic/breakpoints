// create a react function svg component
import React from "react";
import Dummy from "./dummy";

interface Props {
  name: string;
  className?: string;
}

const icons = (props: Props) => {
  switch (props.name) {
    case "dummy":
      return <Dummy className={props.className}/>;
    case "logo":
      return <Dummy />;
    default:
      return <Dummy />;
  }
};

export default icons;

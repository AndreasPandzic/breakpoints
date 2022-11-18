import React from "react";

interface Props {
  classNameOuter?: string;
  classNameInner?: string;
  children: React.ReactNode;
}

const Container = (props: Props) => {
  return (
    <div className={`container-outer ${props.classNameOuter}`}>
      <div className={`container-inner ${props.classNameInner}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Container;

import React from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import computePillsStyle from "./Pills.style";

const Pills = React.forwardRef((props, ref) => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computePillsStyle(props, value);
        return (
          <BasePills
            ref={ref}
            $as={props.tag}
            {...output[0]}
            $styleArray={output[1]}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
});

const BasePills = styled("span", props => {
  return {
    ...props.$styleArray
  };
});

Pills.defaultProps = {
  tag: "span",
  p: "2px 7px",
  bg: "neutral200",
  d: "inlin-block",
  radius: "10px",
  textColor: "neutral800",
  textWeight: "600",
  fontFamily: "primary",  
  textSize: "pill"
};

export default Pills;

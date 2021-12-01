import React from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import computeAvatarsStyle from "./Avatars.style";

const Avatars = React.forwardRef((props, ref) => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeAvatarsStyle(props, value);
        return (
          <BaseAvatars
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

const BaseAvatars = styled("span", props => {
  return {
    ...props.$styleArray
  };
});

Avatars.defaultProps = {
  tag: "span",
  p: "10px 8px",
  bg: "neutral200",
  radius: "50%",
  textColor: "neutral800",
  textWeight: "normal",
  fontFamily: "primary",  
  textSize: "12px",
  w: "32px",
  h: "32px"
};

export default Avatars;

import React from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import computeBadgesStyle from "./Badges.style";

const Badges = React.forwardRef((props, ref) => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeBadgesStyle(props, value);
        return (
          <BaseBadges
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

const BaseBadges = styled("span", props => {
  return {
    ...props.$styleArray
  };
});

Badges.defaultProps = {
  tag: "span",
  p: "5px 10px",
  bg: "neutral200",
  d: "inlin-block",
  radius: "5px",
  textColor: "neutral800",
  textWeight: "600",
  fontFamily: "primary",
  textSize: "11px"
};

export default Badges;

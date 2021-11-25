import React from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import computeAnchorStyle from "./Anchor.style";

const Anchor = React.forwardRef((props, ref) => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeAnchorStyle(props, value);
        const {          
          children,
          textColor,
          tag,
          ...rest
        } = output[0];

        return (
          <BasicAnchor ref={ref} $as={tag} {...rest} $styleArray={output[1]}>
            {children}
          </BasicAnchor>
        );
      }}
    </ThemeContext.Consumer>
  );
});

const BasicAnchor = styled("a", props => ({
  ...props.$styleArray
}));

Anchor.defaultProps = {
  textWeight: "500",
  textDecor: "none",
  textColor: "blue400",
  hoverTextColor: "blue500",
  activeColor: "blue600",
  cursor: "pointer",  
  textSize: "body",
  textWeight: "500",
  fontFamily: "primary",
  disableColor: "neutral500",
  visitedColor: "violet400",
  focusShadow: "0 0 0 0.2rem #D6E0FF"
};

export { Anchor };

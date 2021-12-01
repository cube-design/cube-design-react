import React from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import computeButtonStyle from "./Button.style";
import Icon from "../icon/Icon";

const SecondaryButton = React.forwardRef((props, ref) => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeButtonStyle(props, value);

        const {
          isLoading,
          prefix,
          children,
          suffix,
          textColor,
          tag,
          ...rest
        } = output[0];

        return (
          <BasicButton ref={ref} $as={tag} {...rest} $styleArray={output[1]}>
            {isLoading && (
              <Icon
                name="Loading"
                size="16px"
                m={{ r: "0.5rem" }}
                color={textColor}
              />
            )}
            {prefix}
            {children}
            {suffix}
          </BasicButton>
        );
      }}
    </ThemeContext.Consumer>
  );
});

const BasicButton = styled("button", props => ({
  ...props.$styleArray
}));

SecondaryButton.defaultProps = {
  tag: "button",
  d: "flex",
  justify: "center",
  align: "center",
  p: { x: "1rem" },
  pos: "relative",
  rounded: "md",
  border: "none",
  h: "2.5rem",
  cursor: "pointer",
  bg: "neutralNo",
  textColor: "neutral700",
  border: "1px solid",
  borderColor: "neutral400",
  hoverBorderColor: "neutral600",
  activeBg: "neutral100",
  activeBorderColor: "neutral400",
  focusShadow: "0 0 0 2px blue200",
  disableBorderColor: "neutral300",
  textSize: "body",
  textWeight: "500",
  fontFamily: "primary",
  transition: "true",
  disableBg: "gray400",
  disableShadow: "0",
  disableBorderColor: "neutral300",
  disableColor: "neutral500",  
  focusShadow: "0 0 0 0.2rem #D6E0FF"
};

export {SecondaryButton};

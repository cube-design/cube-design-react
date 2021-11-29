import React from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import Icon from '../icon/Icon';
import Text from '../text/Text';
import computeStatusStyle from "./Status.style";

const Status = React.forwardRef((props, ref) => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeStatusStyle(props, value);
        const {
          prefix,
          children,
          suffix,
          iconColor,
          tag,
          ws,
          fontFamily,
          iconName,
          ...rest
        } = output[0];

        return (
          <React.Fragment  $as={tag} {...rest} $styleArray={output[1]}>
            <Icon
              name={props.iconName}
              size="16px"
              m={{ r: "8px" }}
              color={iconColor}
            />
            <Text
              ref={ref}
              $as={props.tag}
              m={{ r: "20px" }}
              ws = {props.ws}
              {...output[0]}
              $styleArray={output[1]}
              fontFamily= {props.fontFamily}
              textWeight = {props.textWeight}
              textSize = {props.textSize}
            />
          </React.Fragment>
        );
      }}
    </ThemeContext.Consumer>
  );
});

const BaseStatus = styled("span", props => {
  return {
    ...props.$styleArray
  };
});

Status.defaultProps = {
  tag: "span",
  m: "0 10px 0 0",
  textColor: "neutral800",
  textWeight: "normal",
  fontFamily: "primary",
  textSize: "codeDefault",
  iconColor: "neutral800",
  ws: "nowrap",
  iconName: "Record"
};

export default Status;

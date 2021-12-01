import React from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import Icon from '../icon/Icon';
import Text from '../text/Text';
import Div from '../div/Div';
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
          iconcolor,
          tag,
          ws,
          fontFamily,
          iconname,
          margin,
          ...rest
        } = output[0];

        return (
          <Div  $as={tag} {...rest} $styleArray={output[1]} d="flex">
            <Icon
              name={props.iconname}
              size="16px"
              m={margin}
              color={iconcolor}
            />
            <Text
              ref={ref}
              $as={props.tag}              
              ws = {props.ws}
              {...output[0]}
              $styleArray={output[1]}
              fontFamily= {props.fontFamily}
              textWeight = {props.textWeight}
              textSize = {props.textSize}
            />
          </Div>
        );
      }}
    </ThemeContext.Consumer>
  );
});


Status.defaultProps = {
  tag: "span",
  m: "0 10px 0 0",
  textColor: "neutral800",
  textWeight: "normal",
  fontFamily: "primary",
  textSize: "codeDefault",
  iconcolor: "neutral800",
  ws: "nowrap",
  iconname: "Record",
  Text,
  margin: "0 8px 0 8px"
};

export default Status;


const BaseStatus = styled("span", props => {
  return {
    ...props.$styleArray
  };
});

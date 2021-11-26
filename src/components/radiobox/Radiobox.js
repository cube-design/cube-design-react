import React from "react";
import { styled } from "styletron-react";
import Icon from "../icon/Icon";
import Text from "../text/Text";

const Radiobox = React.forwardRef((props, ref) => {
  const {
    disabled,
    indetermine,
    m,
    size,
    checkedCOlor,
    disabledColor,
    isLoading,
    checked,
    hoverCheckedColor,
    hoverIndetermineColor,
    hoverUnCheckedColor,
    ...rest
  } = props;

  return (
    <>
      <RadioboxInput
        type="Radiobox"
        disabled={disabled}
        indetermine={indetermine}
        checked={checked}
        ref={ref}
        {...rest}
      />
      {
        !disabled &&
        (checked ? (
          <>
            <Icon
              m={m}
              size={size}
              color={checkedCOlor}
              hoverColor={hoverCheckedColor}
              name={isLoading ? "Loading" : "RadioCheck"}
            />
            {props.label && <Text fontFamily="primary" textSize="paragraph200" textColor="neutral800" textWeight="400" align="left" justify="left" m="0 20px 0 0">{props.label}</Text>}
          </>
        ) : (
          <>
            <Icon
              m={m}
              size={size}
              color={disabledColor}
              hoverColor={hoverUnCheckedColor}
              name={isLoading ? "Loading" : "RadioUnncheck"}
            />
            {props.label && <Text fontFamily="primary" textSize="paragraph200" textColor="neutral800" textWeight="400" align="left" justify="left" m="0 20px 0 0">{props.label}</Text>}
          </>
        ))}

      {disabled &&
        (checked ? (
          <>
            <Icon
              m={m}
              size={size}
              color={checkedCOlor}
              name={isLoading ? "Loading" : "RadioCheckDisabled"}
            />
            {props.label && <Text fontFamily="primary" textSize="paragraph200" textColor="neutral800" textWeight="400" align="left" justify="left" m="0 20px 0 0">{props.label}</Text>}
          </>
        ) : (
          <>
            <Icon
              m={m}
              size={size}
              color={disabledColor}
              name={isLoading ? "Loading" : "RadioUnncheckDisabled"}
            />
            {props.label && <Text fontFamily="primary" textSize="paragraph200" textColor="neutral800" textWeight="400" align="left" justify="left" m="0 20px 0 0">{props.label}</Text>}
          </>
        ))}

    </>
  );
});



Radiobox.defaultProps = {
  cursor: "pointer",
  m: { r: "12px" },
  color: "black",
  size: "20px",
  disabledColor: "neutral500",
  checkedCOlor: "blue400",
  hoverCheckedColor: "neutral600",
  hoverCheckedColor: "blue500",
  hoverUnCheckedColor:"neutral600"
};

export default Radiobox;

const RadioboxInput = styled("input", {
  display: "none"
});

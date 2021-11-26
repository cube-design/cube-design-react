import React from "react";
import { styled } from "styletron-react";
import Icon from "../icon/Icon";
import Text from "../text/Text";

const Checkbox = React.forwardRef((props, ref) => {
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
      <CheckboxInput
        type="checkbox"
        disabled={disabled}
        indetermine={indetermine}
        checked={checked}
        ref={ref}
        {...rest}
      />
      {!indetermine &&
        !disabled &&
        (checked ? (
          <>
            <Icon
              m={m}
              size={size}
              color={checkedCOlor}
              hoverColor={hoverCheckedColor}
              name={isLoading ? "Loading" : "CBChecked"}
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
              name={isLoading ? "Loading" : "CBUnchecked"}
            />
            {props.label && <Text fontFamily="primary" textSize="paragraph200" textColor="neutral800" textWeight="400" align="left" justify="left" m="0 20px 0 0">{props.label}</Text>}
          </>
        ))}

      {indetermine &&
        (!disabled ?
          <>
            <Icon
              m={m}
              size={size}
              color={checkedCOlor}
              hoverColor={hoverIndetermineColor}
              name={isLoading ? "Loading" : "CBIndetermine"}
            />
            {props.label && <Text fontFamily="primary" textSize="paragraph200" textColor="neutral800" textWeight="400" align="left" justify="left" m="0 20px 0 0">{props.label}</Text>}
          </>
          :
          <>
            <Icon
              m={m}
              size={size}
              color={checkedCOlor}
              name={isLoading ? "Loading" : "CBDisabled"}
            />
            {props.label && <Text fontFamily="primary" textSize="paragraph200" textColor="neutral800" textWeight="400" align="left" justify="left" m="0 20px 0 0">{props.label}</Text>}
          </>
        )}

      {!indetermine &&
        disabled &&
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
              name={isLoading ? "Loading" : "CBDisabledUnchecked"}
            />
            {props.label && <Text fontFamily="primary" textSize="paragraph200" textColor="neutral800" textWeight="400" align="left" justify="left" m="0 20px 0 0">{props.label}</Text>}
          </>
        ))}
    </>
  );
});



Checkbox.defaultProps = {
  cursor: "pointer",
  m: { r: "12px" },
  color: "black",
  size: "20px",
  disabledColor: "neutral500",
  checkedCOlor: "blue400",
  hoverCheckedColor: "blue500",
  hoverCheckedColor: "blue500",
  hoverIndetermineColor: "blue500",  
  hoverUnCheckedColor:"neutral600"
};

export default Checkbox;

const CheckboxInput = styled("input", {
  display: "none"
});

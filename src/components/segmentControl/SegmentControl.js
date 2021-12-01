import React from "react";
import Div from "../div/Div";

const SegmentControl = ({
  children,
  prefix,
  suffix,
  active,
  textColor,
  activeDir,
  activeLineBg,
  bg,
  ...rest
}) => {
  return (
    <Div
      textColor={active ? rest.hoverTextColor : textColor}
      bg={active ? rest.hoverBg : bg}
      {...rest}
    >
      {children}
      <Div
        pos="absolute"
        bottom={activeDir !== "top" && "0"}
        right={activeDir !== "left" && "0"}
        left={activeDir !== "right" && "0"}
        top={activeDir !== "bottom" && "0"}
        h={(activeDir == "top" || activeDir == "bottom") && "2px"}
        w={(activeDir == "left" || activeDir == "right") && "2px"}
        transform={`scale${
          activeDir == "left" || activeDir == "right" ? "Y" : "X"
        }(${active ? "1" : "0"})`}
        bg={activeLineBg || "brand700"}
      />
    </Div>
  );
};

SegmentControl.defaultProps = {
  d: "flex",
  align: "center",
  justify: "center",
  p: { x: "16px", y: "12px" },
  textColor: "medium",
  pos: "relative",
  cursor: "pointer",
  hoverTextColor: "dark",
  activeDir: "bottom",
  activeLineBg: "brand700"
};

export default SegmentControl;

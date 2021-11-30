import React from "react";
import Div from "../div/Div";

const SecondaryTab = ({
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
        h={(activeDir == "top" || activeDir == "bottom") && "100%"}
        w={(activeDir == "left" || activeDir == "right") && "100%"}
        zIndex="-1"
        transform={`scale${
          activeDir == "left" || activeDir == "right" ? "Y" : "X"
        }(${active ? "1" : "0"})`}
        bg={activeLineBg || "blue100"}
      />
    </Div>
  );
};

SecondaryTab.defaultProps = {
  d: "flex",
  align: "center",
  justify: "center",
  p: { x: "16px", y: "12px" },
  textColor: "neutra700",
  pos: "relative",
  cursor: "pointer",
  hoverTextColor: "blue400",
  activeDir: "bottom",
  activeLineBg: "blue100",
  fontFamily: "primary",
};

export default SecondaryTab;

const tabActiveDirection = (e, active) => {
  switch (e) {
    case "right":
      return `top: 0; right: 0; bottom: 0; transform: scaleY(${
        active ? "1" : "0"
      })`;
      break;
    case "left":
      return `top: 0; left: 0; bottom: 0; transform: scaleY(${
        active ? "1" : "0"
      })`;
      break;
    case "top":
      return `top: 0; right: 0; left: 0; transform: scaleX(${
        active ? "1" : "0"
      })`;
      break;
    default:
      return `bottom: 0; right: 0; left: 0; transform: scaleX(${
        active ? "1" : "0"
      })`;
  }
};

const THEME = {
  colors: {

    //Extended Neutral
    neutral900: "#101840",
    neutral800: "#474D66",
    neutral700: "#696F8C",
    neutral600: "#8F95B2",
    neutral500: "#C1C4D6",
    neutral400: "#D8DAE5",
    neutral300: "#E6E8F0",
    neutral200: "#EDEFF5",
    neutral100: "#F4F6FA",
    neutral75: "#F9FAFC",
    neutral50: "#FAFBFF",
    neutralNo: "#FFFFFF",

    //Extended Blue
    blue600: "#1F3D99",
    blue500: "#2952CC",
    blue400: "#3366FF",
    blue300: "#9DB5FF",
    blue200: "#D6E0FF",
    blue100: "#EBF0FF",
    blue50: "#F3F6FF",

    //Extended Green
    green600: "#317159",
    green500: "#429777",
    green400: "#52BD94",
    green300: "#A3E6CD",
    green200: "#DCF2EA",
    green100: "#EEF8F4",
    green50: "#F5FBF8",

    //Extended Yellow
    yellow600: "#66460D",
    yellow500: "#996A13",
    yellow400: "#FFB020",
    yellow300: "#FFD079",
    yellow200: "#FFDFA6",
    yellow100: "#FFEFD2",
    yellow50: "#FFFAF1",

    //Extended Red
    red600: "#7D2828",
    red500: "#A73636",
    red400: "#D14343",
    red300: "#EE9191",
    red200: "#F4B6B6",
    red100: "#F9DADA",
    red50: "#FDF4F4",

    //Extended Violet
    violet600: "#524988",
    violet500: "#6E62B6",
    violet400: "#897AE3",
    violet300: "#B8AFEE",
    violet200: "#D0CAF4",
    violet100: "#E7E4F9",
    violet50: "#F8F7FD",

    //Extended Teal
    teal600: "#0F5156",
    teal500: "#10899E",
    teal400: "#25CBD6",
    teal300: "#7CE0E6",
    teal200: "#A8EAEF",
    teal100: "#D3F5F7",
    teal50: "#F2FCFD",

    //Extended Pink
    pink600: "#8E3374",
    pink500: "#BE449B",
    pink400: "#ED55C2",
    pink300: "#F499DA",
    pink200: "#F8BBE7",
    pink100: "#FBDDF3",
    pink50: "#FEF5FB",

    //Extended Pink
    orange600: "#85462B",
    orange500: "#B25E3A",
    orange400: "#DE7548",
    orange300: "#EBAC91",
    orange200: "#F2C8B6",
    orange100: "#F8E3DA",
    orange50: "#FDF7F4",

    //Chart Palette
    chartTeal: "#74DDE5",
    chartYellow: "#FAC86B",
    chartBlue: "#678AF7",
    chartGreen: "#6BDAAE",
    chartViolet: "#8F59EF",
    chartPink: "#FD8ADC",
    chartAqua: "#70B0FF",
    chartOrange: "#FF9D66",

    white: "#FFFFFF",
    black: "#000000",
    transparent: "rgba(0,0,0,0)",

    disabled: "#B0B7C3",
    light: "#A7AAB0",
    medium: "#505256",
    dark: "#000000"
  },
  grid: {
    containerMaxWidth: {
      xs: "540px",
      sm: "720px",
      md: "960px",
      lg: "1156px",
      xl: "1200px"
    },
    gutterWidth: "16px",
    colCount: 12
  },

  shadows: {
    "0": "none",
    "1": "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 1px 1px 0 rgba(8, 11, 14, 0.1)",
    "2": "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 3px 3px -1px rgba(8, 11, 14, 0.1)",
    "3": "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 6px 6px -1px rgba(8, 11, 14, 0.1)",
    "4":
      "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)",
    "5":
      "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 32px 40px -1px rgba(8, 11, 14, 0.1)"
  },

  fontFamily: {
    primary:
      '"SF Pro Text", -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    secondary: "SF Pro Text",
    code: "monospace"
  },

  backgroundColor : {
    primary : "blue400",
  },

  rounded: {
    "0": "0px",
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    circle: "1000rem"
  },

  transition: {
    true: "all 0.4s ease-in-out"
  },

  textSize: {
    size: {
      codeDefault: "14px",
      codeMinimal: "14px",
      paragraph100: "12px",
      paragraph200: "14px",
      paragraph300: "16px",
      heading100: "10px",
      heading200: "12px",
      heading300: "12px",
      heading400: "14px",
      heading500: "16px",
      heading600: "18px",
      heading700: "20px",
      heading800: "24px",
      heading900: "32px",
      pill: "11px",
    },
    height: {
      codeDefault: "16px",
      codeMinimal: "16px",
      paragraph100: "16px",
      paragraph200: "20px",
      paragraph300: "24px",
      heading100: "16px",
      heading200: "16px",
      heading300: "16px",
      heading400: "14px",
      heading500: "16px",
      heading600: "24px",
      heading700: "24px",
      heading800: "32px",
      heading900: "40px",
      pill: "16px",
    }
  }
};

export default THEME;

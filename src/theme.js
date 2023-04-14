export const breakpoints = {
  mob: "320",
  tab: "768",
  desk: "1280",
};

export const theme = {
  colors: {
    text: "#EBD8FF",
    blackText: "#373737",
    purple: "#EBD8FF",
    hoverPurple: "#D3C2E5",
    accentMint: "#5CD3A8",
    hoverMint: "#52BD97",
    deepPurple: "#4B2A99",
    hoverDeepPurple: "#432589",
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fonts: {
    montserrat: "'Montserrat', sans-serif",
  },

  fontSizes: {
    s: "16px",
    m: "18px",
    l: "20px",
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },

  lineHeights: {
    body: 1.2,
    heading: 1.125,
  },

  borders: {
    none: "none",
    normal: "1px solid",
    medium: "2px solid",
    large: "3px solid",
  },

  radii: {
    none: "0",
    small: "4px",
    normal: "10.3108px",
    medium: "20px",
    large: "85.9232px",
    round: "50%",
  },

  breakpoints: ["320px", "768px", "1280px"],

  //mediaQueries
  mq: {
    mobileOnly: `@media screen and (max-width: ${breakpoints.tab - 0.02}px)`,
    mobile: `@media screen and (min-width: ${breakpoints.mob}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints.tab
    }px) and (max-width: ${breakpoints.desk - 0.02}px)`,
    tablet: `@media screen and (min-width: ${breakpoints.tab}px)`,
    notDesktop: `@media screen and (max-width: ${breakpoints.desk - 0.02}px)`,
    desktop: `@media screen and (min-width: ${breakpoints.desk}px)`,
  },

  transitions: {
    durations: {
      default: "250ms",
    },
    functions: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
};

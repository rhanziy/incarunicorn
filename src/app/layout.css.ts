import { style } from "@vanilla-extract/css";
import theme from "./styles/theme.css";

export const container = style({
  maxWidth: theme.device.desktop,
  margin: "0 auto",
  paddingTop: "80px",
  paddingLeft: theme.padding.large,
  paddingRight: theme.padding.large,
  "@media": {
    "screen and (min-width: 768px)": {
      paddingTop: "100px",
    },
    "screen and (min-width: 380px)": {
      paddingTop: "80px",
    },
  },
});

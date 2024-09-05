import { style } from "@vanilla-extract/css";
import theme from "./theme.css";

export const wrapper = style({
  marginTop: theme.padding.large,
  marginBottom: theme.padding.large,
});

export const flexCenter = style({
  display: "flex",
  alignItems: "center",
});
export const flexAllCenter = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const flexColumnAllCenter = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

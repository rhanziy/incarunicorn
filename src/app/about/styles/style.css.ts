import theme from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  marginTop: theme.margin.base,
  height: 150,
  display: "flex",
  alignItems: "center",
  gap: "3%",
});

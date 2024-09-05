import { style } from "@vanilla-extract/css";
import theme from "../styles/theme.css";

export const writeReviewWrapper = style({
  marginTop: theme.padding.base,
  maxWidth: theme.device.desktop,
});
export const writeReviewBox = style({
  display: "flex",
  justifyContent: "flex-end",
  cursor: "pointer",
});
export const writeReviewForm = style({
  display: "flex",
  flexDirection: "row",
  gap: 8,
});

export const formBtn = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const reviewWrapper = style({
  paddingTop: theme.padding.base,
  paddingBottom: theme.padding.base,
  display: "flex",
  flexWrap: "wrap",
  gap: "20px 2%",
});

export const reviewContainer = style({
  padding: theme.padding.base,
  borderRadius: 8,
  backgroundColor: "white",
  filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15))",
});
export const nameContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexGrow: 1,
  gap: "1%",
});

export const modalContainer = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: theme.padding.base,
  paddingBottom: theme.padding.base,
  paddingLeft: theme.padding.large,
  paddingRight: theme.padding.large,
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: 8,
});

export const modalBtnContainer = style({
  display: "flex",
  gap: 8,
  justifyContent: "space-between",
});

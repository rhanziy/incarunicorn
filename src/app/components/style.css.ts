import { keyframes, style } from "@vanilla-extract/css";
import theme from "../styles/theme.css";

const blinkAnimation = keyframes({
  "0%": { opacity: 0 },
  "50%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const spin = keyframes({
  "0%": {
    transform: `rotate(0deg)`,
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const floatBtn = style({
  borderRadius: 8,
  padding: theme.padding.base,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  bottom: 30,
  right: 30,
  backgroundColor: "#e6d9ff",
  transition: "0.3s ease-in",
  filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15))",
  "@media": {
    "screen and (max-width:480px)": {
      padding: "0.8rem",
      bottom: 24,
      right: 24,
    },
  },
});

export const loadingBox = style({
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
});

export const spinner = style({
  border: "4px solid white",
  borderRadius: "50%",
  borderTop: "4px solid #3498db",
  width: 30,
  height: 30,
  animation: `${spin} 1s linear infinite`,
});

export const animatedDiv = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  animation: `${blinkAnimation} 1.5s infinite`,
  color: "#6f5d91",
});

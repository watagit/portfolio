import { style } from "@vanilla-extract/css";

export const container = style({
  margin: "0 auto",
  display: "flex",
  width: "90%",
  justifyContent: "space-between",
  padding: "12px 0",

  "@media": {
    "screen and (min-width: 640px)": {
      width: "66%",
    },
  },
});

export const avatarContainer = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 12,
});

export const avatar = style({
  height: 48,
  width: 48,
  borderRadius: "100%",

  "@media": {
    "screen and (min-width: 640px)": {
      height: 64,
      width: 64,
    },
  },
});

export const title = style({
  fontSize: "1.125em",
  lineHeight: "1.75em",
  color: "#333",
});

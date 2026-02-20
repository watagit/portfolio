import { globalStyle, style } from "@vanilla-extract/css";

export const styles = {
  container: style({
    display: "flex",
    flexDirection: "column",
    gap: 8,
  }),

  biography: style({
    display: "flex",
    flexDirection: "column",
    gap: 0,
    whiteSpace: "pre-line",
  }),
};

globalStyle(`${styles.biography} p`, {
  margin: 0,
});

import { style } from "@vanilla-extract/css";

export const styles = {
  container: style({
    display: "flex",
    flexDirection: "column",
    gap: 8,
  }),

  biography: style({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    whiteSpace: "pre-line",
  }),
};

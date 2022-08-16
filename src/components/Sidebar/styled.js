import { styled } from "../../stitches.config.js";

export const Sidebar = styled("sidebar", {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginTop: 10,
  padding: 15,
  gap: 10,
  width: 250,
  height: 210,
  border: "solid .4rem black",
  '& button': {
    fontFamily: 'Exo',
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    "&:hover": {
      textDecoration: "underline",
      transform: "scale(1.1)",
      transition: "400ms",
    },
  }
});
import { styled } from "@stitches/react";

export const Sidebar = styled("sidebar", {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginTop: 10,
  padding: 15,
  gap: 10,
  width: 250,
  height: 200,
  border: "solid .5rem #021844",
  '& button': {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: 18,
    fontWeight: "bold",
    color: "#021844",
    "&:hover": {
      textDecoration: "underline",
      transform: "scale(1.2)",
      transition: "400ms",
    },
  }
});
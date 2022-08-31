import { styled } from "../../stitches.config.js";

export const Sidebar = styled("div", {
  marginTop: 10,
  padding: 15,
  width: 250,
  height: 210,
  border: "solid .4rem black",
  borderRadius: 20,
  boxShadow: 'inset 0 0 .5rem black',
  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: -40,
    gap: 20,
    marginTop: -.1,
    alignItems: 'center',
  },
  '& button': {
    fontFamily: 'Exo',
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    width: 180,
    "&:hover": {
      transform: "scale(1.1)",
      transition: "200ms",
      boxShadow: '3px 3px 3px black',
      padding: 2,
    },
  },
});
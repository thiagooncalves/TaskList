import { styled } from "../../stitches.config.js";

export const Header = styled("header", {
  fontFamily: 'Exo',
  display: "flex",
  justifyContent: "center",
  border: "solid .4rem black",
  padding: 10,
  '& div': {
    display: 'flex',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    gap: 50
  }
});
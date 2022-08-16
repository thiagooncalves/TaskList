import { styled } from "../../stitches.config.js";

export const Header = styled("header", {
   fontFamily: 'Exo',
   display: "flex",
   justifyContent: "center",
   border: "solid .4rem black",
   borderRadius: 20,
   padding: 10,
   boxShadow: 'inset 0 0 .5rem black',
   '& div': {
     display: 'flex',
     alignItems: 'center',
     fontSize: 30,
     fontWeight: 'bold',
     gap: 50,
   },
});
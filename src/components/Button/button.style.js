import { styled } from "../../stitches.config.js";

export const Button = styled("button", {
        width: 90,
        fontFamily: 'Exo',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        height: 30,
        cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#363636',
        color: 'white',
        border: 'solid .15rem #363636',
    },
});
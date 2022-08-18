import { styled } from "../../stitches.config.js";

export const Table = styled("table", {
    width: '50vw',
    marginTop: 9,
    marginLeft: 10,
    height: 40,
    '& th': {
        fontFamily: 'Exo',
        border: 'solid .2rem black',
        padding: 5,
        width: 220,
        backgroundColor: 'White',
        color: 'Black',
        fontWeight: 'bold',
        boxShadow: 'inset 0 0 .3rem black',
    },
});

export const Div = styled("div", {
    display: 'flex',
})
import { styled } from "../../stitches.config.js";

export const Table = styled("table", {
    width: '50.5vw',
    marginTop: 9,
    marginLeft: 0,
    height: 40,
    '& td': {
        fontFamily: 'Exo',
        border: 'solid .2rem black',
        padding: 5,
        width: 220,
        height: 25,
        backgroundColor: 'White',
        color: 'Black',
        fontWeight: 'bold',
        boxShadow: 'inset 0 0 .3rem black',
    },
});
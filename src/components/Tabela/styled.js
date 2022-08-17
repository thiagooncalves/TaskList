import { styled } from "../../stitches.config.js";

export const Tabela = styled("tabela", {
    display: 'flex',
    width: 700,
    marginTop: 10,
    padding: 1,
    border: 'solid .1rem black',
    backgroundColor: 'black',
    '& th': {
        fontFamily: 'Exo',
        border: 'solid .1rem black',
        padding: 5,
        width: 218,
        border: 'solid .15rem white',
        backgroundColor: '#555555',
        color: 'White',
        fontWeight: 'normal',
    },
});
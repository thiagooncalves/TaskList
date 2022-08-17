import { styled } from "../../stitches.config.js";

export const Tabela = styled("tabela", {
    display: 'flex',
    width: '50vw',
    marginTop: 10,
    backgroundColor: 'black',
    '& th': {
        fontFamily: 'Exo',
        border: 'solid .1rem white',
        padding: 5,
        width: 218,
        backgroundColor: '#555555',
        color: 'White',
        fontWeight: 'normal',
    },
});
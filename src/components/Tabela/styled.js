import { styled } from "../../stitches.config.js";

export const Tabela = styled("tabela", {
    display: 'flex',
    width: '76vw',
    marginTop: 9,
    float: 'right',
    justifyContent: 'flex-start',
    '& th': {
        fontFamily: 'Exo',
        border: 'solid .2rem black',
        padding: 5,
        width: 220,
        backgroundColor: '#555555',
        color: 'White',
        fontWeight: 'normal',
    },
});
import { styled } from "../../stitches.config.js";

export const Formulario = styled("form", {
    fontFamily: 'Exo',
    margin: '15px 0px 10px 100px',
    '& label': {
        marginRight: '5px',
    },
    '& #titulo, #filtro': {
        fontFamily: 'Exo',
        width: 250,
        height: 25,
    },
    '& #descricao': {
        fontFamily: 'Exo',
        width: 250,
        marginLeft: '5px',
        height: 25,
    },
    '& button': {
        fontFamily: 'Exo',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        height: 30,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            border: 'solid .15rem black',
        }
    },
});
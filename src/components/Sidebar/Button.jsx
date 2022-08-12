import { styled } from '@stitches/react';

export const Button = styled("button", {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#021844',
    '&:hover': {
        textDecoration: 'underline',
        transform: 'scale(1.2)',
        transition: '400ms',
    }
})
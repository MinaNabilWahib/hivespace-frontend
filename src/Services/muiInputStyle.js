import { styled } from '@mui/material/styles';
import cssVariables from './cssVariables';

const CssTextFieldMui = (input) => (styled(input)({
    '& label': {
        color: cssVariables.colors(0.7).darkColor,
        fontWeight: 'bold',
        fontSize: "16px"
    },
    '& label.Mui-focused': {
        color: 'rgb(47, 47, 162)',
        fontWeight: 'bold'
    },
    '& .MuiOutlinedInput-root input': {
        padding: '11px 2px'
    },
    '& .MuiOutlinedInput-root': {
        backgroundColor: 'white',
        borderRadius: '15px',
        '& fieldset': {
            boxShadow: `0px -5px 5px ${cssVariables.colors(0.7).whiteColor}`,
            borderRadius: "15px",
            borderLeftWidth: 6,
            borderRightWidth: 6,
            padding: '8px !important',
            transition: '0.3s'

        },
        '&:hover fieldset': {
            borderColor: 'rgb(47, 47, 162)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgb(47, 47, 162)',
        },
        '&.Mui-focused svg': {
            color: 'rgb(47, 47, 162) !important',
            transform: 'rotate(360deg)',
            transformOrigin: 'center center',
            transition: '0.8s'
        },
        '&.Mui-error  svg': {
            color: 'red',
            // transform: 'rotate(360deg)',
            // transformOrigin: 'center center',
            // transition: '0.8s'
        },
    },
})
);
export default CssTextFieldMui;
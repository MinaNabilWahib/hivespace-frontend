// import './cssVariables.css';
const cssVariables = {
    colors: (alpha = 1) => ({
        primaryColor: `rgba(var(--primary-color),${alpha})`,
        primaryColorDark: `rgba(var(--primary-color_dark),${alpha})`,
        primaryColorLight: `rgba(var(--primary-color_light),${alpha})`,
        secondaryColor: `rgba(var(--secondary-color),${alpha})`,
        secondaryColorDark: `rgba(var(--secondary-color_dark),${alpha})`,
        secondaryColorLight: `rgba(var(--secondary-color_light),${alpha})`,
        whiteColor: `rgba(var(--color-white),${alpha})`,
        grayColor: `rgba(var(--color-gray),${alpha})`,
        darkColor: `rgba(var(--dark-color),${alpha})`,
        bgColor: `rgba(var(--color-background),${alpha})`,
        txtColor: `rgba(var(--color-text),${alpha})`,
        headingColor: `var(--color-heading)`,
    }),
    transitions: {
        transitionOut: 'all 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        transitionIn: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transitionHover: '0.3s all',
    },
    boxShadow: {
        shadowBlack: '0 16px 26px -10px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
    }
};

export default cssVariables;

const cssVariables = {
    colors: (alpha = 1) => ({
        primaryColor: `rgba(47, 47, 162,${alpha})`,
        primaryColorDark: `rgba(36, 37, 130,${alpha})`,
        primaryColorLight: `rgba(101, 157, 189,${alpha})`,
        secondaryColor: `rgba(246, 76, 114,${alpha})`,
        secondaryColorDark: `rgba(85, 61, 103,${alpha})`,
        secondaryColorLight: `rgba(153, 115, 142,${alpha})`,
        whiteColor: `rgba(255, 255, 255,${alpha})`,
        grayColor: `rgba(77, 77, 78,${alpha})`,
        darkColor: `rgba(31, 41, 55,${alpha})`,
        darkColor2: `rgb(42, 48, 60,${alpha})`,
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
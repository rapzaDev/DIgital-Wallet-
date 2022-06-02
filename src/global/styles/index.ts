import { COLORS, SIZES, FONTS } from '../../utils/theme';

const {
    primary, 
    secondary,
    green,
    lightGreen, 
    lime,
    emerald,
    red, 
    lightRed,
    purple,
    lightpurple,
    yellow,
    lightyellow,
    black,
    white,
    gray,
    lightGray,
    darkgray,
    transparent
} = COLORS;

const {
    base,
    font,
    radius,
    padding,
    padding2,

    // font sizes
    largeTitle,
    h1,
    h2,
    h3,
    h4,
    body1,
    body2,
    body3,
    body4,
    body5,

    // app dimensions
    width,
    height
} = SIZES;

export default {
    colors: {
        primary,
        secondary,

        green,
        lightGreen,

        lime,
        emerald,

        red,
        lightRed,

        purple,
        lightpurple,

        yellow,
        lightyellow,

        black,
        white,

        lightGray,
        gray,
        darkgray,

        transparent,
    },
    
    sizes: {
        // global sizes
        base,
        font,
        radius,
        padding,
        padding2,

        // font sizes
        largeTitle,
        h1,
        h2,
        h3,
        h4,
        body1,
        body2,
        body3,
        body4,
        body5,

        // app dimensions
        width,
        height
    },

    fonts: {
        regular: 'Roboto_400Regular',
        bold: 'Roboto_700Bold',
        black: 'Roboto_900Black',

        largeTitle: FONTS.largeTitle,

        h1: FONTS.h1,
        h2: FONTS.h2,
        h3: FONTS.h3,
        h4: FONTS.h4,

        body1: FONTS.body1,
        body2: FONTS.body2,
        body3: FONTS.body3,
        body4: FONTS.body4,
        body5: FONTS.body5,
    }
}


  
  
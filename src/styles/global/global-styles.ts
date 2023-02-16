import { globalCss } from '../stitches.config'

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '400',
      src: "url('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2'), format('woff2')"
      // unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    },
    {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: 200,
      fontDisplay: 'swap',
      src: "url(https://fonts.gstatic.com/s/manrope/v13/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59FN_G-bnTfc7AGraJwA.woff2) format('woff2')"
    }
  ],
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  'html, body': {
    fontFamily: '$body'
    // WebkitFontSmoothing: 'antialiased',
    // '&::-webkit-scrollbar': {
    //   backgroundColor: 'transparent',
    //   width: 4
    // },
    // '&::-webkit-scrollbar-track': {
    //   backgroundColor: 'transparent'
    // },
    // '&::-webkit-scrollbar-thumb': {
    //   backgroundColor: '$brand-primary-09'
    // }
  },
  a: {
    color: 'inherit',
    textDecoration: 'none'
  },
  '.main': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
})

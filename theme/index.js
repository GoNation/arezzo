// /theme/index.js

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      variants: {
        default: {
          bg: 'transparent',
          color: 'dark',
          borderColor: 'dark',
          _hover: {
            bg: 'white',
            color: 'primary',
          },
        },
        primaryFilled: {
          bg: 'dark',
          color: 'primary',
          borderColor: 'light',
          _hover: {
            bg: 'white',
            color: 'primary',
          },
        },
        unset: {
          bg: 'transparent',
          color: 'white',
          borderColor: 'white',
          _hover: {
            bg: 'white',
            color: 'primary',
          },
        },
        // ... you can add more variants here
      },
      defaultProps: {
        size: 'lg',
      },
    },
  },
});

export default theme;

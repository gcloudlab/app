import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui';

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#00b0b3',
    // primaryColorHover: '#00b0b3',
  },
  Button: {
    // textColor: '#ccc',
    // textColorHover: '#ccc',
    colorHoverPrimary: '#00b0b3',
    textColorSuccess: '#333639',
  },
  Modal: {
    boxShadow: '5px 5px 5px rgba(0, 0, 0, 1)',
  },
  Badge: {
    colorWarning: 'grey',
    peers: {},
  },
};

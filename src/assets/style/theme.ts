import { GlobalThemeOverrides, MessageProviderProps } from 'naive-ui';

export const primaryColor = '#00b0b3'; // 薄荷
export const primaryActiveColor = '#00a0a3'; // 薄荷
export const infoColor = '#66b0ff'; // 蓝
export const infoActiveColor = '#66b0ff'; // 蓝
export const successColor = '#00b850'; // 死绿
export const warningColor = '#eed477'; // 砖红
export const errorColor = '#ff6666'; // 酒红

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: primaryColor,
    infoColor: infoColor,
    successColor: successColor,
    warningColor: warningColor,
    errorColor: errorColor,
    // primaryColorHover: '#00b0b3',
  },
  Button: {
    // textColor: '#ccc',
    // textColorHover: '#ccc',
    // colorPrimary: primaryColor,
    colorHoverPrimary: primaryActiveColor,
    colorPressedPrimary: primaryActiveColor,
    colorFocusPrimary: primaryActiveColor,
    // colorFocusPrimary: primaryColor,

    // textColorHoverPrimary: primaryColor,
    // textColorFocusPrimary: primaryColor,
    // textColorPressedPrimary: primaryColor,

    // textColorSuccess: '#333639',
    // textColorInfo: infoColor,
    // textColorPrimary: primaryColor,
    // textColorWarning: warningColor,
    // textColorError: errorColor,

    colorHoverInfo: infoActiveColor,
    colorPressedInfo: infoActiveColor,
    // colorFocusInfo: infoColor,
    // colorDisabledInfo: infoColor,

    // borderInfo: `1px dashed ${infoColor}`,
    // borderHoverInfo: `1px solid ${infoColor}`,
    // borderFocusInfo: `1px solid ${infoColor}`,
    // borderPressedInfo: `1px solid ${infoColor}`,
  },
  Modal: {
    // boxShadow: '5px 5px 5px rgba(0, 0, 0, 1)',
  },
  Badge: {
    colorWarning: 'grey',
    peers: {},
  },
  Tabs: {
    tabTextColorActiveLine: primaryColor,
  },
};

export type MessageThemeOverrides = NonNullable<MessageProviderProps['themeOverrides']>;
export const messageThemeOverrides: MessageThemeOverrides = {
  // colorWarning: '#e2e52a',
  // textColorWarning: '#e2e52a',
  // iconColorWarning: 'cyan',
  boxShadowWarning: '2px 2px 4px #b6b6b6',
  boxShadowError: '2px 2px 4px #b6b6b6',
};

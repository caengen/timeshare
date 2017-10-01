export const sizes = {
  extraSmallDevice: 480,
  smallDevice: 768,
  mediumDevice: 1024,
  largeDevice: 1280
};

export const fontSizes = {
  base: 16,
};

export const baseWidth = 960;

export const rem = (pxUnit: number) => `${pxUnit / fontSizes.base}rem`;
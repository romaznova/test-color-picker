import React from 'react';

export const numberToHex = (number: number) => {
  const hex = number.toString(16);

  if (hex.length < 2) {
    return '0' + hex;
  }

  return hex;
};

export const rgbToHex = (r: number, g: number, b: number) =>
  `#${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}`;

export const hexToRgb = (color: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hex = color.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!rgb) {
    return null;
  }
  return {
    r: parseInt(rgb[1], 16),
    g: parseInt(rgb[2], 16),
    b: parseInt(rgb[3], 16),
  };
};

export const normalizeHex = (hex: string) => {
  if (/^#[0-9A-F]{6}$/i.test(hex) || /^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
    return hex;
  }

  return '#ffffff';
};

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  cb: Function
) => {
  React.useEffect(() => {
    const handleClickOutside = (e: React.BaseSyntheticEvent) => {
      if (ref?.current && !ref.current.contains(e.target)) {
        cb();
      }
    };
    // @ts-ignore
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // @ts-ignore
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cb, ref]);
};

import { R, G, B, ALL } from '@actions';
import { IRGBColor } from '@interfaces';

export const rgbPickerReducer = (
  state: IRGBColor,
  action: { type: string; payload: number | IRGBColor }
) => {
  switch (action.type) {
    case R:
      return Object.assign({}, state, { r: action.payload });
    case G:
      return Object.assign({}, state, { g: action.payload });
    case B:
      return Object.assign({}, state, { b: action.payload });
    case ALL:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

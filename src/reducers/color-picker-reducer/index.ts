import { SET_COLOR } from '@actions';
import { IDropdownItem } from '@interfaces';

export const colorPickerReducer = (
  state: { colors: Array<IDropdownItem>; value: string },
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case SET_COLOR:
      return Object.assign({}, state, { value: action.payload });
    default:
      return state;
  }
};

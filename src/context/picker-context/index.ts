import { createContext, useContext } from 'react';
import { SET_COLOR } from '@actions';

export const PickerContext = createContext([]);

export const usePickerContext = () => {
  const [state, dispatch, callback] = useContext(PickerContext);
  return {
    state,
    setColor: (payload: string) => {
      dispatch({ type: SET_COLOR, payload });
      callback(payload);
    },
  };
};

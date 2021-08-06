import React, { useReducer } from 'react';
import { PickerContext } from '@context';
import { IDropdownItem } from '@interfaces';
import { RGBPicker, ColorsList } from '@components';
import { HEXViewer } from '@containers';
import { normalizeHex } from '@helpers';
import { colorPickerReducer } from '@reducers';
import './style.scss';

interface IProps {
    value: string;
    colors: Array<IDropdownItem>;
    onChange: (e: string) => void;
}

export const ColorPicker = ({ value: defaultValue, colors, onChange }: IProps) => {
    const normalizedValue = normalizeHex(defaultValue);
    const [state, dispatch] = useReducer(colorPickerReducer, { colors, value: normalizedValue });

    return (
        <PickerContext.Provider value={[state, dispatch, onChange]}>
            <div className="c-color-picker">
                <HEXViewer color={state.value} />
                &nbsp;|&nbsp;
                <RGBPicker />
                &nbsp;|&nbsp;
                <ColorsList />
            </div>
        </PickerContext.Provider>
    )
}
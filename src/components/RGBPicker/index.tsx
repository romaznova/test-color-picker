import React, { useRef, useState, useCallback } from 'react';
import { usePickerContext } from '@context';
import { useOutsideClick, hexToRgb, rgbToHex } from '@helpers';
import { RGBPickerViewer } from '@containers';
import { rgbPickerReducer } from '@reducers';
import { R, G, B, ALL } from '@actions';

const useRGB = (initialColor: string) => {
    const rgb = hexToRgb(initialColor);
    const [rgbColor, dispatch] = React.useReducer(rgbPickerReducer, rgb);
    const hexColor = rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b);
    return {
        rgbColor,
        hexColor,
        setR: (payload: number) => dispatch({ type: R, payload }),
        setG: (payload: number) => dispatch({ type: G, payload }),
        setB: (payload: number) => dispatch({ type: B, payload }),
        setAll: (payload: string) => dispatch({ type: ALL, payload: hexToRgb(payload) })
    }
}

export const RGBPicker = () => {
    const { state, setColor } = usePickerContext();
    const refEl = useRef(null);
    const { rgbColor, hexColor, setR, setG, setB, setAll } = useRGB(state.value);
    const [isOpen, setIsOpen] = useState(false);
    const handleOutsideClick = useCallback(() => {
        if (!isOpen) {
            return
        }

        setIsOpen(false);
        setAll(state.value);
    }, [refEl, isOpen]);

    useOutsideClick(refEl, handleOutsideClick);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name: inputName, value } = e.currentTarget;
        switch (inputName) {
            case R:
                return setR(Number(value));
            case G:
                return setG(Number(value));
            case B:
                return setB(Number(value));
            default:
                return
        }
    }

    const handleSubmit = () => {
        setColor(hexColor);
        setIsOpen(false);
    }

    React.useEffect(() => {
        setAll(state.value);
    }, [state.value, isOpen]);

    return (
        <RGBPickerViewer
            refEl={refEl}
            isOpen={isOpen}
            toggleIsOpen={toggleIsOpen}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            rgbColor={rgbColor}
            hexColor={hexColor}
        />
    )
}
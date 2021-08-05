import React, { useRef, useState, useCallback } from 'react';
import { usePickerContext } from '@context';
import { useOutsideClick, hexToRgb, rgbToHex } from '@helpers';
import { ColorBox } from '@containers';
import { rgbPickerReducer } from '@reducers';
import { R, G, B, ALL } from '@actions';
import './style.scss';

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
    const hangleClose = useCallback(() => {
        if (!isOpen) {
            return
        }

        setIsOpen(false);
        setAll(state.value);
    }, [refEl, isOpen]);

    useOutsideClick(refEl, hangleClose);

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
        <div className="c-rgb-picker" ref={refEl}>
            <div onClick={() => setIsOpen(!isOpen)}>
                <ColorBox color={hexColor} />
            </div>
            {isOpen && (
                <div className="c-rgb-picker__inner">
                    <div className="c-rgb-picker__item">
                        R
                        <input type="range" min="0" max="255" name={R} value={rgbColor.r} onChange={handleChange} />
                    </div>
                    <div className="c-rgb-picker__item">
                        G
                        <input type="range" min="0" max="255" name={G} value={rgbColor.g} onChange={handleChange} />
                    </div>
                    <div className="c-rgb-picker__item">
                        B
                        <input type="range" min="0" max="255" name={B} value={rgbColor.b} onChange={handleChange} />
                    </div>

                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                    <button onClick={handleSubmit}>Save</button>
                </div>
            )}
        </div>
    )
}
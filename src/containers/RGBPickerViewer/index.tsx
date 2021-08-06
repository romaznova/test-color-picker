import React from 'react';
import { ColorBox } from '@containers';
import { IRGBColor } from '@interfaces';
import { R, G, B } from '@actions';
import './style.scss';

interface IProps {
    refEl: React.RefObject<HTMLDivElement>;
    hexColor: string;
    rgbColor: IRGBColor;
    isOpen: boolean;
    handleChange: (e: React.SyntheticEvent) => void;
    toggleIsOpen: () => void;
    handleSubmit: () => void;
}

export const RGBPickerViewer = ({ refEl, hexColor, rgbColor, isOpen, toggleIsOpen, handleChange, handleSubmit }: IProps) => {
    return (
        <div className="c-rgb-picker" ref={refEl}>
            <div className="c-rgb-picker__placeholder" onClick={toggleIsOpen}>
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

                    <div className="c-rgb-picker__buttons">
                        <button className="cancel" onClick={toggleIsOpen}>Cancel</button>
                        <button className="success" onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            )}
        </div>
    )
}
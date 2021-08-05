import React from 'react';
import { hexToRgb } from '@helpers'
import './style.scss';

interface IProps {
    color: string;
}

export const ColorBox = ({ color }: IProps) => {
    const { r, g, b } = hexToRgb(color);
    return <div className="c-color-box" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}></div>
}
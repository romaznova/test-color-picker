import React from 'react';
import './style.scss';

interface IProps {
    color: string;
}

export const ColorBox = ({ color }: IProps) => {
    return <div className="c-color-box" style={{ backgroundColor: color }}></div>
}
import React from 'react';
import './style.scss';

interface IProps {
    color: string;
}

export const HEXViewer = ({ color }: IProps) => {
    return (
        <div className="c-hex-viewer">
            {color}
        </div>
    )
}
import React from 'react';
import './style.scss';

export const ColorPickerViewer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="c-color-picker">
            {children}
        </div>
    )
}
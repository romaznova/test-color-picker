import React from 'react';
import { usePickerContext } from '@context';
import './style.scss';

export const HEXViewer = () => {
    const { state } = usePickerContext();
    return (
        <div className="c-hex-viewer">
            {state.value}
        </div>
    )
}
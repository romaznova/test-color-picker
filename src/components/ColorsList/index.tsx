import React, { useState, useRef } from 'react';
import { ColorsListViewer } from '@containers';
import { usePickerContext } from '@context';
import { useOutsideClick } from '@helpers';

export const ColorsList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { state, setColor } = usePickerContext();
    const refEl = useRef(null);
    useOutsideClick(refEl, () => setIsOpen(false));

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const handleColorClick = (color: string) => {
        setColor(color);
        setIsOpen(false);
    }

    return (
        <ColorsListViewer
            handleColorClick={handleColorClick}
            colors={state.colors}
            isOpen={isOpen}
            refEl={refEl}
            toggleIsOpen={toggleIsOpen}
        />
    )
}
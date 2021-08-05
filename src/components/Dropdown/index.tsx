import React, { useState, useRef } from 'react';
import { ColorBox } from '@containers';
import { usePickerContext } from '@context';
import { IDropdownItem } from '@interfaces';
import { useOutsideClick } from '@helpers';
import './style.scss';

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { state, setColor } = usePickerContext();
    const refEl = useRef(null);
    useOutsideClick(refEl, () => setIsOpen(false));

    const handleColorClick = (color: string) => {
        setColor(color);
        setIsOpen(false);
    }

    return (
        <div className="c-dropdown" ref={refEl}>
            <div className="c-dropdown__placeholder" onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
                <div className="c-dropdown__inner">
                    <ul>
                        {state.colors.map((e: IDropdownItem, i: number) => {
                            return (
                                <li
                                    key={i}
                                    onClick={() => handleColorClick(e.color)}
                                    className="c-dropdown-item"
                                >
                                    <span className="c-dropdown-item__title">
                                        {e.title}
                                    </span>
                                    <ColorBox color={e.color} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div >
    )
}
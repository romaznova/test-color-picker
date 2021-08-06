import React from 'react';
import { ColorBox } from '@containers';
import { IDropdownItem } from '@interfaces';
import './style.scss';

interface IProps {
    refEl: React.RefObject<HTMLDivElement>;
    isOpen: boolean;
    colors: Array<IDropdownItem>;
    handleColorClick: (e: string) => void;
    toggleIsOpen: () => void;
}

export const ColorsListViewer = ({ refEl, isOpen, colors, handleColorClick, toggleIsOpen }: IProps) => {
    return (
        <div className="c-colors-list" ref={refEl}>
            <div className="c-colors-list__placeholder" onClick={toggleIsOpen} />
            {isOpen && (
                <div className="c-colors-list__inner">
                    <ul>
                        {colors.map((e: IDropdownItem, i: number) => {
                            return (
                                <li
                                    key={i}
                                    onClick={() => handleColorClick(e.color)}
                                >
                                    <span>
                                        {e.title}
                                    </span>
                                    <ColorBox color={e.color} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}
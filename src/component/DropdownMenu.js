import React, { useState } from 'react';
import './DropdownMenu.css';


function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div className="menu-option">
                <div className="dropdown-header" onClick={toggleMenu}>
                    Vous voulez ▼
                </div>
                {isOpen && (
                    <ul>
                        <li>Découvrir nos fromations</li>
                    </ul>
                )}
                <div className="welcome">
                    Welcode
                </div>
                <div className="actualité">
                    Nos Actualités
                </div>
            </div>
        </div>
    );
}

export default DropdownMenu;
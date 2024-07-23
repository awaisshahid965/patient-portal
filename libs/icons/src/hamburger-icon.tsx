import React, { FC } from 'react'
interface hamburgerProps {
    handleClick: React.MouseEventHandler<HTMLDivElement>
    isSidebarOpen: boolean
}
const HamburgerIcon: FC<hamburgerProps> = ({ handleClick, isSidebarOpen }) => {
    return (
        <div className={`hamburger ${isSidebarOpen ? 'is-active' : ''}`} id="hamburger-12" onClick={handleClick}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
    )
}

export default HamburgerIcon

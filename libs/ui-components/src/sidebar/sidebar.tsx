'use client'
import React, { FC, useState } from 'react'
import { sidebarData, sidebarItem, subItem } from 'src/shared/constants'
interface sidebarProps {
    isSidebarOpen: boolean
}
const Sidebar: FC<sidebarProps> = ({ isSidebarOpen }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    return (
        <section
            className={`p-8 pt-0 bg-white w-[260px] transform translate-x-0 transition-all duration-300 fixed md:relative z-10 md:min-h-auto top-[80px] md:top-0 bottom-0  ${isSidebarOpen ? 'translate-x-0' : 'translate-x-[-260px] md:translate-x-0'}`}
        >
            <ul className="list-none">
                {sidebarData.map((item: sidebarItem, index: number) => (
                    <li key={index} className="flex flex-col space-y-3 3xl:text-xl text-lg pb-4">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={item.subItems ? toggleDropdown : undefined}
                        >
                            <div className="flex items-center space-x-3 cursor-pointer">
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                            {item.subItems && <span className="text-base">{dropdownOpen ? '▲' : '▼'}</span>}
                        </div>
                        {item.subItems && dropdownOpen && (
                            <ul className="ml-8 mt-2 list-none">
                                {item.subItems.map((subItem: subItem, subIndex: number) => (
                                    <li key={subIndex} className="text-base pb-3 last:pb-0">
                                        {subItem.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Sidebar

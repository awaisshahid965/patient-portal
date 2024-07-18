'use client'
import React, { useState } from 'react'
import { MedflowLogo, InboxIcon, PatientIcon, OrderIcon, InvoiceIcon } from '@medflow/icons'

const Sidebar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const data = [
        {
            name: 'Inbox',
            icon: <InboxIcon />,
        },
        {
            name: 'Patient',
            icon: <PatientIcon />,
        },
        {
            name: 'Orders',
            icon: <OrderIcon />,
            subItems: [{ name: 'Pending Orders' }, { name: 'Completed Orders' }, { name: 'Total Orders' }],
        },
        {
            name: 'Invoice',
            icon: <InvoiceIcon />,
        },
    ]

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    return (
        <section className="p-8 bg-white shadow-sm">
            <MedflowLogo secondLayer="#26335a" width="180px" />
            <ul className="mt-6 list-none">
                {data.map((item, index) => (
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
                                {item.subItems.map((subItem, subIndex) => (
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

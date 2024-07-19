'use client'
import React, { useState } from 'react'
import { Card, DoubleBarChart, DropDownMenu, Sidebar, Topbar, DoughnutChart } from '@medflow/ui-components'
import { GarageUpdateIcon, OrderWithTickIcon, TotalOrderIcon, UserIcon } from '@medflow/icons'

const DashboardPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Months')
    const cardData = [
        {
            icon: <UserIcon />,
            title: '23',
            description: 'New Patients',
        },
        {
            icon: <GarageUpdateIcon />,
            title: '11',
            description: 'Updates Required',
        },
        {
            icon: <OrderWithTickIcon />,
            title: '86',
            description: 'Open Orders',
        },
        {
            icon: <TotalOrderIcon />,
            title: '23',
            description: 'Total Orders',
        },
    ]
    const labels = ['May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023']
    const data1 = [30, 60, 100, 40, 120, 90]
    const data2 = [70, 90, 80, 60, 130, 70]

    const optionsValues = ['Months', 'Years', 'Quarters']

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option: string) => {
        setSelectedOption(option)
        setIsOpen(false) // Close dropdown after selection
    }

    // Doughnut chart data

    const ordersChartData = {
        labels: ['Total Orders', 'Open Orders'],
        datasets: [
            {
                data: [72, 28],
            },
        ],
    }
    const orderTypeChartData = {
        labels: ['Toxicology', 'Microbiology', 'Respiratory', 'Cytology', 'Biopsy', 'Persumptive Elligibility'],
        datasets: [
            {
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
            },
        ],
    }
    return (
        <>
            <section className="flex justify-start w-full min-h-[100vh] bg-body-color">
                <Sidebar />
                <main className="flex-1">
                    <Topbar portalName="Portal" pageName="Dashboard" userName="Dr. John Smith" />
                    <section className="w-full p-5">
                        <div className="bg-white p-5 rounded-xl">
                            <div className="flex flex-wrap space-x-5 w-full">
                                {cardData.map((item, index) => (
                                    <Card
                                        key={index}
                                        cardWidth="DashboardCardWidth"
                                        title={item.title}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                ))}
                            </div>
                            <section className="pt-5 flex gap-4">
                                <div className="max-w-[70%] w-full shadow-md py-4 rounded-md">
                                    <div className="p-4 pt-0 border-b-2 border-b-gray-200 flex items-center justify-between w-full">
                                        <p className="pg">Total Orders Overtime</p>
                                        <div className="flex items-center">
                                            <span className="text-gray-500 text-lg 3xl:text-xl pr-1">Show</span>
                                            <DropDownMenu
                                                optionsValues={optionsValues}
                                                handleOptionClick={handleOptionClick}
                                                toggleDropdown={toggleDropdown}
                                                selectedOption={selectedOption}
                                                isOpen={isOpen}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-4 pt-4 px-4">
                                        <div className="max-w-[70%] w-full pr-10">
                                            <DoubleBarChart data1={data1} data2={data2} labels={labels} />
                                        </div>
                                        <div className="w-full max-w-[26%] flex justify-end pt-12">
                                            <DoughnutChart data={ordersChartData} value="28%" />
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-[30%] w-full">
                                    <div className="shadow-md py-4 rounded-md">
                                        <div className="p-4 pt-0 border-b-2 border-b-gray-200 flex items-center justify-between w-full">
                                            <p className="pg">Orders Type</p>
                                        </div>
                                        <div className="max-w-[68%] pt-14 mx-auto">
                                            <DoughnutChart data={orderTypeChartData} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </main>
            </section>
        </>
    )
}

export default DashboardPage

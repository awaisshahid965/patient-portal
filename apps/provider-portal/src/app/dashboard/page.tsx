'use client'
import React, { useState } from 'react'
import { Card, DoubleBarChart, DropDownMenu, Sidebar, Topbar, DoughnutChart, Table } from '@medflow/ui-components'
import {
    dashboardCardData,
    ordersChartData,
    orderTypeChartData,
    doublesBarChartData,
    optionsValues,
    billedByMonthInfo,
    invoiceTableData,
    invoicesTableCustomStyles,
} from 'src/shared/constants'
import { EyeIcon, MessageIcon } from '@medflow/icons'
import BilledByMonthInfo from './billed-by-month-info'
const DashboardPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Months')
    const [isSidebarOpen, setIsSidebaropen] = useState(false)

    interface invoiceTableRowProps {
        date: string
        lab: string
        invoiceNumber: string
        description: string
    }

    const handleClickHamburger = () => {
        setIsSidebaropen(!isSidebarOpen)
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option: string) => {
        setSelectedOption(option)
        setIsOpen(false)
    }

    const invoicesTableColumns = [
        {
            name: <b>Date</b>,
            selector: (row: invoiceTableRowProps) => row.date,
            sortable: true,
            width: '15%',
        },
        {
            name: <b>Lab</b>,
            selector: (row: invoiceTableRowProps) => row.lab,
            sortable: true,
            width: '15%',
            wrap: true,
        },
        {
            name: <b>Invoice Number</b>,
            selector: (row: invoiceTableRowProps) => row.invoiceNumber,
            sortable: true,
            width: '20%',
            wrap: true,
        },
        {
            name: <b>Description</b>,
            selector: (row: invoiceTableRowProps) => row.description,
            sortable: true,
            width: '30%',
            wrap: true,
            cell: (row: invoiceTableRowProps) => <div className="text-ellipsis-one-line">{row.description}</div>,
        },
        {
            name: <b>View</b>,
            selector: () => <EyeIcon width={22} />,
            sortable: false,
            width: '81px',
            wrap: true,
        },
        {
            name: <b>Details</b>,
            selector: () => <MessageIcon width={22} />,
            sortable: false,
            width: '81px',
            wrap: true,
        },
    ]

    return (
        <section className="w-full min-h-[100vh] bg-body-color">
            <Topbar
                portalName="Portal"
                handleClickHamburger={handleClickHamburger}
                isSidebarOpen={isSidebarOpen}
                pageName="Dashboard"
                userName="Dr. John Smith"
            />
            <section className="flex justify-start ">
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <main className="flex-1 md:w-aut w-full">
                    <section className="w-full md:p-5 px-3 pt-[80px] ">
                        <div className="bg-white p-3 md:p-5 rounded-xl">
                            <div className="flex flex-wrap gap-4 w-full">
                                {dashboardCardData.map((item, index) => (
                                    <Card
                                        key={index}
                                        cardWidth="DashboardCardWidth"
                                        title={item.title}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                ))}
                            </div>
                            <section className="pt-5 flex flex-col md:flex-row gap-4">
                                <div className="md:max-w-[70%] max-w-full w-full shadow-md py-4 rounded-md">
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
                                    <div className="flex flex-col md:flex-row gap-4 pt-4 px-4">
                                        <div className="md:max-w-[70%] max-w-full w-full md:pr-10 pr-0">
                                            <DoubleBarChart data={doublesBarChartData} />
                                        </div>
                                        <div className="w-full md:max-w-[26%] max-w-full flex justify-end pt-12">
                                            <DoughnutChart data={ordersChartData} value="28%" />
                                        </div>
                                    </div>
                                </div>

                                <div className="md:max-w-[30%] max-w-full w-full">
                                    <div className="shadow-md py-4 rounded-md">
                                        <div className="p-4 pt-0 border-b-2 border-b-gray-200 flex items-center justify-between w-full">
                                            <p className="pg">Orders Type</p>
                                        </div>
                                        <div className="md:max-w-[68%] max-w-full md:pt-14 pt-4 mx-auto">
                                            <DoughnutChart data={orderTypeChartData} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="pt-5 flex flex-col md:flex-row gap-4 w-full">
                                <div className="md:max-w-[70%] max-w-full w-full shadow-md py-4 rounded-md">
                                    <div className="flex justify-between items-center px-4 mb-4">
                                        <div className="flex flex-wrap items-center gap-x-12">
                                            <p className="pg">Open Invoices</p>
                                            <p className="text-sm text-primary-text-color display-sb">
                                                <strong className="inline-block text-anchor-color display-sb text-xl">
                                                    39
                                                </strong>
                                                /126
                                            </p>
                                            <div className="pg inline-flex items-center space-x-6">
                                                <span className="text-anchor-color inline-block text-3xl mr-2 leading-none">
                                                    •
                                                </span>
                                                Open
                                                <span className="inline-block text-3xl text-primary-text-color !mr-2 leading-none">
                                                    •
                                                </span>
                                                Total
                                            </div>
                                        </div>
                                        <p className="pg text-gray-500">See All</p>
                                    </div>
                                    <Table
                                        customStyles={invoicesTableCustomStyles}
                                        columns={invoicesTableColumns}
                                        data={invoiceTableData}
                                    />
                                </div>
                                <div className="md:max-w-[30%] max-w-full w-full">
                                    <div className="shadow-md py-4 rounded-md">
                                        <div className="px-4">
                                            <p className="pg text-black">Total Billed by Month</p>
                                            <strong className="text-primary-blue text-3xl 3xl:text-5xl py-4 inline-block">
                                                $1,267.00
                                            </strong>
                                        </div>
                                        <div className="px-3">
                                            {billedByMonthInfo.map((item, index) => (
                                                <BilledByMonthInfo item={item} key={index} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </main>
            </section>
        </section>
    )
}

export default DashboardPage

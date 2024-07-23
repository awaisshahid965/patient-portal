import React from 'react'
import {
    GarageUpdateIcon,
    OrderWithTickIcon,
    TotalOrderIcon,
    UserIcon,
    InboxIcon,
    PatientIcon,
    OrderIcon,
    InvoiceIcon,
} from '@medflow/icons'

// sidebar data
export interface subItem {
    name: string
}
export interface sidebarItem {
    name: string
    icon: JSX.Element
    subItems?: subItem[]
}
export const sidebarData: sidebarItem[] = [
    {
        name: 'Inbox',
        icon: React.createElement(InboxIcon),
    },
    {
        name: 'Patient',
        icon: React.createElement(PatientIcon),
    },
    {
        name: 'Orders',
        icon: React.createElement(OrderIcon),
        subItems: [{ name: 'Pending Orders' }, { name: 'Completed Orders' }, { name: 'Total Orders' }],
    },
    {
        name: 'Invoice',
        icon: React.createElement(InvoiceIcon),
    },
]
// dashboard card data
export const dashboardCardData = [
    {
        icon: React.createElement(UserIcon),
        title: '23',
        description: 'New Patients',
    },
    {
        icon: React.createElement(GarageUpdateIcon),
        title: '11',
        description: 'Updates Required',
    },
    {
        icon: React.createElement(OrderWithTickIcon),
        title: '86',
        description: 'Open Orders',
    },
    {
        icon: React.createElement(TotalOrderIcon),
        title: '23',
        description: 'Total Orders',
    },
]

// dashboard doubles bar chart data

export const doublesBarChartData = [
    {
        label: 'May 2023',
        data1: 30,
        data2: 70,
    },
    {
        label: 'Jun 2023',
        data1: 60,
        data2: 90,
    },
    {
        label: 'Jul 2023',
        data1: 100,
        data2: 80,
    },
    {
        label: 'Aug 2023',
        data1: 40,
        data2: 60,
    },
    {
        label: 'Sep 2023',
        data1: 120,
        data2: 130,
    },
    {
        label: 'Oct 2023',
        data1: 90,
        data2: 70,
    },
]

// dashboard dropdown menu data
export const optionsValues = ['Months', 'Years', 'Quarters']

// Dashboard Orders chart data

export const ordersChartData = {
    labels: ['Total Orders', 'Open Orders'],
    datasets: [
        {
            data: [72, 28],
        },
    ],
}

// dashbaord Orders Type chart data

export const orderTypeChartData = {
    labels: ['Toxicology', 'Microbiology', 'Respiratory', 'Cytology', 'Biopsy', 'Persumptive Elligibility'],
    datasets: [
        {
            data: [12, 6, 8, 7, 6, 7],
            backgroundColor: ['#FA9896', '#6800FF', '#FFC20A', '#FD873E', '#58D6B1', '#4396FE'],
        },
    ],
}

export const billedByMonthInfo = [
    {
        week: 'Week 1',
        price: '$356.00',
    },
    {
        week: 'Week 2',
        price: '$241.00',
    },
    {
        week: 'Week 3',
        price: '$178.00',
    },
    {
        week: 'Week 4',
        price: '$492.00',
    },
]
// open invoices table data

export const invoiceTableData = [
    {
        date: '09/08/2023',
        lab: 'Aetna Medicare',
        invoiceNumber: '12345-9902',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        date: '09/08/2023',
        lab: 'Aetna Medicare',
        invoiceNumber: '12345-9902',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        date: '09/08/2023',
        lab: 'Aetna Medicare',
        invoiceNumber: '12345-9902',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        date: '09/08/2023',
        lab: 'Aetna Medicare',
        invoiceNumber: '12345-9902',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
]
export const invoicesTableCustomStyles = {
    header: {
        style: {
            backgroundColor: '#f7f7f7',
        },
    },
    rows: {
        style: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    },
    tableWrapper: {
        style: {
            display: 'block',
            overflowX: 'auto',
        },
    },
    headCells: {
        style: {
            fontFamily: 'display-regular',
            fontSize: '14px',
            fontWeight: '400',
            textDecoration: 'underline',
            color: '#5890ff',
            backgroundColor: '#f7f7f7',
            padding: '6px 8px',
            letterSpacing: '1px',
        },
    },
    cells: {
        style: {
            padding: '6px 8px',
            fontSize: '14px',
            color: '#26335a',
        },
    },
}

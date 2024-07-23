// DonutChart.tsx
import React, { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { ChartOptions } from 'chart.js'

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend, Title)

interface DoughnutChartProps {
    value?: string
    data: {
        labels: string[]
        datasets: {
            data: number[]
            backgroundColor?: string[]
            borderColor?: string[]
            borderWidth?: number
        }[]
    }
    options?: ChartOptions<'doughnut'>
}

const defaultOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                pointStyle: 'disk',
                color: '#25335A',
            },
        },
    },
    cutout: '90%',
}

const DoughnutChart: FC<DoughnutChartProps> = ({ data, options = defaultOptions, value }) => {
    const defaultColors = ['#25335A', '#5591FF']
    const defaultBorderWidth = 1
    const defaultBorderColor = '#fff'

    const modifiedData = {
        ...data,
        datasets: data.datasets.map((dataset) => ({
            ...dataset,
            backgroundColor: dataset.backgroundColor || defaultColors,
            borderColor: dataset.borderColor || Array(dataset.data.length).fill(defaultBorderColor),
            borderWidth: dataset.borderWidth || defaultBorderWidth,
        })),
    }

    return (
        <div className="chart-container relative w-full">
            {value && (
                <p className="text-2xl text-gray-700 display-sb absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-7">
                    {value}
                </p>
            )}
            <Doughnut className="" data={modifiedData} options={options} />
        </div>
    )
}

export default DoughnutChart

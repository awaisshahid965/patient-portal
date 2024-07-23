'use client'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface DataPoint {
    label: string
    data1: number
    data2: number
}

interface DoubleBarChartProps {
    data: DataPoint[]
}

const DoubleBarChart: React.FC<DoubleBarChartProps> = ({ data }) => {
    const labels = data.map((item) => item.label)
    const data1 = data.map((item) => item.data1)
    const data2 = data.map((item) => item.data2)

    const chartData: ChartData<'bar'> = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: data1,
                backgroundColor: '#5591FF',
                borderColor: '#5591FF',
                borderWidth: 1,
                borderRadius: {
                    topLeft: 10,
                    topRight: 10,
                },
                maxBarThickness: 10,
            },
            {
                label: 'Dataset 2',
                data: data2,
                backgroundColor: '#25335A',
                borderColor: '#25335A',
                borderWidth: 1,
                borderRadius: {
                    topLeft: 10,
                    topRight: 10,
                },
                maxBarThickness: 10,
            },
        ],
    }

    const options: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                type: 'category',
                labels: labels,
                ticks: {
                    font: {
                        size: 10,
                    },
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                min: 0,
                max: 150,
                ticks: {
                    stepSize: 50,
                },
            },
        },
    }

    return (
        <div className="">
            <Bar data={chartData} options={options} />
        </div>
    )
}

export default DoubleBarChart

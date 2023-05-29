import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

function LineChart({ hourlyData,hourlyDataToString }) {

    const data = {
        labels: ['12 am', '6 am', '8 am', '10 am', '12 pm', '2 pm', '4 pm', '6 pm', '8 pm', '10 pm'],
        datasets: [{
            label: 'Temperature °C',
            data: hourlyData,
            borderWidth: 3,
            borderColor: '#CF7AC3',
        }]

    }


    const options = {
        // layout: {
        //     padding: 100
        // },
        elements: {
            point: {
                radius: 0
            }
        },
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false
            }
        },
        tension: 0.4,
        scales: {

            x: {
                grid: {
                    display: true,
                    color: 'white',
                    lineWidth: 2,
                    tickLength: 0
                },
                ticks: {
                    padding: 10
                },
                border: {
                    display: false
                }
            },

            y: {
                beginAtZero: true,
                position: 'right',
                ticks: {
                    display: false
                },
                grid: {
                    display: false
                }
            },
            x2: {
                position: 'top',
                labels: hourlyDataToString,
                grid: {
                    display: false
                },
                ticks: {
                    padding: 8
                },
                border: {
                    display: false
                }
            },

        }
    }

    return (
        <>
            {hourlyData && <Line data={data} options={options} />}
        </>

    )
}

export default LineChart
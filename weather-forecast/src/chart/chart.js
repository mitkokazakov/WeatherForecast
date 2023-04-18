const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['6 am', '8 am', '10 am', '12 pm', '2 pm', '4 pm', '6 pm', '8 pm', '10 pm', '12 pm'],
        datasets: [{
            label: 'Temperature °C',
            data: [3, 5, 6, 10, 14, 13, 10, 8, 4, 2],
            borderWidth: 3,
            borderColor: '#CF7AC3',
        }]
    },
    options: {
        // layout: {
        //     padding: 100
        // },
        elements: {
            point:{
                radius: 0
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        tension: 0.4,
        scales: {
            
            x:{
                grid:{
                    display: true,
                    color: 'white',
                    lineWidth: 2,
                    tickLength: 0
                },
                ticks:{
                    padding: 10
                },
                border:{
                    display: false
                }
            },
            
            y: {
                beginAtZero: true,
                position: 'right',
                ticks:{
                    display:false
                },
                grid:{
                    display: false
                }
            },
            x2: {
                position: 'top',
                labels: ['3°C', '5°C', '6°C', '10°C', '14°C', '13°C', '10°C', '8°C', '4°C', '2°C'],
                grid:{
                    display: false
                },
                ticks:{
                    padding: 8
                },
                border:{
                    display: false
                }
            },

        }
    }
});
'use client';

import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

let data = [
    {bln: 'Jan', qty: 150},
    {bln: 'Feb', qty: 100},
    {bln: 'Mar', qty: 190},
    {bln: 'Apr', qty: 190},
    {bln: 'May', qty: 130},
    {bln: 'jun', qty: 170},
    {bln: 'Jul', qty: 190},
    {bln: 'Aug', qty: 160},
    {bln: 'Sept', qty: 150},
    {bln: 'Oct', qty: 140},
    {bln: 'Nov', qty: 180},
    {bln: 'Dec', qty: 150},
]

let bln = data.map(function (d) {
    return d.bln;
})

let qty = data.map(function (q) {
    return q.qty;
})

console.log(bln);

const BarChart = () => {
    const data = {
        labels: bln,
        datasets: [
            {
                label: 'Sales',
                data: qty,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: true,
            },
            title: {
                display: true,
                text: 'Monthly Sales',
            },
        },
    };

    return <Bar data={data} options={options}/>;
};

export default BarChart;

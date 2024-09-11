"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

// Registering Chart.js components
ChartJS.register(ArcElement);

interface PieChartProps {
    data: {
        labels: string[];
        data: number[];
    };
}

const PieChart = ({ data }: PieChartProps) => {
    return (
        <Pie
            data={{
                labels: data.labels,
                datasets: [
                    {
                        label: "Pie Data",
                        data: data.data,
                        backgroundColor: data.labels,
                        borderColor: data.labels,
                    },
                ],
            }}
            style={{
                // maxWidth: "800px",
                // margin: "0 auto",
                width: "100%",
                height: "300px",
            }}
        />
    );
};

export default PieChart;

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
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                        ],
                    },
                ],
            }}
        />
    );
};

export default PieChart;

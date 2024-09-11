"use client";

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement);

interface BarChartProps {
    data: {
        labels: string[];
        data: number[];
    };
}

const BarChart = ({ data }: BarChartProps) => {
    return (
        <Bar
            data={{
                labels: data.labels,
                datasets: [
                    {
                        label: "Bar Data",
                        data: data.data,
                        backgroundColor: "rgba(153, 102, 255, 0.2)",
                        borderColor: "rgba(153, 102, 255, 1)",
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

export default BarChart;

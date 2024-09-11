"use client";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface LineChartProps {
    data: {
        labels: string[];
        data: number[];
    };
}

const LineChart = ({ data }: LineChartProps) => {
    return (
        <Line
            data={{
                labels: data.labels,
                datasets: [
                    {
                        label: "Line Data",
                        data: data.data,
                        borderColor: "rgba(75, 192, 192, 1)",
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
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

export default LineChart;

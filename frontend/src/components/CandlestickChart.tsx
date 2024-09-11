"use client";

import {
    Chart as ChartJSClass,
    CategoryScale,
    LinearScale,
    TimeScale,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js";
import {
    CandlestickController,
    CandlestickElement,
} from "chartjs-chart-financial";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

// Registering necessary components for Candlestick charts
ChartJSClass.register(
    CategoryScale,
    LinearScale,
    TimeScale,
    CandlestickController,
    CandlestickElement,
    Tooltip,
    Legend
);

interface CandlestickChartProps {
    data: {
        x: string;
        open: number;
        high: number;
        low: number;
        close: number;
    }[];
}

const transformData = (dataWrapper: {
    data: CandlestickChartProps["data"];
}) => {
    const { data } = dataWrapper;

    if (!Array.isArray(data)) {
        console.error("Data is not an array:", data);
        return [];
    }

    return data.map((d) => ({
        x: new Date(d.x),
        o: d.open,
        h: d.high,
        l: d.low,
        c: d.close,
    }));
};

const CandlestickChart = ({
    data,
}: {
    data: { data: CandlestickChartProps["data"] };
}) => {
    const chartData = {
        datasets: [
            {
                label: "Candlestick Data",
                data: transformData(data),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                barThickness: 15,
            },
        ],
    };

    const options: ChartOptions<"candlestick"> = {
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day",
                },
                ticks: {
                    source: "data",
                },
            },
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: "Price",
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
            tooltip: {
                enabled: true,
            },
        },
        maintainAspectRatio: true,
        responsive: true,
        animation: false,
    };

    return (
        <div
            style={{
                // maxWidth: "800px",
                // margin: "0 auto",
                width: "100%",
                height: "300px",
            }}
        >
            {" "}
            <Chart type="candlestick" data={chartData} options={options} />
        </div>
    );
};

export default CandlestickChart;

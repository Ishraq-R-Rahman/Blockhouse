"use client";

import { useState, useEffect } from "react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

const Dashboard = () => {
    const [lineData, setLineData] = useState<any>(null);
    const [barData, setBarData] = useState<any>(null);
    const [pieData, setPieData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Base API URL from environment variables
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    // Fetch chart data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const lineRes = await fetch(
                    `${API_BASE_URL}/api/line-chart-data/`
                );
                const lineChart = await lineRes.json();

                const barRes = await fetch(
                    `${API_BASE_URL}/api/bar-chart-data/`
                );
                const barChart = await barRes.json();

                const pieRes = await fetch(
                    `${API_BASE_URL}/api/pie-chart-data/`
                );
                const pieChart = await pieRes.json();

                setLineData(lineChart);
                setBarData(barChart);
                setPieData(pieChart);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching chart data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [API_BASE_URL]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!lineData || !barData || !pieData) {
        return <div>Failed to load data</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>

            {/* Line Chart */}
            <div>
                <h2>Line Chart</h2>
                <LineChart data={lineData} />
            </div>

            {/* Bar Chart */}
            <div>
                <h2>Bar Chart</h2>
                <BarChart data={barData} />
            </div>

            {/* Pie Chart */}
            <div>
                <h2>Pie Chart</h2>
                <PieChart data={pieData} />
            </div>
        </div>
    );
};

export default Dashboard;

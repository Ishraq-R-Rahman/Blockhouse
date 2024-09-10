"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import CandlestickChart from "../components/CandlestickChart";
import { RootState, AppDispatch } from "../redux/store";
import {
    fetchCandlestickData,
    fetchLineChartData,
    fetchBarChartData,
    fetchPieChartData,
} from "../redux/chartSlice";

const Dashboard = () => {
    const dispatch: AppDispatch = useDispatch();

    const { candlestick, line, bar, pie, status } = useSelector(
        (state: RootState) => state.charts
    );

    // Fetch chart data on component mount
    useEffect(() => {
        dispatch(fetchCandlestickData());
        dispatch(fetchLineChartData());
        dispatch(fetchBarChartData());
        dispatch(fetchPieChartData());
    }, [dispatch]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "failed") {
        return <div>Failed to load data</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>

            {/* Candle Stick Chart */}
            <div>
                <h2>Candle Stick Chart</h2>
                {candlestick && <CandlestickChart data={candlestick} />}
            </div>

            {/* Line Chart */}
            <div>
                <h2>Line Chart</h2>
                {line && <LineChart data={line} />}
            </div>

            {/* Bar Chart */}
            <div>
                <h2>Bar Chart</h2>
                {bar && <BarChart data={bar} />}
            </div>

            {/* Pie Chart */}
            <div>
                <h2>Pie Chart</h2>
                {pie && <PieChart data={pie} />}
            </div>
        </div>
    );
};

export default Dashboard;

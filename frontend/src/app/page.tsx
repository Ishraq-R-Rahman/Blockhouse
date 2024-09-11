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

// Material-UI imports
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

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
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Dashboard
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {/* Candlestick Chart */}
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h6" align="center">
                        Candlestick Chart
                    </Typography>
                    {candlestick && <CandlestickChart data={candlestick} />}
                </Grid>

                {/* Line Chart */}
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h6" align="center">
                        Line Chart
                    </Typography>
                    {line && <LineChart data={line} />}
                </Grid>

                {/* Bar Chart */}
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h6" align="center">
                        Bar Chart
                    </Typography>
                    {bar && <BarChart data={bar} />}
                </Grid>

                {/* Pie Chart */}
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h6" align="center">
                        Pie Chart
                    </Typography>
                    {pie && <PieChart data={pie} />}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;

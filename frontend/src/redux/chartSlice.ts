import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CandlestickData {
    x: string;
    open: number;
    high: number;
    low: number;
    close: number;
}

interface LineChartData {
    labels: string[];
    data: number[];
}

interface BarChartData {
    labels: string[];
    data: number[];
}

interface PieChartData {
    labels: string[];
    data: number[];
}

interface ChartState {
    candlestick: { data: CandlestickData[] } | null;
    line: LineChartData | null;
    bar: BarChartData | null;
    pie: PieChartData | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: ChartState = {
    candlestick: null,
    line: null,
    bar: null,
    pie: null,
    status: "idle",
    error: null,
};

export const fetchCandlestickData = createAsyncThunk(
    "charts/fetchCandlestickData",
    async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/candlestick-data/`
        );
        const data = await response.json();
        return data;
    }
);

export const fetchLineChartData = createAsyncThunk(
    "charts/fetchLineChartData",
    async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/line-chart-data/`
        );
        const data = await response.json();
        return data;
    }
);

export const fetchBarChartData = createAsyncThunk(
    "charts/fetchBarChartData",
    async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/bar-chart-data/`
        );
        const data = await response.json();
        return data;
    }
);

export const fetchPieChartData = createAsyncThunk(
    "charts/fetchPieChartData",
    async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pie-chart-data/`
        );
        const data = await response.json();
        return data;
    }
);

const chartSlice = createSlice({
    name: "charts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Candlestick data
            .addCase(fetchCandlestickData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCandlestickData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.candlestick = action.payload;
            })
            .addCase(fetchCandlestickData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Failed to fetch data";
            })

            // Line chart data
            .addCase(fetchLineChartData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchLineChartData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.line = action.payload;
            })
            .addCase(fetchLineChartData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Failed to fetch data";
            })

            // Bar chart data
            .addCase(fetchBarChartData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBarChartData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.bar = action.payload;
            })
            .addCase(fetchBarChartData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Failed to fetch data";
            })

            // Pie chart data
            .addCase(fetchPieChartData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPieChartData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.pie = action.payload;
            })
            .addCase(fetchPieChartData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Failed to fetch data";
            });
    },
});

export default chartSlice.reducer;

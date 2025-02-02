// src/slices/apiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  incomeData: {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Income History ($)",
        data: [3000, 2500, 3200],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  },
  balanceIncomeData: {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Balance History ($)",
        data: [26000, 24500, 25500],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.4,
      },
    ],
  },
  currentBalance: 25650,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setIncomeData(state, action) {
      state.incomeData = action.payload;
    },
    setBalanceIncomeData(state, action) {
      state.balanceIncomeData = action.payload;
    },
    setCurrentBalance(state, action) {
      state.currentBalance = action.payload;
    },
  },
});

export const { setIncomeData, setBalanceIncomeData, setCurrentBalance } = apiSlice.actions;

export default apiSlice.reducer;

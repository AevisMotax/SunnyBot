import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import { Line } from "../chartJsSetup";

function BalanceWindow() {
  // Income History Data for the chart
  const incomeData = {
    labels: ["Jan", "Feb", "Mar"], // Months
    datasets: [
      {
        label: "Income History ($)",
        data: [3000, 2500, 3200], // Monthly income values
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the line
        tension: 0.4, // Smooth the line
      },
    ],
  };

  // Balance Income Data for the chart
  const balanceIncomeData = {
    labels: ["Jan", "Feb", "Mar"], // Months
    datasets: [
      {
        label: "Balance History ($)",
        data: [26000, 24500, 25500], // Monthly balance values
        borderColor: "rgba(153, 102, 255, 1)", // Line color
        backgroundColor: "rgba(153, 102, 255, 0.2)", // Fill color under the line
        tension: 0.4, // Smooth the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <Grid2
      container
      spacing={2}
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch" // Ensures full width alignment
      sx={{ minHeight: "100vh", padding: 2 }}
    >
      {/* First Row: Balance and Charts */}
      <Grid2 container spacing={2} sx={{ width: "100%" }}>
        {/* Income History Chart */}
        <Grid2 xs={12} md={6}>
          <Card sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography color="text.secondary" gutterBottom>
                Income History
              </Typography>
              {/* Render Income History Chart here */}
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Line data={incomeData} options={options} />
              </div>
            </CardContent>
          </Card>
        </Grid2>

        {/* Balance Card */}
        <Grid2 xs={12} md={4}>
          <Card sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Current Balance
              </Typography>
              <Typography variant="h5" component="div">
                $25,650
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        {/* Balance Income Chart */}
        <Grid2 xs={12} md={6}>
          <Card sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography color="text.secondary" gutterBottom>
                Balance History
              </Typography>
              {/* Render Balance Income Chart here */}
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Line data={balanceIncomeData} options={options} />
              </div>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      {/* AI Suggestions */}
      <Grid2 xs={12}>
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              AI Suggestions
            </Typography>
            <Typography variant="body2">- Maximize savings with automated budgeting</Typography>
            <Typography variant="body2">- Invest in high-yield savings plans</Typography>
            <Typography variant="body2">- Use AI to track and predict spending trends</Typography>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
}

export default BalanceWindow;

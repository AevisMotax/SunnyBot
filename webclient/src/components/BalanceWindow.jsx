import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import { Line } from "../chartJsSetup";
import { getIncomeData, getBalanceIncomeData, getCurrentBalance, getChatBalanceWindow }  from "../util/apiService";


function BalanceWindow() {
  // Income History Data for the chart
  // const incomeData = {
  //   labels: ["Jan", "Feb", "Mar"], // Months
  //   datasets: [
  //     {
  //       label: "Income History ($)",
  //       data: [3000, 2500, 3200], // Monthly income values
  //       borderColor: "rgba(75, 192, 192, 1)", // Line color
  //       backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the line
  //       tension: 0.4, // Smooth the line
  //     },
  //   ],
  // };

  // // Balance Income Data for the chart
  // const balanceIncomeData = {
  //   labels: ["Jan", "Feb", "Mar"], // Months
  //   datasets: [
  //     {
  //       label: "Balance History ($)",
  //       data: [26000, 24500, 25500], // Monthly balance values
  //       borderColor: "rgba(153, 102, 255, 1)", // Line color
  //       backgroundColor: "rgba(153, 102, 255, 0.2)", // Fill color under the line
  //       tension: 0.4, // Smooth the line
  //     },
  //   ],
  // };

  const [incomeData, setIncomeData] = useState({
    labels: [],
    datasets: [{ label: "", data: [], borderColor: "", backgroundColor: "" }],
  });
  const [balanceIncomeData, setBalanceIncomeData] = useState({
    labels: [],
    datasets: [{ label: "", data: [], borderColor: "", backgroundColor: "" }],
  });
  const [currentBalance, setCurrentBalance] = useState(0);
  const [chatbotPrompts, setChatbotPrompts] = useState("Hi, I am SunnyBot, a bot for you!");

  // Fetch income data from backend
  useEffect(() => {
    const fetchIncomeData = async () => {
      try {
        const data = await getIncomeData();

        data.IncomeHistory.forEach((element) => {
          setBalanceIncomeData((prevData) => ({
            labels: [...prevData.labels, element.InputDate], // Add new label
            datasets: [
              {
                ...prevData.datasets[0], // Copy the existing dataset
                data: [...prevData.datasets[0].data, element.Income], // Add new data
              },
            ],
          }));
        });

      } catch (error) {
        console.error("Error fetching income data:", error);
      }
    };

    fetchIncomeData();
  }, []);

  // Fetch balance income data from backend
  useEffect(() => {
    const fetchBalanceIncomeData = async () => {
      try {
        const data = await getBalanceIncomeData();

        data.BalanceHistory.forEach((element) => {
          setBalanceIncomeData((prevData) => ({
            labels: [...prevData.labels, element.InputDate], // Add new label
            datasets: [
              {
                ...prevData.datasets[0], // Copy the existing dataset
                data: [...prevData.datasets[0].data, element.Income], // Add new data
              },
            ],
          }));
        });
      } catch (error) {
        console.error("Error fetching balance income data:", error);
      }
    };

    fetchBalanceIncomeData();
  }, []);

  // Fetch current balance from backend
  useEffect(() => {
    const fetchCurrentBalance = async () => {
      try {
        const balance = await getCurrentBalance();
        setCurrentBalance(balance.balance); // Assuming the backend returns a single balance value
      } catch (error) {
        console.error("Error fetching current balance:", error);
      }
    };

    fetchCurrentBalance();
  }, []);

  useEffect(() => {
    const fetchChatbotPrompts = async () => {
      try {
        const data = await getChatBalanceWindow();
        setChatbotPrompts(data.message); // Assuming API returns { prompts: ["Tip 1", "Tip 2", ...] }
      } catch (error) {
        console.error("Error fetching chatbot prompts:", error);
        setChatbotPrompts("Error generating response data. Please retry again");
      }
    };
  
    fetchChatbotPrompts();
  }, []);

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
                ${currentBalance}
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

              <Typography>
                {chatbotPrompts}
              </Typography>
            {/* <Typography variant="body2">- Maximize savings with automated budgeting</Typography>
            <Typography variant="body2">- Invest in high-yield savings plans</Typography>
            <Typography variant="body2">- Use AI to track and predict spending trends</Typography> */}
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
}

export default BalanceWindow;

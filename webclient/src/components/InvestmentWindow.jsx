import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import { Line } from "../chartJsSetup";
import { getIncomeData, getBalanceIncomeData, getCurrentBalance, getChatBalanceWindow }  from "../util/apiService";


function InvestmentWindow() {

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
        // Assuming the data returned has a structure { labels: [...], values: [...] }
        setIncomeData({
          labels: data.labels,
          datasets: [
            {
              label: "Investment History ($)",
              data: data.values,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              tension: 0.4,
            },
          ],
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
        // Assuming the data returned has a structure { labels: [...], values: [...] }
        setBalanceIncomeData({
          labels: data.labels,
          datasets: [
            {
              label: "Balance History ($)",
              data: data.values,
              borderColor: "rgba(153, 102, 255, 1)",
              backgroundColor: "rgba(153, 102, 255, 0.2)",
              tension: 0.4,
            },
          ],
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
                Investment History
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
                Investments
              </Typography>
              <Typography variant="h5" component="div">
                ${currentBalance}
              </Typography>
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
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
}

export default InvestmentWindow;

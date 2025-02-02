import React, { useState, useEffect, useCallback, useRef } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Loader from "./loader";
import { getChatDashBoardWindow } from "../util/apiService";
import axios from "axios";

export default function PopupBotWindow({ searchQuery, onClose }) {
    const [messages, setMessages] = useState([{}]);
    const [userInput, setUserInput] = useState(searchQuery);
    const [loading, setLoading] = useState(false);
    //user sends message
    const sendMessage = async () => {
        if (!userInput.trim() || loading ) return;

        setLoading(true);
        const newMessages = [...messages, { sender: "user", text: userInput }];
        setMessages(newMessages); 

    //Chatbot backend should return some messages
    try {
        // Prepare the payload for the POST request
        const data = {
            "message": userInput,
        };

        const sendPost = {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Send user input as message payload
        }

        // Send the POST request using axios
        const response = await axios.post('http://127.0.0.1:8000/llm/financial-chat', data, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        //return data in here
        setMessages([...newMessages, { sender: "SunnyBot", text: response.data.message }]);

    } catch(error) {

        console.error("API ERROR: ", error)
        setMessages([...newMessages, { sender: "SunnyBot", text: "Unable to answer you, please retry later." }]);
    }

      setUserInput("");
      setLoading(false);  // Reset loading state after response
    };

    useEffect(() => {
        sendMessage();
    }, [])

    return (
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", height: "400px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h6" sx={{ textAlign: "left", flexGrow: 1 }}>
                    Sunny Bot Chat
                </Typography>

                <Button
                    variant="text"
                    color="secondary"
                    onClick={onClose}
                    sx={{
                        justifyContent: "right",
                        fontSize: "24px",
                    }}
                >
                    &times;
                </Button>
            </Box>


            {/* TextBox chat input for all info */}

            <Box sx={{ flexGrow: 1, overflowY: "auto", border: "1px solid #ccc", p: 2, borderRadius: "8px" }}>
                {messages.map((msg, index) => (
                    <Box
                        key={index}
                        sx={{
                            textAlign: msg.sender === "user" ? "right" : "left",
                            marginBottom: "8px"
                        }}
                    >
                        <Typography
                            sx={{
                                display: "inline-block",
                                p: 1,
                                borderRadius: "8px",
                                backgroundColor: msg.sender === "user" ? "#007bff" : "#f1f1f1",
                                color: msg.sender === "user" ? "white" : "black"
                            }}
                        >
                            {msg.text}
                        </Typography>
                    </Box>
                ))}
            </Box>

            <Box sx={{ display: "flex", marginTop: "1rem" }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type your message..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyUp={(e) => e.key === "Enter" && sendMessage()}
                    disabled={loading}  // Disable input while loading
                />

                <Button
                    variant="contained"
                    onClick={sendMessage}
                    disabled={loading}  // Disable input while loading
                    sx={{ ml: 1 }}
                    aria-label="Send message"
                >
                    <SendIcon />
                </Button>
            </Box>


        </Box>
    );
}
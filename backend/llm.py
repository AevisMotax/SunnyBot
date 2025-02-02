import asyncio
from fastapi import FastAPI, APIRouter
from ollama import AsyncClient
import database
import re
from pydantic import BaseModel

user = database.QueryUserInfo(database.myemail, database.mypassword)
app2_router = APIRouter()

async def base_chat(prompt):
    message = {'role': 'user', 'content': f'{prompt}: {user}'}
    final_message = ""
    async for part in await AsyncClient().chat(model='deepseek-r1:8b', messages=[message], stream=True):
        print(part['message']['content'], end='', flush=True)
        final_message += part['message']['content']
    final_message = re.sub(r'<think>.*?</think>', '', final_message, flags=re.DOTALL)
    return {'message': final_message}

@app2_router.get('/balance-chat')
async def balance_chat():
    return await base_chat("Please give advice to this person consider only their balance and any balance history: ")

#asyncio.run(chat())

#@app2_router.post('/balance')
#async def pop_chat():
#    return None

class MessageInput(BaseModel):
    message: str
@app2_router.post("/financial-chat")
async def pop_chat(input_data: MessageInput):
    message = input_data.message
    prompt = f"A user on our Sun Life financial platform wants to ask you a financial related question. Here is the question: {message}. Now please give a personalized answer considering the following information on the person"
    return await base_chat(prompt)



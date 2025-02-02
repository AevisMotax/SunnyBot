import asyncio
from fastapi import FastAPI, APIRouter
from ollama import AsyncClient
import database

user = database.QueryUserInfo(database.myemail, database.mypassword)
app2_router = APIRouter()

async def base_chat(prompt):
    message = {'role': 'user', 'content': f'{prompt}: {user}'}
    final_message = ""
    async for part in await AsyncClient().chat(model='deepseek-r1:8b', messages=[message], stream=True):
        print(part['message']['content'], end='', flush=True)
        final_message += part['message']['content']
    return {'message': final_message}

@app2_router.get('/chat')
async def chat():
    return await base_chat("Please write a financial summary of the following person")

#asyncio.run(chat())



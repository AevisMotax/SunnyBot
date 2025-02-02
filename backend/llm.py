import asyncio
from fastapi import FastAPI
from ollama import AsyncClient
import database

user = database.QueryUserInfo()
app = FastAPI()

async def base_chat(prompt):
    message = {'role': 'user', 'content': f'{prompt}: {user}'}
    final_message = ""
    async for part in await AsyncClient().chat(model='deepseek-r1:8b', messages=[message], stream=True):
        print(part['message']['content'], end='', flush=True)
        final_message += part['message']['content']
    return {'message': final_message}

@app.get('/chat')
async def chat():
    return await base_chat("Please write a financial summary of the following person")

#asyncio.run(chat())



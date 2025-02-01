import asyncio
from ollama import AsyncClient
import database

user = database.getUser()[0]

async def chat():
  message = {'role': 'user', 'content': f'Please write a financial summary of the following person: {user}'}
  async for part in await AsyncClient().chat(model='deepseek-r1:8b', messages=[message], stream=True):
    print(part['message']['content'], end='', flush=True)

asyncio.run(chat())
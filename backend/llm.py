import asyncio
from fastapi import FastAPI
from ollama import AsyncClient
import database

user = database.getUser()[0]
app = FastAPI()

@app.get('/chat')
async def chat():
  message = {'role': 'user', 'content': f'Please write a financial summary of the following person: {user}'}
  final_message = ""
  async for part in await AsyncClient().chat(model='deepseek-r1:8b', messages=[message], stream=True):
      print(part['message']['content'], end='', flush=True)
      final_message += part['message']['content']
  return {'message': final_message}

#asyncio.run(chat())



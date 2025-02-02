from fastapi import FastAPI
import uvicorn
import database
import llm
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174"],  # Allow all origins (or replace "" with your frontend URL)
    allow_credentials=True,
    allow_methods=["GET", "POST"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)
app.include_router(database.app1_router, prefix="/database")
app.include_router(llm.app2_router, prefix="/llm")

if __name__ == '__main__':
    uvicorn.run('main:app', host='127.0.0.1', port=8000, reload=True)
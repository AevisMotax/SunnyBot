from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from fastapi import FastAPI, HTTPException, APIRouter
from fastapi.middleware.cors import CORSMiddleware

uri = "mongodb+srv://conuhacksunlife:conuhacks2025@financesunlife.pmyry.mongodb.net/?retryWrites=true&w=majority&appName=financeSunlife"
app1_router = APIRouter()

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

#access database Finance and collection Users
mydb = client["Finance"]
usercollection = mydb["Users"]   

#user inputs email and password
myemail = input("Email: ")
mypassword = input ("Password: ")
userinfo = usercollection.find_one({"email": myemail,"password": mypassword})


def QueryUserInfo(myemail,mypassword):
    #checks if username and password is there
    #userinfo = usercollection.find_one({"email": myemail,"password": mypassword})
    if userinfo == None: 
       return print("Email and/or passowrd is incorrect.")
    else:
       print(userinfo)
       return userinfo

def QueryID(myemail,mypassword):
    #userinfo = usercollection.find_one({"email": myemail})
    if userinfo:
        return print(userinfo['_id'])
    else: 
        return None

@app1_router.get("/current-balance")
#def QueryBalance(myemail,mypassword):
def QueryBalance():
    print(userinfo['Balance'])
    if userinfo:
        return {"balance": userinfo['Balance']}
    else: 
        return None
    

@app1_router.get("/balance-history")
def QueryBalanceHistory():
    print(userinfo['BalanceHistory'])
    if userinfo:
        return {"BalanceHistory": userinfo['BalanceHistory']}
    else: 
        return None

#QueryBalanceHistory(myemail,mypassword)
#QueryUserInfo(myemail,mypassword)
#QueryID(myemail,mypassword)
#QueryBalance(myemail,mypassword)
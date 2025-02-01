from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import json

uri = "mongodb+srv://conuhacksunlife:conuhacks2025@financesunlife.pmyry.mongodb.net/?retryWrites=true&w=majority&appName=financeSunlife"

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

def QueryID(myemail,mypassword):
    #userinfo = usercollection.find_one({"email": myemail})
    if userinfo:
        return print(userinfo['_id'])
    else: 
        return None
    
def QueryBalance(myemail,mypassword):
    if userinfo:
        return print(userinfo['Balance'])
    else: 
        return None

#QueryUserInfo(myemail,mypassword)
#QueryID(myemail,mypassword)
QueryBalance(myemail,mypassword)


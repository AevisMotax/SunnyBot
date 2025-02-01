from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import json

uri = "mongodb+srv://conuhacksunlife:conuhacks2025@financesunlife.pmyry.mongodb.net/?retryWrites=true&w=majority&appName=financeSunlife"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))



#for x in mycol.find():
#    print(x)

def getUser():
    #access database Finance and collection Users
    mydb = client["Finance"]
    usercollection = mydb["Users"]   

    #user inputs email and password
    myemail = input("Email: ")
    mypassword = input ("Password: ")

    #checks if username and password is there
    userinfo = usercollection.find_one({"email": myemail,"password": mypassword})
    if userinfo == None: 
        return print("Email and/or passowrd is incorrect.")
    else:
        print(userinfo)


getUser()
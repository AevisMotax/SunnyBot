from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://conuhacksunlife:conuhacks2025@financesunlife.pmyry.mongodb.net/?retryWrites=true&w=majority&appName=financeSunlife"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))



#for x in mycol.find():
#    print(x)

def getUser():
    #access database Finance and collection Users
    mydb = client["Finance"]
    mycol = mydb["Users"]   

    #user inputs email and password
    myemail = input("Email: ")
    password = input("Password: ")

    #checks if username and password is there
    userinfo = mycol.find_one({"email": myemail})
    print(myemail)
    print (userinfo)


getUser()
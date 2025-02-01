from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


def getUser():
    uri = "mongodb+srv://conuhacksunlife:conuhacks2025@financesunlife.pmyry.mongodb.net/?retryWrites=true&w=majority&appName=financeSunlife"

    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))

    # Send a ping to confirm a successful connection
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    mydb = client["Finance"]
    mycol = mydb["Users"]

    #for x in mycol.find():
    #    print(x)

    myquery = {"FirstName": "Julian"}

    mydoc = mycol.find(myquery)
    #print(mydoc)
    user = list(mydoc)
    #print(user)
    for x in mydoc:
        print(x)
    return user

#print(getUser())
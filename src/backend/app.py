import json
import pymongo
from flask import Flask, redirect, url_for, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#reading configs
with open(r'/home/shubham/JavaScript/side-project-shubham0831/config.json') as json_file:
    config = json.load(json_file)

username = config['username']
password = config['password']
database = config['database']

#connecting to db
uri = "mongodb+srv://" +username+":"+password+"@"+database+".tjeuf.mongodb.net/RecipeSearch?retryWrites=true&w=majority"
client = pymongo.MongoClient(uri)
db = client.Recipes
recipe_collection = db.Recipe

@app.route('/',methods = ['POST', 'GET'])
def login():
    if (request.method == 'POST'):
        # print("got post request")
        # print(request.json)
        body = request.json
        ingredient_list = body['ingredients']
        recipes = getRecipes(ingredient_list)
        print(ingredient_list)
        return "<h1> POST </h1>"
    else :
        return "<h1> GET </h1>"

def getRecipes (ingredient_list : list):
    print("hellow world")

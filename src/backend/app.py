'''
    Author : Shubham Pareek
    Class Purpose : Receives the request from the front-end, makes a query to the db
                    and returns the appropriate json response
'''
import json
import pymongo
from flask import Flask, request, jsonify
from flask_cors import CORS #this is to handle cors response

from collections import Counter
import math

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
recipeCollection = db.Recipe

@app.route('/',methods = ['POST', 'GET'])
def getRecipes():
    if (request.method == 'POST'):
        # print("got post request")
        # print(request.json)
        body = request.json
        print('body is')
        print(body)

        #doing list(set(list())) to remove duplicates
        availableIngredients = set(body['ingredients'])
        dbResults = list(recipeCollection.find({ "ingredients": {"$in": list(availableIngredients) } }
                         , {"name" : 1, "id" : 1, "minutes" : 1, "tags" : 1, "nutrition" : 1, "n_steps" : 1, "steps" : 1, 
                            "description" : 1, "ingredients" : 1, "n_ingredients" : 1, "_id" : 0}))
        
        response = {}
        response['absoluteMatch'] = []
        response['potentialMatch'] = []
        for recipes in dbResults:
            requiredIngredients = set(recipes['ingredients'])

            #we can compare two sets in python using the equals operator
            if (availableIngredients == requiredIngredients):
                recipes['fullMatch'] = True
                availIngredients = str(recipes['n_ingredients']) + "/" + str(recipes['n_ingredients']) + " ingredients available"
                recipes['availableIngredients'] = availIngredients
                response['absoluteMatch'].append(recipes)
                continue

            difference = len(requiredIngredients) - len(availableIngredients)
            #if count of required ingredient is greater than available ingredients
            #the user at the current point does not have all the ingredients need 
            #to make the recipe
            #so if the user need only one or two more ingredients to make the recipe, then 
            #we put it in the potential_match as the user might have those recipes
            if (difference > 0 and difference <= 2):
                recipes['fullMatch'] = False
                availIngredients = str(int(recipes['n_ingredients'])-difference) + "/" + str(recipes['n_ingredients']) + " ingredients available"
                recipes['availableIngredients'] = availIngredients
                response['potentialMatch'].append(recipes)
                continue
            elif (difference < 0):
                #https://stackoverflow.com/questions/16579085/how-can-i-verify-if-one-list-is-a-subset-of-another
                #to find how to check whether one set is a subset of another in python

                # print("Type of required ingredients and available ingredients is ")
                # print(type(requiredIngredients))
                # print(type(availableIngredients))
                if (requiredIngredients <= availableIngredients): #pythonic way to check whether a set is a subset of another
                    recipes['fullMatch'] = True
                    availIngredients = str(recipes['n_ingredients']) + "/" + str(recipes['n_ingredients']) + " ingredients available"
                    recipes['availableIngredients'] = availIngredients
                    response['absoluteMatch'].append(recipes)
                #since the user has more ingredients than the required one, chances are that the user might have forgotten
                #to mention an ingredient or two so thats why if the difference between the available ingredients and required
                #ingredients is less than equal to 3, then we put the recipe in the potential_match
                elif (abs(difference) <= 3): #abs is maths.absolute
                    recipes['fullMatch'] = False
                    availIngredients = str(int(recipes['n_ingredients']) - abs(difference)) + "/" + str(recipes['n_ingredients']) + " ingredients available"
                    recipes['availableIngredients'] = availIngredients
                    response['potentialMatch'].append(recipes)
        
        
        #if we have too many potential matched, we just send the first 5
        if (len (response['potentialMatch']) > 10):
            response['potentialMatch'] = response['potentialMatch'][:10] #trimming of the list so that we only have the first 10 potential matches
        
        absoluteMatch = response['absoluteMatch']
        potentialMatch = response['potentialMatch']
        print(f'length of absolute match is {len(absoluteMatch)}')
        print(f'length of potential match is {len(potentialMatch)}')

        response = jsonify(
            {
                "absoluteMatch" : response['absoluteMatch'], 
                "potentialMatch" : response['potentialMatch']
            }
        )
        response.headers.add('Access-Control-Allow-Origin', '*')
        print(str(response))
        return response
    else :
        return "<h1> GET </h1>"

#this is used to mock a response to the front-end when db connection is not available
def mockResponse (name :str, ingredientQuant: dict, instruction: str, nutrition: dict()):
    sampleResponse = dict()
    sampleResponse['name'] = name
    sampleResponse['ingredients'] = []
    sampleResponse['ingredientQuantity'] = dict()
    sampleResponse['nutrition'] = dict()

    for key, value in ingredientQuant.items():
        sampleResponse['ingredients'].append(key)
        sampleResponse['ingredientQuantity'][key] = value

    for key, value in nutrition.items():
        sampleResponse['nutrition'][key] = value
    
    sampleResponse['instruction'] = instruction


    return sampleResponse


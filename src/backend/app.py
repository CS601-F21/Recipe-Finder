import json
import pymongo
from flask import Flask, request, jsonify
from flask_cors import CORS

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
recipe_collection = db.Recipe

@app.route('/',methods = ['POST', 'GET'])
def getRecipes():
    if (request.method == 'POST'):
        # print("got post request")
        # print(request.json)
        body = request.json
        print('body is')
        print(body)

        #doing list(set(list())) to remove duplicates
        avail_ingredients = set(body['ingredients'])
        dbResults = list(recipe_collection.find({ "ingredients": {"$in": list(avail_ingredients) } }
                         , {"name" : 1, "_id" : 0, "ingredients" : 1, "ingredient_quantity" : 1, "instructions" : 1, "nutrition_values" : 1}))
        
        response = {}
        response['absolute_match'] = []
        response['potential_match'] = []
        for recipes in dbResults:
            required_ingredients = set(recipes['ingredients'])
            if (avail_ingredients == required_ingredients):
                recipes['full_match'] = True
                recipes['missing_ingredients'] = f'you have all the ingredients to make the recipe, get cooking!'
                response['absolute_match'].append(recipes)
                continue

            difference = len(required_ingredients) - len(avail_ingredients)
            #if count of required ingredient is greater than available ingredients
            #the user at the current point does not have all the ingredients need 
            #to make the recipe
            #so if the user need only one or two more ingredients to make the recipe, then 
            #we put it in the potential_match as the user might have those recipes
            if (difference > 0 and difference <= 2):
                recipes['full_match'] = False
                recipes['missing_ingredients'] = f'you have {len(avail_ingredients)} out of {len(required_ingredients)} required ingredients to make the recipe'
                response['potential_match'].append(recipes)
                continue
            elif (difference < 0):
                #https://stackoverflow.com/questions/16579085/how-can-i-verify-if-one-list-is-a-subset-of-another
                #to find how to check whether one set is a subset of another in python
                if (required_ingredients <= avail_ingredients): #pythonic way to check whether a set is a subset of another
                    recipes['full_match'] = True
                    recipes['missing_ingredients'] = f'you have all the ingredients to make the recipe, get cooking!'
                    response['absolute_match'].append(recipes)
                #since the user has more ingredients than the required one, chances are that the user might have forgotten
                #to mention an ingredient or two so thats why if the difference between the available ingredients and required
                #ingredients is less than equal to 3, then we put the recipe in the potential_match
                elif (abs(difference) <= 3): #abs is maths.absolute
                    recipes['full_match'] = False
                    recipes['missing_ingredients'] = f'you are missing {difference} ingredients to make the recipe'
                    response['potential_match'].append(recipes)
        
        
        #if we have too many potential matched, we just send the first 5
        if (len (response['potential_match']) > 10):
            response['potential_match'] = response['potential_match'][:10] #trimming of the list so that we only have the first 10 potential matches
        
        absolute_match = response['absolute_match']
        potential_match = response['potential_match']
        print(f'length of absolute match is {len(absolute_match)}')
        print(f'length of potential match is {len(potential_match)}')
        

        # print("response is going to be")
        # response = dict()
        # response['absolute_match'] = []
        # response['potential_match'] = []
        
        
        # sample_response = mockResponse("parfait", {'yogurt' : '1 cup', 'milk' : '2 ounces'}, 'make it quickly', {'energy' : 90, 'fat' : 20})
        # sample_response1 = mockResponse("lamb curry", {'lamb' : 'full thing', 'milk' : '2 ounces'}, 'make it slowly', {'energy' : 9000, 'fat' : 200})
        # sample_response2 = mockResponse("curry parfait", {'parfait' : '1 cup', 'milk' : '2 ounces', 'wheat' : '7 inches'}, 'make it quickly', {'energy' : 90, 'fat' : 20})

        # response['absolute_match'].append(sample_response)
        # response['absolute_match'].append(sample_response1)

        # response['potential_match'].append(sample_response2)


        response = jsonify(
            {
                "absolute_match" : response['absolute_match'], 
                "potential_match" : response['potential_match']
            }
        )
        response.headers.add('Access-Control-Allow-Origin', '*')
        print(str(response))
        return response
    else :
        return "<h1> GET </h1>"

def getRecipes (ingredient_list : list):
    print("in all recipes")
    print(f"ingredient list is {ingredient_list}")
    cursor = recipe_collection.find({ "ingredients": {"$in": ingredient_list } }
                         , {"name" : 1, "_id" : 0, "ingredients" : 1, "ingredient_quantity" : 1, "instructions" : 1, "nutrition_values" : 1})
    all_recipes = list(cursor)

    #perfect match is the list of recipes for which the user has all the available ingredients
    #probably match is the list of recipes for which the user has at-least 70-80% of the required ingredients
    perfect_match, probable_match = splitRecipes (ingredient_list, all_recipes)
    # print(all_recipes[0])
    return perfect_match, probable_match


# https://stackoverflow.com/questions/14720324/compute-the-similarity-between-two-lists
def cosine_similarity (c1, c2):
    terms = set(c1).union(c2)
    dotprod = sum(c1.get(k, 0) * c2.get(k, 0) for k in terms)
    magA = math.sqrt(sum(c1.get(k, 0)**2 for k in terms))
    magB = math.sqrt(sum(c2.get(k, 0)**2 for k in terms))
    return dotprod / (magA * magB)

def mockResponse (name :str, ingredient_quant: dict, instruction: str, nutrition: dict()):
    sample_response = dict()
    sample_response['name'] = name
    sample_response['ingredients'] = []
    sample_response['ingredient_quantity'] = dict()
    sample_response['nutrition'] = dict()

    for key, value in ingredient_quant.items():
        sample_response['ingredients'].append(key)
        sample_response['ingredient_quantity'][key] = value

    for key, value in nutrition.items():
        sample_response['nutrition'][key] = value
    
    sample_response['instruction'] = instruction


    return sample_response



a = Counter([ "sugars", "oil", "egg substitute", "orange juice", "leavening agents", "wheat flour" ])

b = Counter([ "sugars", "oil", "egg substitute", "orange juice", "leavening agents", "wheat flour" ])

print(cosine_similarity(a,b))
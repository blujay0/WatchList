#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import (
    Flask,
    request,
    g,
    session,
    json,
    jsonify,
    render_template,
    make_response,
    url_for,
    redirect,  # this is not necessary as react router handles redirects
)

# imports
from flask_restful import Api, Resource
from time import time
from flask_migrate import Migrate

from models import db, CartItem, Customer, OrderDetail, Order, Product

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///store.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)  # instantiate new instance of Api class


# Views go here!


# the Products class is not your model, but a new class that represents the information you will be accessing
class Products(Resource):
    # self is the instance of the class
    def get(self):
        try:
            # the as_dict() method that you built in models is used here b/c you can only serialize if it is converted to a dictionary
            products = [product.as_dict() for product in Products.query.all()]

            # you can also just 'return products, 200' but make_response is preferred
            return make_response(products, 200)

        except Exception as e:
            return make_response({"error": e}, 400)


class ProductByID(Resource):
    def get(self, id):
        try:
            product = Product.query.filter(Product.id == id).first().to_dict()
            return make_response(product, 200)
        except Exception as e:
            return make_response({"error": e}, 400)


class Profile(Resource):
    def get(self):
        pass

    def post(self):
        pass

    def patch(self):
        pass

    def delete(self):
        pass


class Cart(Resource):
    def get(self):
        pass


class Login(Resource):
    def post(self):
        pass


class SignUp(Resource):
    def post(self):
        data = request.get_json()
        name = data["name"]
        email = data["email"]
        address = data["address"]
        password = data["password"]
        try:
            profile = Profile(
                name=name, email=email, address=address, password=password
            )
            db.session.add(profile)
            db.session.commit()
        except:
            db.session.rollback()
            return make_response({"error": "Something went wrong!"}, 400)


class Logout(Resource):
    def post(self):
        session.clear()
        return make_response({}, 202)


# api.add_resource() tells the api to look at a specified resource (connects to resource);
# 1st arg: which resource you're adding, 2nd arg: the endpoint
api.add_resource(Products, "/watches")

api.add_resource(ProductByID, "/watches/<int:id>")

api.add_resource(Profile, "/profile")

api.add_resource(Cart, "/cart")

api.add_resource(Login, "/login")

api.add_resource(SignUp, "/signup")

api.add_resource(Logout, "/logout")


if __name__ == "__main__":
    app.run(port=5555, debug=True)

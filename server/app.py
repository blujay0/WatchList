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

# from config import app, db, api
from models import db, Customer, Order, CartItem, OrderDetail, Product

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///store.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)  # instantiate new instance of Api class


# Views go here!
class Products(
    Resource
):  # this is not your model, but a new class that represents the information you will be accessing
    def get(self):  # self is the instance of the class
        products = Products.query.all()
        return make_response(products, 200)


# api.add_resource() tells the api to look at a specified resource (connects to resource);
# 1st arg: which resource you're adding, 2nd arg: the endpoint
api.add_resource(Products, "/products")


if __name__ == "__main__":
    app.run(port=5555, debug=True)

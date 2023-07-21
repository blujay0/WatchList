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
from flask_bcrypt import Bcrypt
from models import db, CartItem, Customer, OrderDetail, Order, Product
import re

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///store.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = False
app.config["SECRET_KEY"] = "key"

migrate = Migrate(app, db)
db.init_app(app)
bcrypt = Bcrypt(app)
api = Api(app)  # instantiate new instance of Api class


# Views go here!


# the Customer class is not your model, but a new class that represents the information you will be accessing
class CustomerByID(Resource):  # for Profiles
    def get(self):
        # retrieve
        if session.get("id"):
            return make_response(db.session.get(Customer, session["id"]).as_dict(), 200)
        return make_response()

    def post(self):
        try:
            if session.get("id"):
                data = request.get_json()
                if not ():
                    db.session.add
                    db.session.commit()
                    return make_response()
                else:
                    pass
                    return make_response()
        except Exception as e:
            return make_response()

    def patch(self):
        if customer := db.session.get(Customer, session.get("id")):
            pass
        db.session.add(customer)
        db.session.commit()
        return make_response(customer.to_dict(), 200)

    def delete(self):
        if customer := db.session.get(Customer, session.get("id")):
            db.session.delete(customer)
            db.session.commit()
            return make_response({}, 204)


class Cart(Resource):
    # 1. get id of user which comes from session
    # 2. enter record into cartitems table with product.id
    # backedn gets id for customer.id and product.id comes from client when button is clicked when fetch called
    def get(self):
        if "id" in session:
            customer_id = session["id"]
            # products = [product.as_dict() for product in Product.query.all()]
            cartItems = [
                cartItem.as_dict()
                for cartItem in CartItem.query.filter(
                    CartItem.customer_id == customer_id
                ).all()
            ]

        return make_response(cartItems, 200)

    def post(self):  # for posting to cart items server
        if "id" in session:
            data = request.get_json()
            customer_id = session["id"]
            product_id = data["product_id"]
            cartItem = CartItem(customer_id=customer_id, product_id=product_id)

            db.session.add(cartItem)
            db.session.commit()
        return make_response("cart item added successfully")

    def delete(self):
        if "id" in session:
            data = request.get_json()
            customer_id = session["id"]
            product_id = data["product_id"]
            cartItem = CartItem.query.filter(
                CartItem.customer_id == customer_id, CartItem.product_id == product_id
            ).first()

            db.session.delete(cartItem)
            db.session.commit()
        return make_response("")


class Login(Resource):
    def post(self):
        data = (
            request.get_json()
        )  # give me json part of data (requests can have other info)
        email = data["email"]
        password = data["password"]
        # write a query to get object associated with email address, if email doesn't exist customer is none
        customer = Customer.query.filter(Customer.email == email).first()
        if customer:
            # successful log customer in
            if bcrypt.check_password_hash(
                customer.password, password
            ):  # check arg1 against arg2
                session["id"] = customer.id
                session["name"] = customer.name
                return {"customer": customer.name}
            else:
                print("bad password")
                return {"error": "invalid credentials"}
        else:
            print("bad email")
            return {"error": "invalid credentials"}


class Logout(Resource):
    # both server and client can delete cookies
    # flask session on server is different than client-side session
    def post(self):
        session.clear()
        print("session data")
        print("cookie cleared!")
        print(session["id"])
        print(session["name"])
        return make_response({}, 202)


# the Products class is not your model, but a new class that represents the information you will be accessing
class Products(Resource):
    # self is the instance of the class
    def get(self):
        try:
            # the as_dict() method that you built in models is used here b/c you can only serialize if it is converted to a dictionary
            products = [product.as_dict() for product in Product.query.all()]

            # you can also just 'return products, 200' but make_response is preferred
            return make_response(products, 200)

        except Exception as e:
            return make_response({"error": e}, 400)

    # create new product
    def post(self):
        # get data sent from client
        data = request.get_json()
        # set client sent values to keys

        maker = data["maker"]
        model = data["model"]
        product_name = data["product_name"]
        product_price = data["product_price"]
        inventory = data["inventory"]
        product_description = data["product_description"]
        image = data["image"]

        # use the class to create an instance of the class
        product = Product(
            maker=maker,
            model=model,
            product_name=product_name,
            product_price=product_price,
            inventory=inventory,
            product_description=product_description,
            image=image,
        )

        db.session.add(product)
        db.session.commit()  # saves to database
        return make_response(product.as_dict(), 201)


class ProductByID(Resource):
    def get(self, id):
        try:
            product = Product.query.filter(Product.id == id).first().as_dict()
            return make_response(product, 200)
        except Exception as e:
            return make_response({"error": e}, 400)

    # id parameter comes from client side page where client makes fetch request
    def patch(self, id):
        data = request.get_json()
        product_name = data["product_name"]
        maker = data["maker"]
        image = data["image"]

        # add more fields as necessary
        # consider what happens when client does not provide value for a field

        product.product_name = product_name
        product.maker = maker
        product.image = image
        product = Product.query.filter(Product.id == id).first()

        # below is the same thing done above
        # for key, value in request.get_json().items():
        #     setattr(product, key, value)

        # no need for db.session.add()
        db.session.commit()
        return make_response(product.as_dict(), 200)

    def delete(self, id):
        # query
        product = Product.query.filter(Product.id == id).first()

        # session commands
        db.session.delete(product)
        db.session.commit()

        # return response
        return make_response({}, 204)


class SignUp(Resource):
    def post(self):
        data = request.get_json()
        name = data["name"]
        email = data["email"]
        address = data["address"]
        password = data["password"]
        try:
            profile = Customer(
                name=name,
                email=email,
                address=address,
                password=bcrypt.generate_password_hash(password),
            )
            db.session.add(profile)
            db.session.commit()
        except:
            db.session.rollback()
            raise  # raises a specific exception when a condition is met or the code encounters an error
            return make_response({"error": "Something went wrong!"}, 400)


# api.add_resource() tells the api to look at a specified resource (connects to resource);
# 1st arg: which resource you're adding, 2nd arg: the endpoint
api.add_resource(Products, "/products")
api.add_resource(ProductByID, "/products/<int:id>")

api.add_resource(CustomerByID, "/customer/<int:id>")

api.add_resource(Cart, "/cart")

api.add_resource(Login, "/login")

api.add_resource(SignUp, "/signup")

api.add_resource(Logout, "/logout")


if __name__ == "__main__":
    app.run(port=5555, debug=True)

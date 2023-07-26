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
import requests

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
# these are not your Model classes and are NEW classes that represent the information you will be accessing
class CustomerByID(Resource):  # for Profiles
    def get(self):
        # retrieve
        # user-specific info always needs this
        # get session id
        if session.get("id"):
            return make_response(Customer.query.get(session["id"]).as_dict(), 200)
        return make_response({"error": "user is not logged in"}, 401)

        # def post(self):
        #     try:
        #         if session.get("id"):
        #             data = request.get_json()
        #             if not ():
        #                 db.session.add
        #                 db.session.commit()
        #                 return make_response()
        #             else:
        #                 pass
        #                 return make_response()
        #     except Exception as e:
        #         return make_response()

        # def patch(self):
        #     if customer := db.session.get(Customer, session.get("id")):
        #         pass
        #     db.session.add(customer)
        #     db.session.commit()
        #     return make_response(customer.to_dict(), 200)

    def delete(self):
        if customer := db.session.get(Customer, session.get("id")):
            db.session.delete(customer)
            db.session.commit()
            return make_response({"success": "successful delete"}, 204)


class Cart(Resource):
    # 1. get id of user which comes from session
    # 2. enter record into cartitems table with product.id
    # backend gets id for customer.id and product.id comes from client when button is clicked when fetch called
    def get(self):
        # user-specific info always needs to check id in session (if "id" in session)
        if "id" in session:
            customer_id = session["id"]
            cartItems = [
                cartItem.as_dict()
                for cartItem in CartItem.query.filter(
                    CartItem.customer_id == customer_id
                ).all()
            ]
            return make_response(cartItems, 200)
        return make_response({"error": "not found"}, 404)

    def post(self):  # for posting to cart items server
        # user-specific info always needs this
        if "id" in session:
            data = request.get_json()
            customer_id = session["id"]
            product_id = data["product_id"]
            cartItem = CartItem(customer_id=customer_id, product_id=product_id)

            db.session.add(cartItem)
            db.session.commit()
            return make_response({"success": "cart item added successfully"}, 201)

    # this is for the 'remove' button on each cart item
    def delete(self):
        # user-specific info always needs this
        if "id" in session:
            data = request.get_json()
            customer_id = session["id"]
            product_id = data["product_id"]
            cartItem = CartItem.query.filter(
                CartItem.customer_id == customer_id, CartItem.product_id == product_id
            ).first()

            db.session.delete(cartItem)
            db.session.commit()
            return make_response({"success": "delete successful"}, 200)


class Login(Resource):
    def post(self):
        try:
            # give me json part of data (requests can have other info)
            data = request.get_json()
            email = data["email"]
            password = data["password"]
            # write a query to get object associated with email address, if email doesn't exist customer is none
            customer = Customer.query.filter(Customer.email == email).first()
            # if successful log customer in
            if customer:
                # check password in database against password input
                if bcrypt.check_password_hash(customer.password, password):
                    # if matches then session id and name is set to the customer id and name, respectively
                    session["id"] = customer.id
                    session["name"] = customer.name
                    return make_response(
                        {
                            "customer": customer.name,
                            "customer_id": customer.id,
                        }
                    )
                else:
                    # print("bad password")
                    return make_response({"error": "invalid credentials"}, 400)
            else:
                # print("bad email")
                return make_response({"error": "invalid credentials"}, 400)
        except Exception as e:
            # print(e)
            return make_response({"error": "invalid credentials"}, 500)


class Logout(Resource):
    # both server and client can delete cookies
    # flask session on server is different than client-side session
    def post(self):
        session.clear()
        # print("session data")
        # print("cookie cleared!")
        return make_response({}, 201)


# the Products class is not your model, but a new class that represents the information you will be accessing
class Products(Resource):
    # self is the instance of the class
    def get(self):
        try:
            # the as_dict() method that you built in models is used here, you can only serialize if it is converted to a dictionary
            products = [product.as_dict() for product in Product.query.all()]

            # you can also just 'return products, 200' but make_response is preferred
            return make_response(products, 200)

        except Exception as e:
            return make_response({"error": str(e)}, 404)

    # create new product
    def post(self):
        if "id" in session:
            # get data sent from client
            data = request.get_json()
            # set client sent values to keys

            customer_id = session["id"]
            maker = data["maker"]
            model = data["model"]
            product_name = data["product_name"]
            product_price = data["product_price"]
            inventory = data["inventory"]
            product_description = data["product_description"]
            image = data["image"]

            # use the MODEL class to create an instance of the class
            try:
                product = Product(
                    maker=maker,
                    model=model,
                    product_name=product_name,
                    product_price=product_price,
                    inventory=inventory,
                    product_description=product_description,
                    image=image,
                    customer_id=customer_id,
                )
            except ValueError as e:
                return make_response({"error": str(e)}, 400)

            db.session.add(product)
            db.session.commit()  # saves to database
            return make_response(product.as_dict(), 201)


class ProductByID(Resource):
    def get(self, id):
        try:
            product = Product.query.filter(Product.id == id).first().as_dict()
            return make_response(product, 200)
        except Exception as e:
            return make_response({"error": str(e)}, 400)

    # id parameter comes from client side page where client makes fetch request
    def patch(self, id):
        if "id" not in session:
            return make_response({"error": "unauthorized user"}, 401)

        product = Product.query.filter(Product.id == id).first()

        # if person that is logged in is not the owner, return error
        if session["id"] != product.customer_id:
            return make_response({"error": "unauthorized user"}, 401)

        data = request.get_json()

        # assign data values to variables
        product_name = data["product_name"]
        maker = data["maker"]
        image = data["image"]
        product_price = data["product_price"]
        model = data["model"]

        # add more fields as necessary
        # consider what happens when client does not provide value for a field

        try:
            product.product_name = product_name
            product.maker = maker
            product.model = model
            product.image = image
            product.product_price = product_price

        except ValueError as e:
            return make_response({"error": str(e)}, 400)

        # below is the same thing done above
        # for key, value in request.get_json().items():
        #     setattr(product, key, value)

        # no need for db.session.add()
        db.session.commit()
        return make_response(product.as_dict(), 200)

    def delete(self, id):
        # query
        product = Product.query.filter(Product.id == id).first()

        # make sure that someone is logged in
        if "id" not in session:
            return make_response({"error": "unauthorized user"}, 401)

        # if person that is logged in is not the owner, return error
        if session["id"] != product.customer_id:
            return make_response({"error": "unauthorized user"}, 401)

        # session commands
        db.session.delete(product)
        db.session.commit()

        # return response
        return make_response({}, 204)


class SignUp(Resource):
    def post(self):
        try:
            data = request.get_json()
            name = data["name"]
            email = data["email"]
            address = data["address"]
            password = data["password"]
            # querying db for customer using that email
            # if customer already exists, return a message
            # if customer does NOT exist, code continues as normal
            customer = Customer.query.filter(Customer.email == email).first()
            if customer:
                return make_response({"message": "email already exists"}, 200)
            try:
                # anytime using a Customer obj, we use the corresponding error defined in models.py
                new_customer = Customer(
                    name=name,
                    email=email,
                    address=address,
                    password=bcrypt.generate_password_hash(password),
                )
            # if anything in try raises an error catch it here
            except ValueError as e:
                # e (exception object) includes the actual text that you put in the ValueError models.py
                return make_response({"message": str(e)})

            db.session.add(new_customer)
            db.session.commit()

            # add to chat engine
            data = {
                "username": email,
                "secret": "same_secret",
            }
            headers = {"PRIVATE-KEY": "33c865ed-6f11-486f-b1e0-461096a45d38"}
            r = requests.post(
                "https://api.chatengine.io/users/", data=data, headers=headers
            )
            # print(r.text)
            return make_response({"message": ""}, 201)

        # except is telling program that you will take care of exception
        except:
            # rolls back the transaction if session not successful
            db.session.rollback()
            raise  # turns it back into unhandled exception: raises a specific exception when a condition is met or the code encounters an error
            return make_response({"error": "Something went wrong!"}, 500)


class Orders(Resource):
    def get(self):
        # user-specific info always needs this
        if "id" in session:
            customer_id = session["id"]

            # get order for particular user
            orders = Order.query.filter(Order.customer_id == customer_id).all()

            return make_response([order.as_dict() for order in orders])

    def post(self):
        # user-specific info always needs this
        if "id" in session:
            customer_id = session["id"]

            # get cart items
            # query for cat items associated w/ customer
            # .all() returns a list
            # .first() returns obj
            cartItems = CartItem.query.filter(CartItem.customer_id == customer_id).all()

            total_amount = 0

            order = Order(customer_id=customer_id)

            # for each item in cartItems, append an Order Details obj to order
            for item in cartItems:
                order_detail = OrderDetail(
                    quantity=1,
                    product=item.product,
                )
                # order obj created in line 362
                order.order_details.append(order_detail)
                total_amount += item.product.product_price

            order.total_amount = total_amount

            db.session.add(order)
            # clears the cart after add to session
            CartItem.query.filter(CartItem.customer_id == customer_id).delete()
            db.session.commit()

            return make_response({}, 201)

        # try:
        #     # get data sent from client
        #     data = request.get_json()
        #     # set client sent values to keys

        #     customer_id = data["customer_id"]
        #     date = data["date"]
        #     total_amount = data["total_amount"]

        #     # use the MODEL class to create an instance of the class
        #     order = Order(
        #         customer_id=customer_id,
        #         date=date,
        #         total_amount=total_amount,
        #     )

        #     db.session.add(order)
        #     db.session.commit()  # saves to database
        #     return make_response(order.as_dict(), 201)

        # except Exception as e:
        #     return make_response({"error": str(e)}, 400)


# api.add_resource() tells the api to look at a specified resource (connects to resource);
# 1st arg: which resource you're adding, 2nd arg: the endpoint
api.add_resource(Products, "/products")
api.add_resource(ProductByID, "/products/<int:id>")

api.add_resource(CustomerByID, "/customer")

api.add_resource(Cart, "/cart")

api.add_resource(Login, "/login")

api.add_resource(SignUp, "/signup")

api.add_resource(Logout, "/logout")

api.add_resource(Orders, "/orders")


if __name__ == "__main__":
    app.run(port=5555, debug=True)

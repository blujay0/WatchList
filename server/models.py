"""
Remember to regularly run 
flask db revision --autogenerate -m'<descriptive message>' 
and flask db upgrade head 
to track your modifications to the database and 
create checkpoints in case you ever need to roll 
those modifications back.

Tip: It's always a good idea to start with an empty 
revision! This allows you to roll all the way back 
while still holding onto your database. You can create 
this empty revision with flask db revision -m'Create DB'
"""

"""
remember that you will need to use Flask-SQLAlchemy, 
Flask-Migrate, and SQLAlchemy-Serializer instead of 
SQLAlchemy and Alembic in your models
"""
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
import re

# from sqlalchemy.orm import back_populates

db = SQLAlchemy()  # an instance of the SQLAlchemy class is our database


# Models go here!
class Customer(db.Model):
    __tablename__ = "customers"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.VARCHAR, nullable=False, unique=True)
    address = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, unique=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    # relationships
    cart_items = db.relationship("CartItem", back_populates="customer")
    orders = db.relationship("Order", back_populates="customer")
    products = db.relationship("Product", back_populates="owner")

    # validations
    @validates("name")
    def validate_name(self, key, name):
        if not name:
            raise ValueError("Customer needs a name")
        if len(name) > 20:
            raise ValueError("Name must be less than 20 chars")
        return name

    # sqlalchemy documentation
    # @validates("email")
    # def validate_email(self, key, address):
    #     assert "@" in address
    #     return address

    @validates("email")
    def validate_email(self, key, email):
        if "@" not in email:
            raise ValueError("email requires @")
        return email

    @validates("password")
    def validate_password(self, key, password):
        if len(password) < 5:
            raise ValueError("password should be more than 4 characters")
        # if len(password) > 20:
        #     raise ValueError("password should be less than 20 characters")
        return password

    # other methods
    def __repr__(self):
        return (
            f"<Customer ID: #{self.id}\n"
            + f"Name: {self.name}"
            + f"Email: {self.email}"
            + f"Address: {self.address}"
            + f"Password: {self.password}"
        )

    def as_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "address": self.address,
        }


class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey("customers.id"))
    maker = db.Column(db.String, nullable=False)
    model = db.Column(db.String, nullable=False)
    product_name = db.Column(db.String, nullable=False)
    product_price = db.Column(db.Integer, nullable=False)
    inventory = db.Column(db.Integer, nullable=False)
    product_description = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)

    # relationships
    order_details = db.relationship("OrderDetail", back_populates="product")
    cart_items = db.relationship("CartItem", back_populates="product")
    owner = db.relationship("Customer", back_populates="products")

    # validations
    @validates("maker")
    def validate_maker(self, key, maker):
        if len(maker) < 3:
            raise ValueError("maker name is too short")

        if len(maker) > 20:
            raise ValueError("maker name is too long")
        return maker

    @validates("model")
    def validate_model(self, key, model):
        if model not in ["automatic", "manual"]:
            raise ValueError("model must be either 'automatic' or 'manual'")
        return model

    @validates("product_name")
    # (obj in question, key=attribute label, value=val of key)
    def validate_product_name(self, key, product_name):
        if len(product_name) < 3:
            raise ValueError("product name is too short")
        if len(product_name) > 60:
            raise ValueError("product name is too long")
        return product_name

    @validates("product_price")
    def validate_product_price(self, key, product_price):
        if product_price < 50:
            raise ValueError("product price must be at least 50")
        return product_price

    @validates("inventory")
    def validate_inventory(self, key, inventory):
        if inventory <= 0:
            raise ValueError("inventory must be greater than 0")
        return inventory

    @validates("product_description")
    def validate_product_description(self, key, product_description):
        if len(product_description) < 25:
            raise ValueError("product description too short")
        if len(product_description) > 5000:
            raise ValueError("product description too long")
        return product_description

    # other methods
    def __repr__(self):
        return (
            f"<Product ID: #{self.id}\n"
            + f"Product Name: {self.product_name}"
            + f"Maker: {self.maker}"
            + f"Model: {self.model}"
            + f"Product Price: {self.product_price}"
            + f"Inventory: {self.inventory}"
            + f"Product Description: {self.product_description}"
        )

    def as_dict(self):
        return {
            "customer_id": self.customer_id,
            "product_id": self.id,
            "maker": self.maker,
            "model": self.model,
            "product_name": self.product_name,
            "product_price": self.product_price,
            "inventory": self.inventory,
            "product_description": self.product_description,
            "image": self.image,
        }


class Order(db.Model):
    __tablename__ = "orders"

    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey("customers.id"))
    date = db.Column(db.DateTime, server_default=db.func.now())
    total_amount = db.Column(db.Integer, nullable=False)

    # relationships
    order_details = db.relationship("OrderDetail", back_populates="order")
    customer = db.relationship("Customer", back_populates="orders")
    # cart_items = association_proxy("customers", "cart_item")

    # validations

    # other methods
    def __repr__(self):
        return (
            f"<Order ID: #{self.id}\n"
            + f"Customer ID: {self.customer_id}"
            + f"Date: {self.date}"
            + f"Total Amount: {self.total_amt}"
        )

    def as_dict(self):
        # order_details = []
        # for order_detail in self.order_details:
        #     order_details.append(order_detail.as_dict())

        # self.order_details refers to the order_details attribute
        return {
            "order_id": self.id,
            "customer_id": self.customer_id,
            "date": self.date,
            "total_amount": self.total_amount,
            # sets order_details attribute to a list of order_details
            "order_details": [
                order_detail.as_dict() for order_detail in self.order_details
            ],
        }


# join table
class CartItem(db.Model):
    __tablename__ = "cart_items"

    id = db.Column(db.Integer, primary_key=True, unique=True)
    customer_id = db.Column(db.Integer, db.ForeignKey("customers.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))

    # relationships
    customer = db.relationship("Customer", back_populates="cart_items")
    product = db.relationship("Product", back_populates="cart_items")

    # serializations

    # validations

    # other methods
    def __repr__(self):
        return (
            f"<Cart Item ID: #{self.id}\n"
            + f"Customer ID: {self.customer_id}"
            + f"Product ID: {self.product_id}"
        )

    def as_dict(self):
        return {
            "cart_item_id": self.id,
            "customer_id": self.customer_id,
            "product_id": self.product_id,
        }


# join table
class OrderDetail(db.Model):
    __tablename__ = "order_details"

    id = db.Column(db.Integer, primary_key=True, unique=True)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    order_id = db.Column(db.Integer, db.ForeignKey("orders.id"))
    quantity = db.Column(db.Integer, nullable=False)

    # relationships
    order = db.relationship("Order", back_populates="order_details")
    product = db.relationship("Product", back_populates="order_details")

    # serializations

    # validations

    # other methods
    def __repr__(self):
        return (
            f"<Cart Item ID: #{self.id}\n"
            + f"Customer ID: {self.customer_id}"
            + f"Product ID: {self.product_id}"
        )

    def as_dict(self):
        return {
            "id": self.id,
            "product_id": self.product_id,
            "quantity": self.quantity,
        }

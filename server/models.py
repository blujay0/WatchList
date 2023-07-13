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

from sqlalchemy_serializer import SerializerMixin

from config import db


# Models go here!
class Customer(db.Model):
    __tablename__ = "customers"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.VARCHARD, nullable=False, unique=True)
    address = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, unique=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    # relationships

    # validations

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
            "password": self.password,
        }


class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    maker = db.Column(db.String, nullable=False)
    model = db.Column(db.String, nullable=False)
    product_name = db.Column(db.String, nullable=False)
    product_price = db.Column(db.String, nullable=False)
    inventory = db.Column(db.Integer, nullable=False)
    product_description = db.Column(db.String, nullable=False)

    # relationships

    # validations

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
            "product_id": self.id,
            "maker": self.maker,
            "model": self.model,
            "product_name": self.product_name,
            "product_price": self.product_price,
            "inventory": self.inventory,
            "product_description": self.product_description,
        }


class Order(db.Model):
    __tablename__ = "orders"

    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey("customers.id"))
    date = db.Column(db.DateTime, server_default=db.func.now())
    total_amount = db.Column(db.Integer, nullable=False)

    # relationships

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
        return {
            "order_id": self.id,
            "customer_id": self.customer_id,
            "date": self.date,
            "total_amount": self.total_amt,
        }

"""
If you want to seed your database, write out your 
seed.py script and run it to generate some test data. 
You may want to use Pipenv to install Faker 
to save you some time.
"""

"""
Don't forget to set an app context in your seed file!!!
"""

#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Customer, Order, CartItem, OrderDetail, Product

fake = Faker()

with app.app_context():  # necessary to be in context of your application
    Customer.query.delete()
    Order.query.delete()
    CartItem.query.delete()
    OrderDetail.query.delete()
    Product.query.delete()

    p1 = Product(
        maker="Timex",
        model="manual",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p2 = Product()

    p3 = Product()

    p4 = Product()

    p5 = Product()

    p6 = Product()

    p7 = Product()

    p8 = Product()

    p9 = Product()

    p10 = Product()

    products = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]

    db.session.add_all(products)
    db.session.commit()
    
    c1 = Customer(
        name= , email= , address= , password= , create_at= , updated_at= ,
    )

if __name__ == "__main__":
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

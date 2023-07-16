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

    p2 = Product(
        maker="Seiko",
        model="automatic",
        product_name="SRPD25",
        product_price=525,
        inventory=fake.random_int(1, 10000),
        product_description="Among the pantheon of great Seiko dive watches, there are a few that stand apart thanks to their more extreme designs and intriguing history. One is the so-called “Tuna,” which features a two-part case with a shroud, and the other is the venerable “Monster,” a watch that looks truly unlike any other and boasts its own cult-like enthusiast following. The modern Monster follows closely in the footsteps of the original, released way back in 2000, upgraded with a hacking and hand-winding 4R36 caliber. And while Seiko dive watches generally have an impressive reputation for utilizing the brand’s own Lumibrite luminescent material, the Monster family for whatever reason historically gets a heaping helping, with this watch offering monstrously (sorry) bright incandescent in reduced lighting conditions. Add to that an iconic but polarizing visual design format, and you have one of the best modern dive watches in this price range, assuming you’re on board with the more extreme look.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Seiko-Diver-1.jpg?v=1649188682/200",
    )

    p3 = Product(
        maker="Timex",
        model="manual",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p4 = Product(
        maker="Timex",
        model="automatic",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p5 = Product(
        maker="Timex",
        model="manual",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p6 = Product(
        maker="Timex",
        model="automatic",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p7 = Product(
        maker="Timex",
        model="manual",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p8 = Product(
        maker="Timex",
        model="automatic",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p9 = Product(
        maker="Timex",
        model="manual",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p10 = Product(
        maker="Timex",
        model="automatic",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p11 = Product(
        maker="Timex",
        model="manual",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p12 = Product(
        maker="Hamilton",
        model="automatic",
        product_name="Khaki Field",
        product_price=500,
        inventory=fake.random_int(1, 10000),
        product_description="For under $500, the Hamilton Khaki Field Mechanical is perhaps the best Swiss mechanical watch on the market, full stop. It contains a modified Swiss ETA 2801 caliber that Hamilton calls the H-50, which drops the beat frequency from the standard 28,000 VPH to 21,600 VPH to stretch the power reserve out to an impressive 80 hours. And the longer power reserve here is especially impactful with this being a hand-wound watch. Beyond the movement, the Khaki Field Mechanical leans into Hamilton’s impressive history of supplying field watches to the U.S. and other Allied military organizations in World War II, with this basic dial design dating back decades. In the modern world, the Khaki Field Mechanical (you can learn more about it here) is an impressive value with a lot to offer for both military missions as well as life’s everyday operations.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Hamilton-Khaki-Field-Manual-2.jpg?v=1649188187/200",
    )

    p13 = Product(
        maker="Timex",
        model="manual",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p14 = Product(
        maker="Timex",
        model="automatic",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p15 = Product(
        maker="Timex",
        model="manual",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p16 = Product(
        maker="Timex",
        model="automatic",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p17 = Product(
        maker="Timex",
        model="manual",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p18 = Product(
        maker="Timex",
        model="automatic",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p19 = Product(
        maker="Timex",
        model="manual",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    p20 = Product(
        maker="Timex",
        model="automatic",
        product_name="Marlin",
        product_price=200,
        inventory=fake.random_int(1, 10000),
        product_description="Housed within the safety of a diminutive 34mm wide stainless steel case that only measures 41mm in length, the modern Marlin still feels very much of the midcentury, presenting an impressively inexpensive take on the Don Draper design language that seems to be permeating our vintage-obsessed cultural marketplace. Equipped with a heavily-domed acrylic crystal, a range of intriguing dial finishes and colors, and a reliable but simple Seagull caliber from China, the Timex Marlin is the definitive hand-winding dress watch for its staggeringly-low $200 retail price.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-marlin-handwound-2.jpg?v=1649256945/200",
    )

    products = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]

    db.session.add_all(products)
    db.session.commit()

    # c1 = Customer(
    #     name= , email= , address= , password= , create_at= , updated_at= ,
    # )

if __name__ == "__main__":
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

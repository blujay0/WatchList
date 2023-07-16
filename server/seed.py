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
        maker="Orient",
        model="manual",
        product_name="Monarch",
        product_price=450,
        inventory=fake.random_int(1, 10000),
        product_description="While often difficult to find, with limited distribution at least in the United States, the Orient Monarch is one of the most traditional and charming manual-winding watches on the market from a more attainable point of view. Complete with printed Arabic numerals that look like they’ve been neatly applied with a calligrapher’s ink pen, the Monarch is a pure traditional watch design updated with a modern hacking caliber from Orient with 40 hours of power reserve as well as 50 meters of capable water resistance for additional peace of mind. Positioned at 40mm in diameter and only 45mm in length, the Monarch should wear well on all but the smallest or largest wrists, providing a dressier option for anyone looking for a straightforward and classic watch that looks significantly more expensive than it is.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Orient-2.jpg?v=1649173137/200",
    )

    p4 = Product(
        maker="Citizen",
        model="automatic",
        product_name="NY0040-09E",
        product_price=400,
        inventory=fake.random_int(1, 10000),
        product_description="The broad collection of 42mm Promaster automatic dive watches, including this NY0040-09E, has long served as a capable alternative to Seiko, providing a hacking and hand-winding Miyota caliber for essentially the same price as the SKX with its simpler 7S26, and also serving up dozens of dial and bezel color combinations to suit virtually any taste. It’s a relatively basic ISO-certified dive watch, yes, but it’s also a legitimate undersea tool proven on the wrists of countless military, commercial, and recreational divers over the years. And with the SKX’s discontinuation in 2019 and the rapidly ascending prices that came along with it, the future of the NY0040 as an excellent alternative looks better than ever.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Citizen-Diver-1.jpg?v=1649189137/200",
    )

    p5 = Product(
        maker="Timex",
        model="manual",
        product_name="Expedition North Field",
        product_price=160,
        inventory=fake.random_int(1, 10000),
        product_description="Where the first two watches on our list of hand-winders are definitively in the dress category, the Timex Expedition North Field Mechanical provides a much sportier aesthetic with capable specs to boot. Put simply, most manually-wound watches are dressier as brands assume those with more athletic or outdoorsy proclivities will also value the utility provided by an automatic caliber. But this straightforward field watch from Timex pairs 100 meters of water resistance with a sapphire crystal while maintaining the same attention-grabbing $200 price point as its dressier cousin in the Marlin. In addition, the North Field is more modern, providing elements of classic military field watches of decades past with enough novelty to stand alone as a modern piece.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Timex-blue-2.jpg?v=1649173383/200",
    )

    p6 = Product(
        maker="Orient",
        model="automatic",
        product_name="Kamasu Blue Dial",
        product_price=335,
        inventory=fake.random_int(1, 10000),
        product_description="On the smaller end of the case size spectrum, the Orient Kamasu offers a vaguely Submariner-esque design format with a traditional 3 o’clock crown position but differs in its angular dial markings and impressive finishing for this price point. For smaller wrists, the Kamasu presents an especially pleasing option, pairing a 41.8mm diameter that wears smaller with a curt 46mm lug to lug measurement that feels like a slightly-downsized take on the aforementioned Rolex Submariner. In this price range, the hacking hand-winding F6922 caliber and sapphire crystals are stand-outs, as is the well-done bracelet that complements the overall look. This one isn’t technically ISO 6425-certified as a dive watch, but for anyone entering the watch hobby from the aquatic perspective, the Kamasu is an excellent place to start.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Orient-Kamasu-2.jpg?v=1649189641/200",
    )

    p7 = Product(
        maker="anOrdain",
        model="manual",
        product_name="Model 1 Iron Cream",
        product_price=2200,
        inventory=fake.random_int(1, 10000),
        product_description="The Model 1 Iron Cream is a hand-wound three-hander with central seconds. It’s powered by a Sellita SW210-1, a competitor to ETA’s 2801-2. Remember, the 2801-2 is the base that Hamilton’s H-50 is based upon. Unlike the H-50, the power reserve is only 42 hours, requiring daily winding.",
        image="https://static.fratello.com/2022/10/anOrdain-Model-1-Iron-Creme-Small-Staged.jpg/200",
    )

    p8 = Product(
        maker="Zelos",
        model="automatic",
        product_name="Mako V3",
        product_price=449,
        inventory=fake.random_int(1, 10000),
        product_description="Acting as one of the smaller dive watches in the Zelos collection, the Mako V3’s list of specifications reads like a watch costing multiple times the watch’s $450 price point. With surface-hardened titanium for the case and bracelet, a micro-adjusting clasp, a nine-series Miyota caliber, Seiko-rivaling luminescent material, and a beautifully-executed colorful dial finish, the Mako V3 is an affordable dive watch to consider for anyone looking to check the boxes with specifications while wearing an interesting modern dive watch.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Zelos-Mako-2.jpg?v=1649189970/200",
    )

    p9 = Product(
        maker="Stowa ",
        model="manual",
        product_name="Marine Classic 36 Roman",
        product_price=1100,
        inventory=fake.random_int(1, 10000),
        product_description="The Marine Classic 36 Roman Hand Wound uses an ETA/Peseux 7001 hand-wind caliber. The 42-hour power reserve calls for daily winding. The Peseux 7001 has a long history and is found — usually extremely modified — in some of the most unlikely watches. But in this case, it’s been left original except for Stowa’s brand engraving visible on one of the bridges through the transparent case back.",
        image="https://static.fratello.com/2022/10/Stowa-Marine-Classic-36-hand-wound-front-e1664520327388.jpg/200",
    )

    p10 = Product(
        maker="Baltic",
        model="automatic",
        product_name="HMS002",
        product_price=400,
        inventory=fake.random_int(1, 10000),
        product_description="The HMS002 provides a refined option pairing a traditional take on a sector dial with more modern typography for an intriguing overall design. With a very traditional set of dimensions headlined by a 38mm diameter, restrained 47mm lug-to-lug, and 12mm thickness, even including the box-section acrylic crystal, the HMS002 does well in playing the part of a vintage watch on the wrist. Galvanizing the impressive value proposition is the inclusion of an 8-series Miyota automatic caliber to this charming microbrand dress watch from France.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Baltic-Watch-2.jpg?v=1649252817/200",
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

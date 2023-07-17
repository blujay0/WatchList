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
        product_description="Among the pantheon of great Seiko dive watches, there are a few that stand apart thanks to their more extreme designs and intriguing history. One is the so-called “Tuna,” which features a two-part case with a shroud, and the other is the venerable “Monster,” a watch that looks truly unlike any other and boasts its own cult-like enthusiast following. The modern Monster follows closely in the footsteps of the original, released way back in 2000, upgraded with a hacking and hand-winding 4R36 caliber. And while Seiko dive watches generally have an impressive reputation for utilizing the brand's own Lumibrite luminescent material, the Monster family for whatever reason historically gets a heaping helping, with this watch offering monstrously (sorry) bright incandescent in reduced lighting conditions. Add to that an iconic but polarizing visual design format, and you have one of the best modern dive watches in this price range, assuming you're on board with the more extreme look.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Seiko-Diver-1.jpg?v=1649188682/200",
    )

    p3 = Product(
        maker="Orient",
        model="manual",
        product_name="Monarch",
        product_price=450,
        inventory=fake.random_int(1, 10000),
        product_description="While often difficult to find, with limited distribution at least in the United States, the Orient Monarch is one of the most traditional and charming manual-winding watches on the market from a more attainable point of view. Complete with printed Arabic numerals that look like they've been neatly applied with a calligrapher's ink pen, the Monarch is a pure traditional watch design updated with a modern hacking caliber from Orient with 40 hours of power reserve as well as 50 meters of capable water resistance for additional peace of mind. Positioned at 40mm in diameter and only 45mm in length, the Monarch should wear well on all but the smallest or largest wrists, providing a dressier option for anyone looking for a straightforward and classic watch that looks significantly more expensive than it is.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Orient-2.jpg?v=1649173137/200",
    )

    p4 = Product(
        maker="Citizen",
        model="automatic",
        product_name="NY0040-09E",
        product_price=400,
        inventory=fake.random_int(1, 10000),
        product_description="The broad collection of 42mm Promaster automatic dive watches, including this NY0040-09E, has long served as a capable alternative to Seiko, providing a hacking and hand-winding Miyota caliber for essentially the same price as the SKX with its simpler 7S26, and also serving up dozens of dial and bezel color combinations to suit virtually any taste. It's a relatively basic ISO-certified dive watch, yes, but it's also a legitimate undersea tool proven on the wrists of countless military, commercial, and recreational divers over the years. And with the SKX's discontinuation in 2019 and the rapidly ascending prices that came along with it, the future of the NY0040 as an excellent alternative looks better than ever.",
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
        product_description="On the smaller end of the case size spectrum, the Orient Kamasu offers a vaguely Submariner-esque design format with a traditional 3 o'clock crown position but differs in its angular dial markings and impressive finishing for this price point. For smaller wrists, the Kamasu presents an especially pleasing option, pairing a 41.8mm diameter that wears smaller with a curt 46mm lug to lug measurement that feels like a slightly-downsized take on the aforementioned Rolex Submariner. In this price range, the hacking hand-winding F6922 caliber and sapphire crystals are stand-outs, as is the well-done bracelet that complements the overall look. This one isn't technically ISO 6425-certified as a dive watch, but for anyone entering the watch hobby from the aquatic perspective, the Kamasu is an excellent place to start.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Orient-Kamasu-2.jpg?v=1649189641/200",
    )

    p7 = Product(
        maker="anOrdain",
        model="manual",
        product_name="Model 1 Iron Cream",
        product_price=2200,
        inventory=fake.random_int(1, 10000),
        product_description="The Model 1 Iron Cream is a hand-wound three-hander with central seconds. It's powered by a Sellita SW210-1, a competitor to ETA's 2801-2. Remember, the 2801-2 is the base that Hamilton's H-50 is based upon. Unlike the H-50, the power reserve is only 42 hours, requiring daily winding.",
        image="https://static.fratello.com/2022/10/anOrdain-Model-1-Iron-Creme-Small-Staged.jpg/200",
    )

    p8 = Product(
        maker="Zelos",
        model="automatic",
        product_name="Mako V3",
        product_price=449,
        inventory=fake.random_int(1, 10000),
        product_description="Acting as one of the smaller dive watches in the Zelos collection, the Mako V3's list of specifications reads like a watch costing multiple times the watch's $450 price point. With surface-hardened titanium for the case and bracelet, a micro-adjusting clasp, a nine-series Miyota caliber, Seiko-rivaling luminescent material, and a beautifully-executed colorful dial finish, the Mako V3 is an affordable dive watch to consider for anyone looking to check the boxes with specifications while wearing an interesting modern dive watch.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Zelos-Mako-2.jpg?v=1649189970/200",
    )

    p9 = Product(
        maker="Stowa ",
        model="manual",
        product_name="Marine Classic 36 Roman",
        product_price=1100,
        inventory=fake.random_int(1, 10000),
        product_description="The Marine Classic 36 Roman Hand Wound uses an ETA/Peseux 7001 hand-wind caliber. The 42-hour power reserve calls for daily winding. The Peseux 7001 has a long history and is found — usually extremely modified — in some of the most unlikely watches. But in this case, it's been left original except for Stowa's brand engraving visible on one of the bridges through the transparent case back.",
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
        maker="Oris",
        model="manual",
        product_name="Big Crown ProPilot X Calibre 115",
        product_price=8000,
        inventory=fake.random_int(1, 10000),
        product_description="The ProPilot X Calibre 115 is an intense watch. I'd call it beautiful, but beauty is in the eye of the beholder. The views from both the top and the bottom reveal a watch that's as much a visual lesson in watchmaking as it is an exploration of brutalism as an art form. The extra-large mainspring is visible at 12 o'clock. The brass gear train in the lower half peeks out from behind the running seconds between 7 and 8 o'clock and the power-reserve indicator. And the red jewel of the balance wheel is visible at 6 o'clock just below the text 'Big Crown ProPilot X'.",
        image="https://image.s5a.com/is/image/saks/0400018040529_NOCOLOR?wid=484&hei=646&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0/200",
    )

    p12 = Product(
        maker="Orient",
        model="automatic",
        product_name="Bambino",
        product_price=160,
        inventory=fake.random_int(1, 10000),
        product_description="The Bambino has grown to become an icon of affordability that almost no enthusiast manages to escape. Sure, it has its quirks, including an off-putting 21mm lug with and larger than necessary 40.5mm case, but the traditional attractive design formula and quality finishing for the price more than makes up for any shortcomings. The modern Bambino collection is also vast, meaning there is likely a dial and case variant that will appeal to your individual tastes. It's not exactly a hot take, but the Bambino is an icon of affordability available brand new for just over $150.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Orient-Bambino-2.jpg?v=1649251658/200",
    )

    p13 = Product(
        maker="Seagull",
        model="manual",
        product_name="1963",
        product_price=400,
        inventory=fake.random_int(1, 10000),
        product_description="In this price range, mechanical complications beyond something like a day or date function are all but nonexistent, with the chronograph being especially scarce as an effect of the sheer complexity that goes into producing a chrono caliber. However, there is a single outlier out there on the market with an intriguing history, the Seagull 1963. Based on a watch designed for the Chinese Air Force in that year, the 1963 is equipped with a Seagull ST19 caliber produced entirely in Seagull’s factory in China with tooling purchased from Venus, a then-prominent movement maker in Switzerland. The ST19 is therefore essentially a Chinese-made Venus 175 manual-winding column-wheel chronograph. And with the majority of Swiss-made column-wheel chronographs housed in watches that cost at least $3,000, the Seagull 1963 is a true outlier in terms of value that also offers impressive military history and a charming midcentury design format. It’s important to note when shopping for this watch that while several modern factories produce an almost interchangeable identical design, all of them rely on the same ST19 caliber from the original Seagull factory.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Seagull-Manual-2.jpg?v=1649188353/200",
    )

    p14 = Product(
        maker="Sternglas",
        model="automatic",
        product_name="Naos Automatik",
        product_price=439,
        inventory=fake.random_int(1, 10000),
        product_description="Sternglas offers a similar take on the basic Bauhaus design principles in a less expensive, microbrand package. In particular, the Naos Automatik comes in with a Miyota automatic caliber, anti-reflective coated sapphire crystal, and a pleasing, pared-back dial design that evokes watches like the Junghans Max Bill Auto. Priced right around $400, the Sternglas Naos collection, and especially this automatic variant, offer a more refined option with German roots without the higher cost typically associated with major German brands.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Sternglas-2.jpg?v=1649252267/200",
    )

    p15 = Product(
        maker="Nomos",
        model="manual",
        product_name="Club Ref. 703",
        product_price=1850,
        inventory=fake.random_int(1, 10000),
        product_description="Powering this Nomos watch 703 is Nomos’s in-house-made Alpha caliber, visible through the transparent case back. Though it has departed sufficiently enough from the caliber it was built off of to be called its own, the Peseux 7001 DNA is still present. Most notably, perhaps, is with the small running seconds at 6 o’clock and power reserve of 43 hours.",
        image="https://static.fratello.com/2022/10/Nomos-703-club-front.jpg/200",
    )

    p16 = Product(
        maker="Invicta",
        model="automatic",
        product_name="Pro Diver",
        product_price=100,
        inventory=fake.random_int(1, 10000),
        product_description="As far as styling goes, the Pro Diver is an acceptable 40mm Sub design, featuring all the stylistic hallmarks of the classic look from the aluminum bezel, to the hands, and even the style of the dial text. As far as automatic watches go, I’d recommend the Invicta Pro Diver to anyone that wanted a mechanical timepiece first with any sort of unique design flourishes second – this is an automatic watch that is under the radar stylistically enough to go with whatever you’re wearing and whatever you’re doing.",
        image="https://twobrokewatchsnobs.com/wp-content/uploads/2017/01/Invicta-Pro-Diver-Review-Dial-1024x711.jpg.webp/200",
    )

    p17 = Product(
        maker="Hamilton",
        model="manual",
        product_name="Khaki Field",
        product_price=500,
        inventory=fake.random_int(1, 10000),
        product_description="For under $500, the Hamilton Khaki Field Mechanical is perhaps the best Swiss mechanical watch on the market, full stop. It contains a modified Swiss ETA 2801 caliber that Hamilton calls the H-50, which drops the beat frequency from the standard 28,000 VPH to 21,600 VPH to stretch the power reserve out to an impressive 80 hours. And the longer power reserve here is especially impactful with this being a hand-wound watch. Beyond the movement, the Khaki Field Mechanical leans into Hamilton’s impressive history of supplying field watches to the U.S. and other Allied military organizations in World War II, with this basic dial design dating back decades. In the modern world, the Khaki Field Mechanical (you can learn more about it here) is an impressive value with a lot to offer for both military missions as well as life’s everyday operations.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Hamilton-Khaki-Field-Manual-2.jpg?v=1649188187/200",
    )

    p18 = Product(
        maker="Tissot",
        model="automatic",
        product_name="Everytime Swissmatic",
        product_price=450,
        inventory=fake.random_int(1, 10000),
        product_description="The Sistem 51 movement’s big move is that it is incredibly simple in terms of the number of components and can also be constructed and adjusted completely by machine, facilitating easier and therefore cheaper mass production. The Everytime offers versatile looks with a minimal dial design and straightforward dimensions to pair with this intriguing caliber, bringing a mechanical automatic watch from a major Swiss brand to an unexpected price point and even undercutting many microbrands in the process.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Tissot-Everytime-Swissmatic-2.jpg?v=1649254878/200",
    )

    p19 = Product(
        maker="Fears",
        model="manual",
        product_name="Brunswick",
        product_price=3200,
        inventory=fake.random_int(1, 10000),
        product_description="The Fear Brunswick takes the standard of a time-only, manual-wind watch and elevates it. The 316L surgical steel cushion case is made in Germany. It’s a symmetrical 38 × 38mm. The white dial is hand-polished lacquer with multiple layers and has a recessed running seconds sub-dial at 6 o’clock. The black strap is made in Belgium from leather from Britain’s oldest vegetable tanner. And the watch comes in a solid English Ash wooden box stained “Fears Blue” with cream suede lining and cushion. Premium features for what would otherwise be a fairly simple watch.",
        image="https://static.fratello.com/2022/10/Fears_Brunswick_White_Face_Manual_Wind_Watch_1.jpg/200",
    )

    p20 = Product(
        maker="Bulova",
        model="automatic",
        product_name="Sutton 2021",
        product_price=395,
        inventory=fake.random_int(1, 10000),
        product_description="The Sutton model is a Cartier Tank-style watch with impressive finishing for the price, including a guilloché-style dial texture (here achieved with a pressing process), and stepped Art Deco case flanks. While it might be a polarizing feature within the watch community, the Sutton also exhibits an “open heart” feature exposing the balance with a cutaway on the front of the dial and allowing the mechanical Miyota caliber 82S0 to shine. Applied Arabic indices, simple baton hands, and a classic alligator grain leather strap round out this attractive modern take on a Bulova design dating back to 1948 and looking just as relevant today at least in more refined settings.",
        image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Bulova-Sutton-2.jpg?v=1649252209/200",
    )

    products = [
        p1,
        p2,
        p3,
        p4,
        p5,
        p6,
        p7,
        p8,
        p9,
        p10,
        p11,
        p12,
        p13,
        p14,
        p15,
        p16,
        p17,
        p18,
        p19,
        p20,
    ]

    db.session.add_all(products)
    db.session.commit()

    c1 = Customer(
        name=fake.name(),
        email=fake.email(),
        address=fake.address(),
        password=fake.password(
            length=12, special_chars=True, upper_case=True, lower_case=True
        ),
        created_at=fake.date_time(),
        updated_at=fake.date_time(),
    )

    c2 = Customer(
        name=fake.name(),
        email=fake.email(),
        address=fake.address(),
        password=fake.password(
            length=12, special_chars=True, upper_case=True, lower_case=True
        ),
        created_at=fake.date_time(),
        updated_at=fake.date_time(),
    )

    customers = [c1, c2]

    db.session.add_all(customers)
    db.session.commit()

    o1 = Order(
        customer_id=randint(c1.id),
        date=fake.date_time(),
        total_amount=fake.random_int(min=160, max=30000),
    )

    o2 = Order(
        customer_id=randint(c1.id),
        date=fake.date_time(),
        total_amount=fake.random_int(min=160, max=30000),
    )

    o3 = Order(
        customer_id=randint(c1.id),
        date=fake.date_time(),
        total_amount=fake.random_int(min=160, max=30000),
    )

    o4 = Order(
        customer_id=randint(c2.id),
        date=fake.date_time(),
        total_amount=fake.random_int(min=160, max=30000),
    )

    o5 = Order(
        customer_id=randint(c2.id),
        date=fake.date_time(),
        total_amount=fake.random_int(min=160, max=30000),
    )

    o6 = Order(
        customer_id=randint(c2.id),
        date=fake.date_time(),
        total_amount=fake.random_int(min=160, max=30000),
    )

    orders = [o1, o2, o3, o4, o5, o6]

    db.session.add_all(orders)
    db.session.commit()

    od1 = OrderDetail(
        product_id=randint(1, 20), order_id=randint(1, 6), quantity=randint(1, 10)
    )

    od2 = OrderDetail(
        product_id=randint(1, 20), order_id=randint(1, 6), quantity=randint(1, 10)
    )

    od3 = OrderDetail(
        product_id=randint(1, 20), order_id=randint(1, 6), quantity=randint(1, 10)
    )

    od4 = OrderDetail(
        product_id=randint(1, 20), order_id=randint(1, 6), quantity=randint(1, 10)
    )

    od5 = OrderDetail(
        product_id=randint(1, 20), order_id=randint(1, 6), quantity=randint(1, 10)
    )

    order_details = [o1, o2, o3, o4, o5, o6]

    db.session.add_all(order_details)
    db.session.commit()

    ci1 = CartItem(customer_id=randint(1, 2), product_id=randint(1, 20))

    ci2 = CartItem(customer_id=randint(1, 2), product_id=randint(1, 20))

    cart_items = [ci1, ci2]

    db.session.add_all(cart_items)
    db.session.commit()

# may need for later use
# if __name__ == "__main__":
#     fake = Faker()
#     with app.app_context():
#         print("Starting seed...")
#         # Seed code goes here!

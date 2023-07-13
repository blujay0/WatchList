"""
When developing a large Python application, 
you might run into a common issue: circular imports. 
A circular import occurs when two modules import 
from one another, such as app.py and models.py. 
When you create a circular import and attempt to 
run your app, you'll see the following error:

ImportError: cannot import name
"""

"""
If you're going to need an object in multiple modules 
like app or db, creating a third module to instantiate 
these objects can save you a great deal of circular 
grief. Here's a good start to a Flask config file 
(you may need more if you intend to include features 
like authentication and passwords):
"""

"""
CORS (Cross-Origin Reference Sharing) is a system that 
uses HTTP headers to determine whether resources from 
different servers-of-origin can be accessed. If you're 
using the fetch API to connect your frontend to your 
Flask backend, you need to configure CORS on your 
Flask application instance. Lucky for us, that only 
takes one line: CORS(app)
"""

# Standard library imports

# Remote library imports
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData

# Local imports

# Instantiate app, set attributes
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

# Define metadata, instantiate db
metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)
db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)

# Instantiate REST API
api = Api(app)

# Instantiate CORS
CORS(app)

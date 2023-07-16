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

from flask_restful import Resource
from flask_migrate import Migrate

# Local imports
# from config import app, db, api
from models import db, Customer, Order, CartItem, OrderDetail, Product

# Views go here!

if __name__ == "__main__":
    app.run(port=5555, debug=True)

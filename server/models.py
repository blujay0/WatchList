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
class Customer(db.Model, SerializerMixin):
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
            "title": self.title,
            "": self.id,
            "id": self.id,
        }

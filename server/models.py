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

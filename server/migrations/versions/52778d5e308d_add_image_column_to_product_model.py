"""add image column to Product model

Revision ID: 52778d5e308d
Revises: 037117ed4807
Create Date: 2023-07-16 03:35:52.938381

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '52778d5e308d'
down_revision = '037117ed4807'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###

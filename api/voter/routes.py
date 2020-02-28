from flask import request, jsonify
from voter import app, db
from voter.models import User
from voter.schemas import UserSchema

#Init Schemas
user_schema = UserSchema()
users_schema = UserSchema(many=True)


@app.route('/users', methods=['GET'])
def get_users():
	users = User.query.all()
	return user_schema.jsonify(users)





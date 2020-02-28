from voter import db

class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String)
	email = db.Column(db.String)

class Snippet(db.Model):
	id = db.Column(db.Integer, primary_key=True)

class Politician(db.Model):
	id = db.Column(db.Integer, primary_key=True)

class Category(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	title = db.Column(db.String)


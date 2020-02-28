from voter import ma

class UserSchema(ma.Schema):
	class Meta:
		fields = ('id', 'name', 'email')

class CategorySchema(ma.Schema):
	class Meta:
		fields = ('id', 'name')

class SnippetSchema(ma.Schema):
	class Meta:
		fields = ('id', 'name')
	categories = ma.Nested(CategorySchema, many=True)
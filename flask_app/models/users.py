from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
LETTER_REGEX = re.compile(r'^[a-zA-Z]+$')

DATABASE = "travel_schema"

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

#this saves and inserts each new user created in the registration form
    @classmethod
    def save(cls,data):
        query= "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(password)s, NOW(), NOW());"
        return connectToMySQL(DATABASE).query_db(query,data)

# This method selects one user by its id
    @classmethod
    def get_one_user(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        if len(results) < 1:
            return False
        return cls(results[0])

#This selects all users
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(DATABASE).query_db(query)
        users = []
        for user in results:
            users.append(cls(user))
        return users

#checks if email already exists in the database
    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        if len(results) < 1:
            return False
        return cls(results[0])

#validates and seperates each error message by category
    @staticmethod
    def validate(data_data):
        is_valid = True
        if len(data_data['first_name']) < 2:
            is_valid = False
            flash("First name must be at least 2 characters long", "err_first_name")
        elif not LETTER_REGEX.match(data_data['first_name']):
            flash("First name must only be letters", "err_first_name")
            is_valid = False 
        if len(data_data['last_name']) < 2:
            is_valid = False
            flash("Last name must be at least 2 characters long", "err_last_name")
        elif not LETTER_REGEX.match(data_data['last_name']):
            flash("Last name must only be letters", "err_last_name")
            is_valid = False 
        if not EMAIL_REGEX.match(data_data['email']): 
            flash("Invalid email address!", "err_email")
            is_valid = False
        else:
            data ={
                'email': data_data['email']
            }
            potential_user = User.get_by_email(data)
            if potential_user:
                is_valid = False
                flash("This email is already taken", "err_email")
        if len(data_data['password']) < 8:
            is_valid = False
            flash("Password must be at least 8 characters long", "err_password")
        elif not data_data['password'] == data_data['confirm_password']:
            is_valid = False
            flash("Passwords don't match", "err_password")
        return is_valid

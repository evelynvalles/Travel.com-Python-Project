from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
DATABASE = "travel_schema"

class Booking:
    def __init__(self,data):
        self.id = data['id']
        self.where_to = data['where_to']
        self.how_many = data['how_many']
        self.arrival_date = data['arrival_date']
        self.departure_date = data['departure_date']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls,data):
        query= "INSERT INTO bookings (where_to, how_many, arrival_date, departure_date, user_id, created_at, updated_at) VALUES (%(where_to)s,%(how_many)s,%(arrival_date)s,%(departure_date)s,%(user_id)s, NOW(), NOW());"
        return connectToMySQL(DATABASE).query_db(query,data)

    @staticmethod
    def validate(data_data):
        is_valid = True
        if len(data_data['where_to']) < 2:
            is_valid = False
            flash("Where to must be at least 2 characters long", "err_where_to")
        if len(data_data['how_many']) < 1:
            is_valid = False
            flash("How many field must be 1 guest or more", "err_how_many")
        if len(data_data['arrival_date']) < 1:
            is_valid = False
            flash("Date field is required", "err_arrival_date")
        if len(data_data['departure_date']) < 1:
            is_valid = False
            flash("Date field is required", "err_departure_date")
        return is_valid
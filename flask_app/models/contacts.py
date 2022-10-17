from flask_app.config.mysqlconnection import connectToMySQL
import re
import os
import smtplib
from email.message import EmailMessage
from flask import flash
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
LETTER_REGEX = re.compile(r"^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$")
PHONE_REGEX = re.compile(r"^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$")
DATABASE = "travel_schema"
EMAIL_ADDRESS = os.environ.get('DB_USER')
EMAIL_PASSWORD = os.environ.get('DB_PASS')

class Contact:
    def __init__(self,data):
        self.id = data['id']
        self.contact_name = data['contact_name']
        self.contact_email = data['contact_email']
        self.contact_number = data['contact_number']
        self.contact_subject = data['contact_subject']
        self.contact_message = data['contact_message']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls,data):
        query= "INSERT INTO contacts (contact_name, contact_email, contact_number, contact_subject, contact_message, user_id, created_at, updated_at) VALUES (%(contact_name)s,%(contact_email)s,%(contact_number)s,%(contact_subject)s,%(contact_message)s, %(user_id)s, NOW(), NOW());"
        return connectToMySQL(DATABASE).query_db(query,data)

    def sendContactForm(result):
        msg = EmailMessage()
        msg['Subject'] = result['contact_subject']
        msg['From'] = result['contact_email']
        msg['To'] = EMAIL_ADDRESS
        msg.set_content(f"""
        Hello there,

        You just recieved a contact form from Travel.com.

        Name: {result['contact_name']}
        Email: {result['contact_email']}
        Phone Number: {result['contact_number']}
        Message: {result['contact_message']}

        Kind Regards,
        Travel.com
        
        """)

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)

            smtp.send_message(msg)


    @staticmethod
    def validate(data_data):
        is_valid = True
        if len(data_data['contact_name']) < 2:
            is_valid = False
            flash("Contact name must be at least 2 characters long", "err_contact_name")
        elif not LETTER_REGEX.match(data_data['contact_name']):
            flash("Contact name must only be letters", "err_contact_name")
            is_valid = False 
        if not EMAIL_REGEX.match(data_data['contact_email']): 
            flash("Invalid email address!", "err_contact_email")
            is_valid = False
        if not PHONE_REGEX.match(data_data['contact_number']):
            flash("Phone number must be 10 digits including area code", "err_contact_number")
        if len(data_data['contact_subject']) < 2:
            is_valid = False
            flash("Subject field must be at least 2 characters long", "err_contact_subject")
        if len(data_data['contact_message']) < 2:
            is_valid = False
            flash("Message field must be at least 2 characters long", "err_contact_message")
        return is_valid
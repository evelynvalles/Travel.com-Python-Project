from flask_app import app
from flask import render_template,redirect,url_for

@app.route('/destinations/cabo')
def destination_cabo():
    return render_template('cabo.html')

@app.route('/destinations/london')
def destination_london():
    return render_template('london.html')

@app.route('/destinations/tokyo')
def destination_tokyo():
    return render_template('tokyo.html')

@app.route('/destinations/honolulu')
def destination_honolulu():
    return render_template('honolulu.html')

@app.route('/destinations/new_york_city')
def destination_new_york():
    return render_template('new_york.html')

@app.route('/destinations/paris')
def destination_paris():
    return render_template('paris.html')

@app.route('/home')
def home():
    return redirect(url_for('index')+"#home")

@app.route('/booking')
def booking():
    return redirect(url_for('index')+"#book")

@app.route('/packages')
def packages():
    return redirect(url_for('index')+"#packages")

@app.route('/contactus')
def contactus():
    return redirect(url_for('index')+"#contact")

from flask_app import app
import os
import requests
from flask import render_template,redirect,url_for, jsonify, request

url = "https://hotels4.p.rapidapi.com/properties/list"

headers = {
	"X-RapidAPI-Key": os.environ.get("FLASK_APP_API_KEY"),
	"X-RapidAPI-Host": "hotels4.p.rapidapi.com"
}

@app.route('/destinations/cabo')
def destination_cabo():
    return render_template('cabo.html')

@app.route("/searching/cabo", methods=["POST"])
def search_cabo():
    querystring = {"destinationId":"1640244","pageNumber":"1","pageSize":"15","checkIn":f"{request.form['check_in']}",
    "checkOut":f"{request.form['check_out']}","adults1":f"{request.form['num_adults']}","sortOrder":"BEST_SELLER","locale":"en_US","currency":"USD"}
    r = requests.request("GET", url, headers=headers, params=querystring)
    return jsonify( r.json() )

@app.route('/destinations/london')
def destination_london():
    return render_template('london.html')

@app.route("/searching/london", methods=["POST"])
def search_london():
    querystring = {"destinationId":"549499","pageNumber":"1","pageSize":"15","checkIn":f"{request.form['check_in']}",
    "checkOut":f"{request.form['check_out']}","adults1":f"{request.form['num_adults']}","sortOrder":"BEST_SELLER","locale":"en_US","currency":"USD"}
    r = requests.request("GET", url, headers=headers, params=querystring)
    return jsonify( r.json() )

@app.route('/destinations/tokyo')
def destination_tokyo():
    return render_template('tokyo.html')

@app.route("/searching/tokyo", methods=["POST"])
def search_tokyo():
    querystring = {"destinationId":"726784","pageNumber":"1","pageSize":"15","checkIn":f"{request.form['check_in']}",
    "checkOut":f"{request.form['check_out']}","adults1":f"{request.form['num_adults']}","sortOrder":"BEST_SELLER","locale":"en_US","currency":"USD"}
    r = requests.request("GET", url, headers=headers, params=querystring)
    return jsonify( r.json() )

@app.route('/destinations/honolulu')
def destination_honolulu():
    return render_template('honolulu.html')

@app.route("/searching/honolulu", methods=["POST"])
def search_honolulu():
    querystring = {"destinationId":"1431094","pageNumber":"1","pageSize":"15","checkIn":f"{request.form['check_in']}",
    "checkOut":f"{request.form['check_out']}","adults1":f"{request.form['num_adults']}","sortOrder":"BEST_SELLER","locale":"en_US","currency":"USD"}
    r = requests.request("GET", url, headers=headers, params=querystring)
    return jsonify( r.json() )

@app.route('/destinations/new_york_city')
def destination_new_york():
    return render_template('new_york.html')

@app.route("/searching/new_york_city", methods=["POST"])
def search_nyc():
    querystring = {"destinationId":"1506246","pageNumber":"1","pageSize":"15","checkIn":f"{request.form['check_in']}",
    "checkOut":f"{request.form['check_out']}","adults1":f"{request.form['num_adults']}","sortOrder":"BEST_SELLER","locale":"en_US","currency":"USD"}
    r = requests.request("GET", url, headers=headers, params=querystring)
    return jsonify( r.json() )

@app.route('/destinations/paris')
def destination_paris():
    return render_template('paris.html')

@app.route("/searching/paris", methods=["POST"])
def search_paris():
    querystring = {"destinationId":"504261","pageNumber":"1","pageSize":"15","checkIn":f"{request.form['check_in']}",
    "checkOut":f"{request.form['check_out']}","adults1":f"{request.form['num_adults']}","sortOrder":"BEST_SELLER","locale":"en_US","currency":"USD"}
    r = requests.request("GET", url, headers=headers, params=querystring)
    return jsonify( r.json() )

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

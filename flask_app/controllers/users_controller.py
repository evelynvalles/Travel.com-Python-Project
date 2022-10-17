from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.users import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

# index travel template
@app.route('/')
def index():
    if not 'user_id' in session:
        session['user_id'] = 5
    if 'user_id' in session:
        data = {
            'id': session['user_id']
        }
        user = User.get_one_user(data)
        return render_template('index.html', user=user)
    return render_template('index.html')

@app.route('/register_now')
def register_display():
    return render_template('register.html')

@app.route('/register', methods=["POST"])
def register():
    if not User.validate(request.form):
        return redirect('/register_now')
    hashed_pw = bcrypt.generate_password_hash(request.form['password'])
    data = {
        **request.form,
        'password': hashed_pw
    }
    session['user_id'] = User.save(data)
    return redirect('/')

#this route process the login form
@app.route('/login', methods=["POST"])
def login():
    data = {
        'email': request.form['email']
    }
    user_from_db = User.get_by_email(data)
    if not user_from_db:
        flash("Invalid Credentials", "err_login_email")
        return redirect('/#login')
    if not bcrypt.check_password_hash(user_from_db.password, request.form['password']):
        flash("Invalid Credentials", "err_login_password")
        return redirect('/')
    session['user_id'] = user_from_db.id
    return redirect('/')

#this route logs out the user completely to where they have to log back in if they wanna come back.
@app.route('/logout')
def logout():
    del session['user_id']
    return redirect('/')
from flask_app import app
from flask import redirect,request,session,url_for
from flask_app.models.users import User
from flask_app.models.contacts import Contact

@app.route('/contact', methods=["POST"])
def contact_us():
    if not Contact.validate(request.form):
        return redirect(url_for("index")+"#contact_form")
    data = {
        **request.form,
        'user_id': session['user_id']
    }
    result = {}

    result['contact_name'] = request.form['contact_name']
    result['contact_email'] = request.form['contact_email']
    result['contact_number'] = request.form['contact_number']
    result['contact_subject'] = request.form['contact_subject']
    result['contact_message'] = request.form['contact_message']
    
    Contact.sendContactForm(result)
    Contact.save(data)
    return redirect('/')
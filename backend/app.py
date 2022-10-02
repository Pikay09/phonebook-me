
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime 
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://mydatabase0929:mydatabase0929@db4free.net/mydatabase0929'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False



db = SQLAlchemy(app)
ma = Marshmallow(app)


class Phonenum(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer())
    fullname = db.Column(db.Text())
    date = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, number, fullname):
        self.number = number
        self.fullname = fullname

class PhonenumSchema(ma.Schema):
    class Meta:
        fields = ('id','number','fullname','date')     

phonenum_schema = PhonenumSchema()
phonenums_schema = PhonenumSchema(many=True)


@app.route('/get', methods=['GET'])
def get_phonenum():
    all_phonenum = Phonenum.query.all()
    results = phonenums_schema.dump(all_phonenum)
    return jsonify(results)


@app.route('/get/<id>/', methods=['GET'])
def post_details(id):
    phonenums = Phonenum.query.get(id)
    return phonenum_schema.jsonify(phonenums)


@app.route('/add', methods=['POST'])    
def add_phonenum():
    number = request.json['number']
    fullname = request.json['fullname']

    phonenum = Phonenum(number, fullname)
    db.session.add(phonenum)
    db.session.commit()
    return phonenum_schema.jsonify(phonenum)


@app.route('/update/<id>/', methods=['PUT'])
@cross_origin(allow_headers=['Content-Type'])
def update_phonenum(id):
    phonenum = Phonenum.query.get(id)

    number = request.json['number']
    fullname = request.json['fullname']

    phonenum.number = number
    phonenum.fullname = fullname

    db.session.commit()
    return phonenum_schema.jsonify(phonenum)
    

@app.route('/erase/<id>/', methods=['DELETE'])
def delete_phonenum(id):
    phonenum = Phonenum.query.get(id)
    db.session.delete(phonenum)
    db.session.commit()
    return phonenum_schema.jsonify(phonenum)
    


if __name__ == '__main__':
    app.run(debug=True)

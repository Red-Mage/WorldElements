from flask import Flask, render_template
from flask_cors import CORS, cross_origin

server = Flask(__name__, static_folder='static', template_folder='templates')
CORS(server)

@server.route('/')
def home():
    return render_template('index.html')

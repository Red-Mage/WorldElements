from server import server
from config import mysql
from flask import jsonify
from flask import flash, request

@server.route('/api/projects', methods=['POST'])
def post_projects():
    try:
        _json = request.json
        _id = _json['id']
        _position = _json['position']
        _name = _json['name']
        _synopsis = _json['synopsis']
        _description = _json['description']
        _deleted = _json['deleted']    
        if _id and _position and _name and _synopsis and _description and _deleted and request.method == 'POST':
            conn = mysql.connect()
            cursor = conn.cursor()          
            db_query = "INSERT INTO we_projects(id, position, name, synopsis, description, deleted) VALUES(%s, %s, %s, %s, %s, %s)"
            db_data = (_id, _position, _name, _synopsis, _description, _deleted)
            cursor.execute(db_query, db_data)
            conn.commit()
            respone = jsonify('success')
            respone.status_code = 201
            return respone
        else:
            respone = jsonify('failure')
            respone.status_code = 400
            return respone
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()

from server import server
from config import mysql
from flask import jsonify
from flask import flash, request

@server.route('/api/projects/<id>', methods=['PUT'])
def put_projects_id(id):
    try:
        _json = request.json
        _position = _json['position']
        _name = _json['name']
        _synopsis = _json['synopsis']
        _description = _json['description']
        _deleted = _json['deleted']   
        if id and _position and _name and _synopsis and _description and _deleted and request.method == 'PUT':
            conn = mysql.connect()
            cursor = conn.cursor()
            db_query = "UPDATE we_projects SET position=%s, name=%s, synopsis=%s, description=%s, deleted=%s WHERE id=%s"
            db_data = (_position, _name, _synopsis, _description, _deleted, id,)
            cursor.execute(db_query, db_data)
            conn.commit()
            response = jsonify('success')
            response.status_code = 200
            return response
        else:
            return not_found()
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

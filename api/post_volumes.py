from server import server
from config import mysql
from flask import jsonify
from flask import flash, request

@server.route('/api/volumes', methods=['POST'])
def post_volumes():
    try:
        _json = request.json
        _id = _json['id']
        _position = _json['position']
        _project_id = _json['project_id']
        _title = _json['title']
        _subtitle = _json['subtitle']
        _edition = _json['edition']
        _synopsis = _json['synopsis']
        _description = _json['description']
        _world_ids = _json['world_ids']
        _deleted = _json['deleted']    
        if _id and _position and _project_id and _title and _subtitle and _edition and _synopsis and _description and _world_ids and _deleted and request.method == 'POST':
            conn = mysql.connect()
            cursor = conn.cursor()          
            db_query = "INSERT INTO we_volumes(id, position, project_id, title, subtitle, edition, synopsis, description, world_ids, deleted) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            db_data = (_id, _position, _project_id, _title, _subtitle, _edition, _synopsis, _description, _world_ids, _deleted)
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

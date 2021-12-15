from server import server
from config import mysql
from flask import jsonify
from flask import flash, request

@server.route('/api/settings/project', methods=['PUT'])
def put_settings_project():
    try:
        _json = request.json
        _project_id = _json['project_id']
        if _project_id and request.method == 'PUT':
            conn = mysql.connect()
            cursor = conn.cursor()
            db_query = "UPDATE we_settings SET active_project=%s"
            db_data = (_project_id)
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

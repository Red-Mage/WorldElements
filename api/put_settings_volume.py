from server import server
from config import mysql
from flask import jsonify
from flask import flash, request

@server.route('/api/settings/volume', methods=['PUT'])
def put_settings_volume():
    try:
        _json = request.json
        _volume_id = _json['volume_id']
        if _volume_id and request.method == 'PUT':
            conn = mysql.connect()
            cursor = conn.cursor()
            db_query = "UPDATE we_settings SET active_volume=%s"
            db_data = (_volume_id)
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

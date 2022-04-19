from server import server
from config import mysql
from flask import jsonify
from flask import flash, request

@server.route('/api/worlds/<id>', methods=['DELETE'])
def del_worlds_id(id):
    try:
        _json = request.json
        _deleted = _json['deleted']   
        if id and _deleted and request.method == 'DELETE':
            if _deleted == "0":
                conn = mysql.connect()
                cursor = conn.cursor()
                db_query = "UPDATE we_worlds SET deleted=1 WHERE id=%s"
                db_data = (id,)
                cursor.execute(db_query, db_data)
                conn.commit()
                response = jsonify('success')
                response.status_code = 200
                return response
            else:
                conn = mysql.connect()
                cursor = conn.cursor()
                db_query = "DELETE FROM we_worlds WHERE id=%s"
                db_data = (id,)
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

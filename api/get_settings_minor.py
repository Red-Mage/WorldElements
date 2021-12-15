from server import server
from config import mysql
from flask import jsonify
from flask import flash, request

@server.route('/api/settings/minor', methods=['GET'])
def get_settings_minor():
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        db_query = "SELECT version_minor FROM we_settings"
        cursor.execute(db_query)
        response_raw = cursor.fetchall()
        response = jsonify(response_raw)
        response.status_code = 200
        return response
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

import os
import json
import mysql.connector

# load database json data
f = open(os.path.dirname(__file__) + '/../etc/DATABASE.json')
data = json.load(f)
f.close()
database = data['db']

# connect to mysql
mydb = mysql.connector.connect(
    host="localhost",
    user=database['user'],
    password=database['pass'],
    database=database['name'],
)

for t in database['tables']:
    create_db_query = "DROP TABLE IF EXISTS " + t['name']
    #print(create_db_query)
    try:
        with mydb.cursor() as cursor:
            cursor.execute(create_db_query)
    except mysql.connector.Error as e:
        print(e)









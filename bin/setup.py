import platform
import os
import json
import mysql.connector
from shutil import copyfile

# automated mysql setup (have to manually set it up at the moment)
# os_type = platform.system()

# if os_type == "Windows":
#     os.system('start /wait msiexec /log install.txt /i %s /quiet' % 'E:\\GitHub\\WorldElements\\bin\\mysql-installer-community-8.0.27.1.msi')
#     os.system('start /wait C:\\PROGRA~2\\MySQL\\MYSQLI~1\\MySQLInstallerConsole.exe community install server;8.0.27;X64 -silent')
#     copyfile('./bin/MySQL/mysql-init.txt','C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin\\mysql-init.txt')
#     os.system('mkdir C:\\PROGRA~1\\MySQL\\MYSQLS~1.0\\data')
#C:\ProgramData\MySQL\MYSQLI~1\PRODUC~1\mysql-8.0.27-winx64.msi
#     os.system('start /wait C:\\PROGRA~1\\MySQL\\MYSQLS~1.0\\bin\\mysqld.exe --install')
#     os.system('start /wait C:\\PROGRA~1\\MySQL\\MYSQLS~1.0\\bin\\mysqld.exe --init-file=C:\\PROGRA~1\\MySQL\\MYSQLS~1.0\\bin\\mysql-init.txt')
# else:
#     os.system('calc.exe')

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
)

# create world elements database
try:
    db_query = "CREATE DATABASE IF NOT EXISTS " + database['name']
    with mydb.cursor() as cursor:
        cursor.execute(db_query)
except mysql.connector.Error as e:
    print(e)

# add world elements database to mydb
mydb.database = database['name']

# create tables from database json data
for t in database['tables']:
    db_query = "CREATE TABLE IF NOT EXISTS " + t['name'] + " ("
    length = len(t['columns']) - 1
    i = 0
    for c in t['columns']:
        db_query += c['name'] + " " + c['datatype']
        if i < length:
            db_query += ", "
        else:
            db_query += ")"
        i = i + 1
    #print(db_query)
    try:
        with mydb.cursor() as cursor:
            cursor.execute(db_query)
    except mysql.connector.Error as e:
        print(e)

# populate tables with default database json data

for t in database['tables']:
    length = len(t['rows'])
    if length > 0:
        for r in t['rows']:
            i = 0
            db_query_datatypes = "INSERT INTO " + t['name'] + " ("
            db_query_values = " VALUES ("
            length = len(r) - 1
            for n in r:
                db_query_datatypes += n
                db_query_values += "'" + r[n]
                if i < length:
                    db_query_datatypes += ", "
                    db_query_values += "', "
                else:
                    db_query_datatypes += ")"
                    db_query_values += "')"
                i = i + 1
            db_query = db_query_datatypes + db_query_values
            #print(db_query)
            try:
                with mydb.cursor() as cursor:
                    cursor.execute(db_query)
                    mydb.commit()
            except mysql.connector.Error as e:
                print(e)

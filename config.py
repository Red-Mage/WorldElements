from server import server
from flaskext.mysql import MySQL

mysql = MySQL()
server.config['MYSQL_DATABASE_USER'] = 'root'
server.config['MYSQL_DATABASE_PASSWORD'] = 'worldelements'
server.config['MYSQL_DATABASE_DB'] = 'we'
server.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(server)

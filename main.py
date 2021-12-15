import time
import webview
import os
from multiprocessing import Process
from server import server
#from config import mysql
from api import *

def runServer(server):
    server.run()

def runViewer():
    webview.create_window('World Elements', 'http://127.0.0.1:5000/', width=1200, height=800, resizable=True)
#    time.sleep(1)
    webview.start()
    os.system('taskkill /F /IM python.exe') # dont use this if ever released

if __name__ == '__main__':
    p1 = Process(target = runViewer)
    p1.start()
    p2 = Process(target = runServer(server))
    p2.start()

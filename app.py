#import all the necessary libraries
from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import FileResponse

import cv2
from PIL import Image

import mysql.connector as mysql
import os
import datetime
from dotenv import load_dotenv

# Create connection to database for future queries
load_dotenv('credentials.env')
db_host = os.environ['MYSQL_HOST']
db_user = os.environ['MYSQL_USER']
db_pass = os.environ['MYSQL_PASSWORD']
db_name = os.environ['MYSQL_DATABASE']


def index_page(req):
    # Connect to the database and retrieve the users
    return FileResponse('index.html')

if __name__ == '__main__':
    with Configurator() as config:

        config.add_route('home', '/')
        config.add_view(index_page, route_name='home')


        config.add_static_view(name='/', path='./public', cache_max_age=3600)

        app = config.make_wsgi_app()
    server = make_server('0.0.0.0', 6543, app)
    server.serve_forever()
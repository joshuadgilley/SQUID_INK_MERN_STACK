from http.server import HTTPServer, BaseHTTPRequestHandler
import socket
from io import BytesIO
import logging
import os

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_POST(self):
        self.send_response(200)
        self.end_headers()
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)

        self.send_response(200)
        self.end_headers()
        response = BytesIO()
        response.write(body)
        response.write(b' Has accessed the web server')
        self.wfile.write(response.getvalue())
hostname = socket.gethostname()
IPAddr = socket.gethostbyname(hostname)
print("Your Computer Name is:" + hostname)
print("Your Computer IP Address is:" + IPAddr)
print("I am here")
httpd = HTTPServer((IPAddr, 8000), SimpleHTTPRequestHandler)
httpd.serve_forever()

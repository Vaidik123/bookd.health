import os
from http.server import HTTPServer, SimpleHTTPRequestHandler

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    def log_message(self, format, *args):
        pass

os.chdir('/Users/vaidik/Downloads/www.mount_media.com/www.mount-media.com')
print('Server at http://localhost:8080 (no-cache)')
HTTPServer(('', 8080), NoCacheHandler).serve_forever()

from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from urllib.parse import parse_qs

class SimpleHandler(BaseHTTPRequestHandler):
    def _set_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")


    def do_OPTIONS(self):
        self.send_response(204)  # No Content
        self._set_cors_headers()
        self.end_headers()

    def do_POST(self):
        if self.path == "/api/login":  # 경로를 /api/login으로 변경
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            
            try:
                # Content-Type 확인
                content_type = self.headers.get('Content-Type', '')
                
                if 'application/x-www-form-urlencoded' in content_type:
                    # HTML 폼 데이터 파싱
                    form_data = parse_qs(body.decode('utf-8'))
                    username = form_data.get('username', [''])[0]
                    password = form_data.get('password', [''])[0]
                elif 'application/json' in content_type:
                    # JSON 데이터 파싱 (기존 코드)
                    data = json.loads(body)
                    username = data.get("username")
                    password = data.get("password")
                else:
                    # 기본적으로 폼 데이터로 처리
                    form_data = parse_qs(body.decode('utf-8'))
                    username = form_data.get('username', [''])[0]
                    password = form_data.get('password', [''])[0]

                print("아이디:", username)
                print("비밀번호:", password)

                if username == "admin" and password == "1234":
                    self.send_response(200)
                    self._set_cors_headers()
                    self.send_header("Content-Type", "application/json")
                    self.end_headers()
                    self.wfile.write(json.dumps({"message": "로그인 성공"}).encode())
                else:
                    self.send_response(401)
                    self._set_cors_headers()
                    self.send_header("Content-Type", "application/json")
                    self.end_headers()
                    self.wfile.write(json.dumps({"message": "로그인 실패"}).encode())
                    
            except Exception as e:
                self.send_response(400)
                self._set_cors_headers()
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode())

def run(port=8000):
    server_address = ("", port)
    httpd = HTTPServer(server_address, SimpleHandler)
    print(f"서버가 포트 {port}에서 실행 중입니다...")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
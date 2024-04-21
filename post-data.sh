# curl -X POST -d '{ "user_name":"", "password":"3111"}' -H "Content-Type: application/json" http://127.0.0.1:8001/users/register
# curl -X POST -d '{ "user_name":"nihao", "password":""}' -H "Content-Type: application/json" http://127.0.0.1:8001/users/register
# curl -X POST -d '{ "user_name":"nihao2", "password":"xxxx"}' -H "Content-Type: application/json" http://127.0.0.1:8001/users/register
# curl -X POST -d '{ "user_name":"nihao2", "password":"xxxx"}' -H "Content-Type: application/json" http://127.0.0.1:8001/users/login
# token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibmloYW8yIiwiaWF0IjoxNzEzNzIxNDY5LCJleHAiOjE3MTM3MjUwNjl9.gK4ZYGKQTXNwbZdjFnWs5Ze2-E9JkhJbioKnFOjKtX4'
curl -X POST http://127.0.0.1:8001/users/verifyToken \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibmloYW8yIiwiaWF0IjoxNzEzNzIzNDA5LCJleHAiOjE3MTM3MjcwMDl9.wDPcY0znuxTZh6cYgvxNwfN5uBSUCBkeHqr37jgbDt4"


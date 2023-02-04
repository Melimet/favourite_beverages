echo "Installing frontend dependencies and starting frontend server..."
cd ./frontend && npm install 
npm run dev &
echo "Frontend server is running!"

echo "Installing backend dependencies and starting backend server..."
cd ../backend && ./gradlew build && ./gradlew bootRun
echo "Backend server is running!"
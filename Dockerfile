# Dùng Node làm base
FROM node:20-alpine

# Thư mục làm việc trong container
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Cài dependencies
RUN npm install --legacy-peer-deps

# Copy toàn bộ code (chỉ để build dev, mount volume sẽ ghi đè)
COPY . .

# Expose port dev Vite
EXPOSE 5173

# Chạy Vite dev server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

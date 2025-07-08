# Node.js App Template

## Description
A robust Node.js project template featuring Express, MongoDB, MVC architecture, email sending, file uploads, and more. Ideal for quickly bootstrapping scalable web applications.

## Features
- MVC structure (Models, Controllers, Services)
- MongoDB connection via Mongoose
- Express routing with automatic route loading
- Environment variable support via dotenv
- User management (basic CRUD)
- Email sending with EJS templating (Nodemailer)
- File/image upload (Multer + Cloudinary)
- CORS support
- JWT support (library included)
- Ready for deployment (GitHub Actions workflow)

## Project Structure
```
src/
  controllers/   # Route logic
  models/        # Mongoose models
  services/      # Business logic
  routes/        # API route definitions
  config/        # DB, mail, cloudinary config
  emails/        # EJS email templates
uploads/          # Uploaded files
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/umairabbas786/create-nodejs-app-template.git
   cd create-nodejs-app-template
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and configure the following variables:

## Environment Variables
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your_jwt_secret

# Email (Nodemailer)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=your_email@example.com
MAIL_PASS=your_email_password
MAIL_FROM=your_email@example.com

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_FOLDER=uploads
```

## Usage
- Start the server:
  ```bash
  npm start
  # or for development
  npm run dev
  ```
- The server will run on `http://localhost:5000` by default.

## API Endpoints
| Method | Endpoint                        | Description              |
|--------|----------------------------------|--------------------------|
| GET    | /api/user/                      | List all users           |
| POST   | /api/user/                      | Create a new user        |
| POST   | /api/email/send-welcome-email   | Send a welcome email     |
| POST   | /api/utility/upload-image       | Upload an image file     |

## Deployment
- Ready for deployment with [GitHub Actions](.github/workflows/deploy.yml)

## License
ISC

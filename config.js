module.exports = {
  port: process.env.PORT || 5000,
  dbURL: process.env.MONGO_URI || "mongodb://localhost:27017/myapp",
  jwtSecret: process.env.JWT_SECRET || "mysecretkey",
};

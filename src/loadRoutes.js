const fs = require("fs");
const path = require("path");

const loadRoutes = (app) => {
  const routesPath = path.join(__dirname, "routes");

  fs.readdirSync(routesPath).forEach((file) => {
    if (file.endsWith(".js")) {
      const route = require(path.join(routesPath, file));
      const routeName = file.replace("Routes.js", "").toLowerCase();
      app.use(`/api/${routeName}`, route);
      console.log(`Route loaded: /api/${routeName}`);
    }
  });
};

module.exports = loadRoutes;

const categoryRoute = require("./category");

const initAPIRoutes = (app) => {
    
    app.use("/category", categoryRoute);
}

module.exports = initAPIRoutes;
const categoryRoute = require("./category");
const productRoute = require("./product");

const initAPIRoutes = (app) => {
    
    app.use("/category", categoryRoute);

    app.use("/product", productRoute);
}

module.exports = initAPIRoutes;
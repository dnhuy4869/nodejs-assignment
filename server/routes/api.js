const categoryRoute = require("./category");
const productRoute = require("./product");
const userRoute = require("./user");

const initAPIRoutes = (app) => {
    
    app.use("/category", categoryRoute);

    app.use("/product", productRoute);

    app.use("/user", userRoute);
}

module.exports = initAPIRoutes;
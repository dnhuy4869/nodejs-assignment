const categoryRoute = require("./category");
const productRoute = require("./product");
const userRoute = require("./user");
const authRoute = require("./auth");

const initAPIRoutes = (app) => {
    
    app.use("/category", categoryRoute);

    app.use("/product", productRoute);

    app.use("/user", userRoute);

    app.use("/auth", authRoute);
}

module.exports = initAPIRoutes;
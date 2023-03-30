const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const initAPIRoutes = require("./routes/api")

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

mongoose.connect("mongodb://127.0.0.1:27017/games")
.then(() => {
    console.log(`Connected to database`);
})
.catch((err) => {
    console.log(err);
})

initAPIRoutes(app);

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
    "mongodb+srv://projetos:projetos@projetos-testes-ly7qc.mongodb.net/admin?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());

app.use(routes);

app.listen(8083);
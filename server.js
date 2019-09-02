const express = require("express");
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o APP

const app = express();
app.use(express.json());

//Iniciando o banco de dados
mongoose.connect("mongodb://localhost:27017/nodeapi",
{useNewUrlParser: true}
);


requireDir("./src/models"); 

const Product = new mongoose.model("Product");

//Primeira rota 
app.get("/", (req,res) => {
    Product.create({
        title: "React Native",
        description:"Build native apps with react",
        url:"http://github.com/facebook/react-native"
    });

    return res.send ("Hello word");
});

//Primeira rota 
app.use("/api", require("./src/routes"));

app.listen(3001);

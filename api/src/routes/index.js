const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
require("dotenv").config();
const fs = require("fs");
const dummy = require("./dummy.json");
const axios = require("axios");
const router = Router();
const myKey = "7e99385a75394c5c8c8b657348ce0988";


// Configurar los routers
//Ejemplo: router.use('/auth', authRouter);

router.get("/allrecipes", (req, res) => {
  try {
    const jsonData = fs.readFileSync('./src/routes/dummy.json');
    const data = JSON.parse(jsonData);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

// router.get("/recipes", (req,res) => {
//     console.log(myKey)
//     axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${myKey}&addRecipeInformation=true&number=100`)
//     .then((response) => res.send(response.data))
//     .catch(err => console.log(err))
// });

module.exports = router;

require('dotenv').config();


const express = require('express');
const app = express();

// controller
const {stripeController}=require('./controllers/stripeControllers')

app.use(express.json());
app.use(express.static('./public'));

// stripe
app.post('/stripe',stripeController)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
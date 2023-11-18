const express = require('express')
require('dotenv').config({path: __dirname + '/.env'})
const app = express()
const cors = require('cors');
const port = process.env.port || 2000
const connectToMongo = require("./db");

app.use(cors());
app.use(express.json());

connectToMongo();

app.use(require("./routes/user"));
app.use(require("./routes/food"));
app.use(require("./routes/order"));

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})

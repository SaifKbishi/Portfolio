const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path');
const port = 3005

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World! again AWS 1')
});


app.listen(port, () => {
  console.log(`Server is up and listening to PORT: ${port}`);
});

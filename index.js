const express = require('express');


const app = express();

app.get('/', (req, res) => {
  res.send("Thak you for calling me");
})

app.listen(3000, () => console.log('Lisitining to port 3000'));
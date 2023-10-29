const express = require('express')
const app = express()
const port = 3000

app.get((req, res) => {
  res.send('Hello World!')
});  

app.listen(port, () => {
  console.log(`Application is listening on port ${port}...`)
});
app.use(express.static(__dirname +'/public')); //where your static content is located in your filesystem



const express = require('express')
const app = express()

const PORT =  3000;
const VERSION = 1.0;

 
app.listen(port, () => {
  console.log(`Application version ${VERSION} is listening on port ${PORT}...`)
});
app.use(express.static(__dirname +'/public')); //where your static content is located in your filesystem



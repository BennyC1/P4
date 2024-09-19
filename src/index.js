const express = require('express');
const app = express();
const port = 3000;


const routes = require('../routes/index');
app.use(routes);

//Ejs
app.set("view engine","ejs");
app.set("views","./views");

// s

app.listen(port, () => {
    console.log('Example app listening on port port!', port);
});

//Run app, then load http://localhost:port in a browser to see the output.


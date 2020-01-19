
const express = require('express');
const app = express();

// initializing port
app.listen(3000, () => {
    console.log('server Running on port 3000');
})

//routers
app.use(express.static(__dirname + '/dist'));

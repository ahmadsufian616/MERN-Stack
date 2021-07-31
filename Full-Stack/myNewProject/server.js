const express = require('express');
require('./config/mongoose.config');
const cors = require('cors') 
const app = express();
app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/person.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

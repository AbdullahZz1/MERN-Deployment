const express = require('express');
const app = express();
require('./config/mongoose.config'); // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/exam.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})


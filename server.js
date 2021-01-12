const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

// set up express
const app = express();
// middleware
app.use(express.json());
// enables resource sharing
app.use(cors())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

// set up mongoose
mongoose.connect(
    process.env.MONGODB_URI || process.env.MONGODB_CONNECTION_STRING, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true, //uses new Server Discover and Monitoring engine
        useCreateIndex: true,
    }, 
        (err) => {
        if (err) throw err;
        console.log("MongoDB connection established") //checks if the mongo string works
    }
)

// set up routes
app.use("/users", require("./routes/userRouter"));
app.use("/answers", require("./routes/answerRouter"))

if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
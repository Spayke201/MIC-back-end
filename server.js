const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan')
const colors = require('colors');
const cors = require('cors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env'});

//Route files
const users = require('./routes/users');

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }

//Connect to database
connectDB();

const app = express();

app.use(cors())

//Body parser
app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mounte routers
app.use( '/api', users);

// CORS
app.use(cors(corsOptions))

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// putting in a variable I can close it if some error happens, but it is not necessary
const server = app.listen(PORT, console.log(`Server running in ${PORT} on ${process.env.NODE_ENV} mode`.yellow.bold));

// handle unhandled promissed rejections
/*
process.on('unhandledRejection', (err, promisse) => {
    console.log(`Error ${err.message}`.red);
    //close server and exit process
    server.close(() => process.exit(1));
});
*/
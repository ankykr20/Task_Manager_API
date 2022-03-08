const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());

//import routes
const postsRoutes = require('./routes/posts');
app.use('/posts', postsRoutes);

const UserRoute = require('./routes/users');
app.use('/users',UserRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION , {useNewUrlParser: true}, ()=>{
     console.log('Connected to DB!')
})



//Routes
app.get('/',(req, res) => {
    res.send('hi! Welcome to Home')
})


//Server
app.listen(3000, console.log('Server is on Port 3000'));
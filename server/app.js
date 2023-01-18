const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const Routes = require('./routes/routes');
const {requireAuth, checkUser} = require('./middleware/authMiddleware')
require('dotenv').config();

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

const dbURI = process.env.MONGO_URI;
mongoose.set('strictQuery', true);
mongoose.connect(dbURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    // useCreateIndex:true 
})
  .then((result) => app.listen(3000), console.log("server started on port 3000"))
  .catch((err) => console.log(err));

app.get('*', checkUser)
app.get('/', (req, res) => res.render('home'));
app.get('/profile', requireAuth, (req, res) => res.render('profile'));
app.use(Routes);
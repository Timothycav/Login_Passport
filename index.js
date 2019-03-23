const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const flash = require('connect-flash')
const session = require('express-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const mongoose = require('mongoose');

const app = express();

//passport config
//require('./config/passport')(passport);
//DB config
//const db = require('./config/database');

/*mongoose.connect(db.mongoURI, {
    useMongoClient: true,
    useNewUrlParser: true
}) 
.then(() => console.log('MongoDB Connected . . .'))
.catch(err => console.log(err));*/



app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const title = 'Log In or Sign Up';

    res.render('index', {
        title: title,
        
    });
});



const port = process.env.PORT || 5050;


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
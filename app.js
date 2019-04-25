const express = require('express');
const path = require('path');
const morgan = require('morgan');
var multer = require('multer');
const http = require('http')
//var ejs = require('ejs')
// For password encryption
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser')
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
// var bcrypt = require('bcryptjs');
var secret = 'supersecret';
const mongoose = require('mongoose')

// Image upload destination
var upload = multer({ dest: 'public/images/' })

//dB connection key
const db = require('./config/keys').mongoURI

//const cors = require('cors')
// create our Express app
const app = express();
const server = http.createServer(app)
//app.set('view engine', 'ejs')
app.use(express.static('/images'))
// app.use(bodyParser);
// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public',express.static(__dirname + '/images'))
// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
// app.get("/", express.static(path.join(__dirname, "./public")));

//logger
app.use(morgan());
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//app.use(cors())
//routes
const v1 = require('./routes/v1');
app.use('/v1', v1);

//Db connection
mongoose.connect(db, { useNewUrlParser: true }, (err, database) =>{
    if(err)
        return console.error(err);
  
    const port = 3000;
    server.listen(port, ()=> console.log("hai port"));
    //app.listen(port, ()=> console.log(`Listening on port ${port}`));
  });

// load models
// var Admin = require('./data/models/admin');
// var Category = require('./data/models/categories');
var Customer = require('./data/models/customers');
// var Service = require('./data/models/services');
// var ServiceType = require('./data/models/service_type');
// var Profession = require('./data/models/professions');
// var Order = require('./data/models/orders');
// var ProfessionOrder = require('./data/models/profession_order');
// var ProfessionCategory = require('./data/models/profession_category');
// var Address = require('./data/models/address');

app.get('/hello', (req,res)=>{
	res.send({msg:'Hello World  Checking'})
});

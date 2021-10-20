const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session')
const passport = require('passport')
const helmet = require("helmet");

const app = express();

app.use(helmet());
require('./helper/add')()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const r_Index = require('./routes/index')
const r_login = require('./routes/login')
const r_Create_Account = require('./routes/createAccount')
const r_Account = require('./routes/account')
const r_Add = require('./routes/add')
const r_Admin = require('./routes/admin')
const r_Detskiy_mir = require('./routes/detskiy_mir')
const r_Key = require('./routes/key')
const r_Cars = require('./routes/cars')
const r_Work = require('./routes/work')
const r_Animals = require('./routes/animals')
const r_Sad = require('./routes/sad')
const r_Elektronika = require('./routes/elektronika')
const r_Usluga = require('./routes/usluga')
const r_Stil = require('./routes/stil')
const r_Xobbi = require('./routes/xobbi')
const r_Free = require('./routes/free')



app.use(require('connect-flash')())
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res)
  next()
})

app.use(session({
  secret : "SecretKey",
  resave: true,
  saveUninitialized : false 
}))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));


require('./middleware/passport')(passport)


app.use(passport.initialize());
app.use(passport.session());

app.get('*' , (req , res , next) => {
  res.locals.user = req.user || null
  next()
})

app.use(r_Index)
app.use(r_login)
app.use(r_Create_Account)
app.use(r_Account)
app.use(r_Add)
app.use(r_Admin)
app.use(r_Detskiy_mir)
app.use(r_Key)
app.use(r_Cars)
app.use(r_Work)
app.use(r_Animals)
app.use(r_Sad)
app.use(r_Elektronika)
app.use(r_Usluga)
app.use(r_Stil)
app.use(r_Xobbi)
app.use(r_Free)


app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
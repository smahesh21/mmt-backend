const mysql = require("mysql");
const logger = require('./logger')

const dbConnection = mysql.createConnection({
    host:'db4free.net',
    user:'mahesh7',
    password:"mahesh@7777",
    database:"makemytrip"
})

const del = dbConnection._protocol._delegateError;
dbConnection._protocol._delegateError = function(err, sequence){
  if (err.fatal) {
    console.trace('fatal error: ' + err.message);
  }
  return del.call(this, err, sequence);
};

dbConnection.connect((error)=>{
    if (error) return logger.error(error.message)
    logger.info("Database connected successfully.") 
});


module.exports = dbConnection;
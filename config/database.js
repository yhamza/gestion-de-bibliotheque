const mongoose = require('mongoose');

function dbConnection  (url)  {
    console.log(url);
    mongoose.connect(url)
        .then(()=>console.log('Connected '))
        .catch((e)=>console.log('failed'));

};
module.exports = dbConnection;

let Func = require('./fnc.js');

let currentDate = new Date().toISOString().slice(0,10);




setInterval(function(){
  Func.myFunction();
 
}, 2500);






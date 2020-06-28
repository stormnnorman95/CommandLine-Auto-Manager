var fs = require('fs');
let Log = {
  date: new Date().toISOString().slice(0,10),
  currentTime: new Date().toISOString().slice(11,19),
  _listSales: [],
  get listSales() {
    return this._listSales;
  }, 
  addSales: function(num) {
    this._listSales.push(num);
  },
  
};

Log.rememberFile = function  () {
  let currentDate = new Date().toISOString().slice(0,10);
var data = '';
let newData = [];
let stringMoneyData = [];
let numberMoneyData = [];
var readStream = fs.createReadStream(`${currentDate}.txt`, 'utf8');

readStream.on('data', function(chunk) {
    data += chunk;
    newData = data.split(',')
}).on('end', function() {
    //console.log(newData);
    newData.forEach(function (element) {
        stringMoneyData.push(element);
        
    });
    //console.log(stringMoneyData);

    stringMoneyData.forEach(function (element) {
      numberMoneyData.push(JSON.parse(element))
    });

    //console.log(numberMoneyData);

    let rememberSales = function (a) {
  return (a.length && parseFloat(a[0]) + rememberSales(a.slice(1))) || 0;
  };

let logRememberedSales = function () {
  //console.log(rememberSales(numberMoneyData).toFixed(2));
  Log.addSales(rememberSales(numberMoneyData).toFixed(2));
  };

  logRememberedSales();
    
});


};






 module.exports = Log;
let Log = require('./log.js');
let fs = require('fs');
let logStream = fs.createWriteStream(`${Log.date}.txt`, {flags:'a'});

Log.rememberFile();


let Func = {};

  Func.sumSales = function (a) {
  return (a.length && parseFloat(a[0]) + Func.sumSales(a.slice(1))) || 0;
  };

  Func.logSumSales = function () {
  console.log(Func.sumSales(Log.listSales).toFixed(2));
  };


  Func.myFunction = function (){
    //console.log('working...');
    
    Func.numGenerator = function () {
    let arrNums = [];
    for (let i = 0; i < 8; i++) {
    let randNum = (Math.random() * 50);
    Log.addSales(randNum.toFixed(2));
    arrNums.push(/*Log.currentTime + ' ' + */randNum.toFixed(2));
      };
        //Func.logSumSales();
        arrNums.forEach( function (item,index) {
        logStream.write(0 + ', ' + item );
        arrNums = [];
         });

    };
    Func.numGenerator();
  };
 
  module.exports = Func;

///////////////////////////////////



let branch1 = require('./l.js');
let currentPayOutRate = 0;
let currentTotalPayDay = 0;
let currentArrayOfPay = [];
let currentlyWorking = {
  _workers: [],

  addWorker(job, pay) {
    let worker = {
          job: job,
          pay: pay,
          };
    this._workers.push(worker);
  },
};

function startDay () {
branch1.forEach(function (element) {
    currentlyWorking.addWorker(element.job, element.pay);
    //console.log(element.job, element.pay);
    currentArrayOfPay.push(element.pay)
});
currentArrayOfPay.sort(function(a, b) {
  return a - b;
});

currentPayOutRate = currentArrayOfPay.reduce(function(a, b){
return a + b;
}, 0);

let sales = 0;
//let cost = Func.sumSales(currentArrayOfPay).toFixed(2);
let profit = 0

function savePayRoll () {
  let savePR = fs.createWriteStream(`PR ${Log.date}.txt`, {flags:'a'});
  savePR.write(0 + ', ' + Func.sumSales(currentArrayOfPay).toFixed(2));
};
savePayRoll();
 let toBeTakenFromProfit = 0;
setInterval(function(){
  
  function manageDay () {
////////////////////////////




let numberDataPR = [];
function recoverPayRoll () {
  let currentDate = new Date().toISOString().slice(0,10);
  let costAccumulator = 0;
  var data = '';
  let dataPR = [];
  numberDataPR = [];
  let recoverPR = fs.createReadStream(`PR ${currentDate}.txt`, 'utf8');
  recoverPR.on('data', function(chunk) {
    data += chunk;
    newDataPR = data.split(',')
}).on('end', function() {
    //console.log(newDataPR);
    newDataPR.forEach(function (element) {
        dataPR.push(element);
        
    });
    //console.log(dataPR);
    dataPR.forEach(function (element) {
      numberDataPR.push(JSON.parse(element))
    });
    //console.log(numberDataPR);


let sumRecoveredPR = function (a) {
  return (a.length && parseFloat(a[0]) + sumRecoveredPR(a.slice(1))) || 0;
  };

let logSumRecoveredPR = function () {
  //console.log(rememberSales(numberMoneyData).toFixed(2));
  console.log(sumRecoveredPR(numberDataPR).toFixed(2));
  toBeTakenFromProfit = sumRecoveredPR(numberDataPR).toFixed(2);
  };

  logSumRecoveredPR();

});

};

recoverPayRoll();








 /////////////////////////////////   
    
     sales = Func.sumSales(Log.listSales).toFixed(2);
    //cost = Func.sumSales(currentArrayOfPay).toFixed(2);
     profit = sales - toBeTakenFromProfit;

if (profit < 0){
  currentArrayOfPay.shift();
  console.log('sent someone home');
}; 

    console.log(`Sales: ${sales}`);
    console.log(`Cost: ${toBeTakenFromProfit}`);
    console.log(`Profit: ${profit.toFixed(2)}`);

    /*function savePayRoll () {
  let savePR = fs.createWriteStream(`PR ${Log.date}.txt`, {flags:'a'});
  savePR.write(0 + ', ' + cost);
};*/
savePayRoll();
  
 

};
manageDay();

 
}, 2500);


};

startDay();
  

  
 


  






//imports your code to be tested
const Stock = require("./stock.js");
const Portfolio = require("./portfolio.js");

//Imports my code to run your examples against the economic forcast
//const Forecast = require("./forcast");

function main(){

    //create all of your stocks
    let s1 = new Stock("Apple", "APPL", "NASDAQ", 175.34, 50);
    let s2 = new Stock("NVidia Corp", "NVDA", "NASDAQ", 204.05, 50);
    let s3 = new Stock("Advanced Micro Device", "AMD", "NASDAQ", 11.25, 100);
    let s4 = new Stock("Nintendo Co Ltd", "NTDOF", "OTC Pink", 375.95, 50);

    //build your Portfolio
    let myport = new Portfolio();
    myport.add(s1);
    myport.add(s2);
    myport.add(s3);
    myport.add(s4);

    console.log(s1.sell(10));
    

    //generate a test forcast
    //let economicStorm = new Forecast(myport);
    //console.log(economicStorm);

    //build prediction
}

main();

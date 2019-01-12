const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';

const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');
const aryaSay = say(arya);
const sensaSay = say(sensa);

let sensaS = setInterval(() => sensaSay('For the north'), 1000);

setTimeout(() => 
    clearInterval(sensaS), 11000 
);

setTimeout(() => {
    clearInterval(sensaS);

    setImmediate(() => { 
        aryaSay('thank you for needle');
        sensaS = setInterval(() => sensaSay('For the north'), 1000); 
    });

    johnSay('hello Ladies Stark');
}, 2000);


var timers = module.exports = {};
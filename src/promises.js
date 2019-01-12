const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);


// Sensa must say "For the North" each second
// After the first time Sansa says her sentence, John must say "Winter is coming"
// After each time Sansa says her sentence, Arya must say "The King in the North"
// The program must end after 10 seconds


let intervalSensa = 0;

const sensaRepeat = (ms) => {
    return new Promise((resolve, reject) => {


      intervalSensa = setInterval(() => {
        sensaSay('For the North').then ( val => {
            console.log(val);
            aryaSay('The king in the North').then ( val => {
                console.log(val);
            })
        });
      }, ms);

      setImmediate(() => {
        sensaSay('For the North').then ( val => {
            console.log(val);
            aryaSay('The king in the North').then ( val => {
                console.log(val);
                johnSay('Winter is coming').then ( val => {
                    console.log(val);
                })
            })
        })
     })
   });
};

sensaRepeat(1000);

setTimeout(() => { clearInterval(intervalSensa); }, 10000);


// const sensaThenArya = () =>
//   sensaSay('For the North')
//     .then(result => {
//       console.log(result);
//       return aryaSay('The king in the North');
//     })
//     .then(console.log);

// sensaThenArya()
//   .then(() => johnSay('Winter is coming'))
//   .then(result => {
//     console.log(result);
//     return new Promise((res, rej) => {
//       timer = setInterval(sensaThenArya, 1000);
//       setTimeout(() => {
//         clearInterval(timer);
//         res();
//       }, 10000);
//     });
//   })
//   .catch(err => console.error(err));

setTimeout(() => {

    setInterval(() => console.log('child : I am not blocked'), 1000);
  
  }, 10000);
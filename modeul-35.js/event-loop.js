function tenth() { }

function ninth() { tenth(console.log(10)) }

function eigth() { ninth(console.log(9)) }

function seventh() { eigth(console.log(8)) }

function sixth() { seventh(console.log(7)) }

function fifth() { sixth(console.log(6)) }

function fourth() { fifth(console.log(5)) }

function third() { fourth(console.log(4)) }

function second() { third(console.log(3)) }

function first() { second(console.log(2)) }

first(console.log(1));

async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('done!'), 1000);
    });
    result = await promise;
    console.log(result);
  }
  f();
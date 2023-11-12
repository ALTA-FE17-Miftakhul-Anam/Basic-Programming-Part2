function primeNumber(number: number): boolean {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}


console.log(primeNumber(11)); //true
console.log(primeNumber(13)); //true
console.log(primeNumber(17)); //true
console.log(primeNumber(20)); //false
console.log(primeNumber(35)); //false


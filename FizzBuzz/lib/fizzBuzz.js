
export function fizzbuzz() {
    let miarray = [];
    for (let index = 0; index < 100; index++) {
      const currentValue = index + 1;
  
      if (divisibleBy3(currentValue)) {
        miarray[index] = "Fizz";
      } else {
        miarray[index] = currentValue;
      }
    }
    return miarray;
  }
  
  function divisibleBy3(num) {
    if (num % 3 == 0) {
      return true;
    }
    return false;
  }
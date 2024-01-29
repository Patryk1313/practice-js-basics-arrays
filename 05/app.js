const numbers = [1, 2, 3, 4, 5, 6, 7];

const result = numbers.filter(odd).reduce(function(prev, curr) {
    return prev + curr;
    });

function odd(num) {
    return num % 2 !== 0;
}

console.log(result);
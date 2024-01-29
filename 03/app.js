const n = 100;
const oddNumbers = [];

function addNumber(limit){
    for(let i = 1; i <= limit; i++){
        if(i % 2 !== 0) {
            oddNumbers.push(i)
        }
    }
}

addNumber(n)

console.log(oddNumbers);
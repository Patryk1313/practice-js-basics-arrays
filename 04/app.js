const years = [1980, 1934, 2002, 2019];

const now = new Date();
const accualYear = now.getFullYear();

const result = years.map((a) => a - accualYear)

console.log(result);
// No 1
const emptyArray = [];

// No 2
const arrNum = [1, 2, 3, 4, 5, 6];

// No 3
const arrNumLength = arrNum.length;
console.log(`length of array = ${arrNumLength}`);

// No 4
const firstItem = arrNum[0];
const middleItem = arrNum[Math.floor(arrNumLength / 2)];
const lastItem = arrNum[arrNumLength - 1];

console.log(
  `first item = ${firstItem}, middle item = ${middleItem}, last item = ${lastItem}`,
);

// No 5
const mixedDataTypes = [
  1, // number
  "hello", // string
  true, // boolean
  null, // null
  undefined, // undefined
  { name: "John", age: 30 }, // object
  ["apple", "banana", "orange"], // array
];

console.log(`length of mixed data type ${mixedDataTypes.length}`);
// No 6
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// No 7
console.log(`it companies = ${itCompanies}`);

// No 8
console.log(`number of companies = ${itCompanies.length}`);

// No 9
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastCompany = itCompanies[itCompanies.length - 1];

console.log(
  `first company = ${firstCompany}, middle company = ${middleCompany}, last company = ${lastCompany}`,
);

// No 10
console.log("list of company names");
for (let index = 0; index < itCompanies.length; index++) {
  console.log(itCompanies[index]);
}

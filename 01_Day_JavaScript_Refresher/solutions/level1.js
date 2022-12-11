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

// No 11
console.log("list of company in uppercase");
for (let index = 0; index < itCompanies.length; index++) {
  console.log(itCompanies[index].toUpperCase());
}

// No 12
const companyNames = itCompanies.join(", ");
console.log(`company names = ${companyNames}`);

// No 13
const companyExist = itCompanies.includes("Facebook");
companyExist
  ? console.log("company exist")
  : console.log("company does not exist");

// No 14
console.log("companies have one or more 'o' without the filter method");
for (let index = 0; index < itCompanies.length; index++) {
  const company = itCompanies[index];
  if (company.includes("o")) console.log(company);
}

// No 15
const sortCompany = itCompanies.sort();
console.log(`sorted company = ${sortCompany}`);

// No 16
const reverseCompany = itCompanies.sort();
console.log(`reversed company = ${reverseCompany}`);

// No 17
const sliceThreeCompany = itCompanies.slice(0, 3);
console.log(`first three companies = ${sliceThreeCompany}`);

// No 18
const sliceLastThreeCompany = itCompanies.slice(itCompanies.length - 3);
console.log(`last three companies = ${sliceLastThreeCompany}`);

// No 20
const removeFirstCompany = itCompanies.shift();
console.log(`removed first company = ${removeFirstCompany}`);

// No 21
const removeLastCompany = itCompanies.pop();
console.log(`removed last company = ${removeLastCompany}`);

// No 22
const removeCompany = itCompanies.splice(2, 1);
console.log(`removed company = ${removeCompany}`);

// No 23

const removeAllCompany = itCompanies.splice(0, itCompanies.length);
console.log(`removed all companies = ${removeAllCompany}`);

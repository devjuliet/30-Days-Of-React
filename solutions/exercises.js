const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const arr = [];
const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.length);

console.log(
  numbers[0],
  numbers[numbers.length / 2],
  numbers[numbers.length - 1]
);

const mixedDataTypes = [1, "Hola", { hello: "hello" }];

console.log(mixedDataTypes);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);

console.log(itCompanies.length);
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

console.log(itCompanies.join(", ") + " are big IT companies.");

if (!itCompanies.includes("Wizeline")) {
  console.log("not found");
}

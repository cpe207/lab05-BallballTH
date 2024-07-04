// define interface for Student object

import { stderr } from "process";

/* Your code here */
interface student {
  name:string;
  score:number;
}

// assign interface/type to the function definition properly
function findTopNames(students:student[]) {
  /* Your code here */
  const passed = students
  .filter((std) => std.score > 8)
  .map((std) => std.name);
  return passed;
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;

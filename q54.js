let students = new Map();


students.set(101, "Aman");
students.set(102,"Riya");
students.set(103, "Rahul");

console.log("Student Details:");
console.log(students);


students.delete(102);


if (students.has(103)) {
    console.log("Student Found:",students.get(103));
}
else {
    console.log("Student Not Found");
}


console.log("All Students:");

for (let [roll,name] of students) {
    console.log(roll, name);
}
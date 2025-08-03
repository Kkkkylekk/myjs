// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];

// Start coding here...
const uppernames = document.createElement("h2");
uppernames.textContent = "Student Names (Uppercase)";
document.body.appendChild(uppernames);


students.map(student => {
  const p = document.createElement("p");
  p.textContent = student.name.toUpperCase();
  document.body.appendChild(p);
});


const HGHeader = document.createElement("h2");
HGHeader.textContent = "Students with Grade ≥ 85";
document.body.appendChild(HGHeader);


const HGStudents = students.filter(student => (student.grade ?? 0) >= 85);
HGStudents.forEach(student => {
  const p = document.createElement("p");
  p.textContent = displayStudent(student);
  document.body.appendChild(p);
});


const totalGrades = students.reduce((sum, student) => sum + (student.grade ?? 0), 0);
const average = totalGrades / students.length;

const avgHeader = document.createElement("h2");
avgHeader.textContent = `Average Grade: ${average.toFixed(2)}`;
document.body.appendChild(avgHeader);


function displayStudent({ name, grade = 0 }) {
  return `${name}: ${grade}`;
}
//Declare studentList Array
let studentList = [    {        firstName: "Allan",        lastName: "Able",        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

// Extra credit points
for (let i = 0; i < studentList.length; i++) {
  studentList[i].scores = studentList[i].scores.map(score => score + 5);
}

// Missing exam score
for (let i = 0; i < studentList.length; i++) {
  const avgScore = studentList[i].scores.reduce((total, score) => total + score, 0) / studentList[i].scores.length;
  studentList[i].scores.push(avgScore);
}

// Display results
for (let i = 0; i < studentList.length; i++) {
  console.log(`${studentList[i].lastName}, ${studentList[i].firstName}:`);
  console.log(`   Scores: ${studentList[i].scores.slice(0, -1).join(", ")}`); // exclude last score, which is the average
  console.log(`   Average score: ${studentList[i].scores.slice(-1)}\n`); // display only the last score, which is the average
}

const { Student, Campus } = require('../database/models');

const students = require('../data/students');
const campuses = require('../data/campuses');

// const populateStudentsTable = async (students) => {

//   for (let i = 0; i < students.length; i++) {
//     let currentStudent = students[i];
//     let builtStudent = await Student.build(currentStudent);
//     // console.log(Object.keys(builtPlayer.__proto__));

//     if (i < 11) {
//       builtStudent.campusId = 1;
//       await builtStudent.save();
//       await builtStudent.addCampus(); // Players trained solely by Tyler Relph;
//     }
//     else if (i >= 11 && i < 22) {
//       builtPlayer.teamId = 2;
//       await builtPlayer.save();
//       await builtPlayer.addTrainer(jlawbball); // Players trained solely by Jordan Lawley;
//     }
//     else if (i >= 22 && i < 33) {
//       builtPlayer.teamId = 3;
//       await builtPlayer.save();
//       await builtPlayer.addTrainer(tylerrelph10); // Players trained by both Tyler Relph...;
//       await builtPlayer.addTrainer(jlawbball); // ...and by Jordan Lawley, too;
//     }
//   }
// }

// const populateCampusesTable = async (campuses) => {
//   for (let i = 0; i < coaches.length; i++) {
//     let currentCoach = coaches[i];
//     let builtCoach = await Coach.build(currentCoach);
//     builtCoach.teamId = i + 1;
//     await builtCoach.save();
//   }
// }

const seedDatabase = async () => {
  try {
    // await populateStudentsTable(students);
    // await populateCampusesTable(campuses);
    console.log("Successfully seeded!");
    process.exit(0);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}

seedDatabase();

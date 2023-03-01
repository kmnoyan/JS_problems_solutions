const students = [
  {
    studentName: 'Bob',
    score: 5,
    class: 1,
  },
  {
    studentName: 'Jane',
    score: 8,
    class: 5,
  },
  {
    studentName: 'Jack',
    score: 10,
    class: 9,
  },
  {
    studentName: 'Mary',
    score: 3,
    class: 1,
  },
  {
    studentName: 'Mike',
    score: 8,
    class: 5,
  },
  {
    studentName: 'Kile',
    score: 6,
    class: 10,
  },
  {
    studentName: 'Lily',
    score: 1,
    class: 9,
  },
  {
    studentName: 'Leon',
    score: 8,
    class: 7,
  },
  {
    studentName: 'Hayk',
    score: 10,
    class: 8,
  },
  {
    studentName: 'Arpine',
    score: 10,
    class: 9,
  },
];
// 1. Get the object with classes and average values

const newClassObject = students.reduce((accumulator, currentValue) => {
  let key = currentValue.class;
  let value = currentValue.score;

  if (!accumulator[key]) {
    accumulator[key] = [];
  }
  accumulator[key].push(value);

  return accumulator;
}, {});

for (let classes in newClassObject) {
  let gradesArray = newClassObject[classes];
  const averageGradesArray =
    gradesArray.reduce((a, b) => a + b, 0) / gradesArray.length;

  newClassObject[classes] = averageGradesArray;
}
console.log(newClassObject);

// 2. Get the object with classes and students names

const newClassStudentsObject = students.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.class]) {
    accumulator[currentValue.class] = [];
  }
  accumulator[currentValue.class].push(currentValue.studentName);

  return accumulator;
}, {});

console.log(newClassStudentsObject);

// 3. Get the object with classes and students whose grade is higher or equal than 5

const newStudentsObjectWithHighestGrades = students.reduce(
  (accumulator, currentValue) => {
    if (!accumulator[currentValue.class]) {
      accumulator[currentValue.class] = [];
    }
    if (currentValue.score >= 5) {
      accumulator[currentValue.class].push(currentValue.studentName);
    }
    return accumulator;
  },
  {}
);
console.log(newStudentsObjectWithHighestGrades);

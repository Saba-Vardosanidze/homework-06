class Person {
  name = null;
  age = null;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce = () => {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  };
}

class Student extends Person {
  grade = null;
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
    this.subjects = [];
  }

  study(subject) {
    if (!this.subjects.includes(subject)) {
      this.subjects.push(subject);
    }
  }

  getInfo() {
    return `Student: ${this.name}, Grade: ${this.grade}, Subjects: ${this.subject}`;
  }
}

class Teacher extends Person {
  subject = null;
  salary = [];
  constructor(name, age, subject, salary) {
    super(name, age);
    this.subject = subject;
    this.salary = salary;
  }
  teach() {
    return `Mr/Ms. ${this.name} is teaching ${this.subject}`;
  }
  getInfo() {
    return `Teacher: ${this.name}/, Subject: X, Salary: ${this.salary}`;
  }
}

class Classroom {
  teacher = null;
  students = [];
  constructor(teacher) {
    this.teacher = teacher;
    this.students = [];
  }

  addStudent = (student) => {
    this.students.push(student);
  };
  listMembers() {
    console.log(this.teacher.getInfo());
    this.students.forEach((student) => {
      console.log(student.getInfo());
    });
  }
  findStudent(name) {
    return this.students.find((student) => student.name === name) || null;
  }
}
